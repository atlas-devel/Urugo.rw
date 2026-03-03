import bcrypt from "bcrypt";
import type { Request, Response } from "express";
import prisma from "../utils/prisma";
import { generatePropertyId } from "../utils/propertyId";
import { District } from "../generated/prisma/enums";

export const createUser = async (req: Request, res: Response) => {
  const {
    name,
    email,
    phoneNumber,
    nationalId,
    password,
    role,
    issueCountry,
    address,
  } = req.body;

  if (!name || !nationalId || !password || !role || !address || !issueCountry) {
    res
      .status(400)
      .json({ success: false, message: "All fields are required" });
    return;
  }
  if (!email && !phoneNumber) {
    res
      .status(400)
      .json({ success: false, message: "Email or phone number is required" });
    return;
  }
  if (issueCountry.toLowerCase() === "rwanda" && !/^\d{16}$/.test(nationalId)) {
    res.status(400).json({
      success: false,
      message: "Invalid National ID format for Rwanda",
    });
    return;
  }

  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    )
  ) {
    res.status(400).json({
      success: false,
      message:
        "Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters",
    });
    return;
  }

  const existingUser: {
    nationalId: string;
    banned: boolean | null;
    banReason: string | null;
    banExpires: Date | null;
    email: string | null;
    phoneNumber: string | null;
  } | null = await prisma.user.findFirst({
    where: { OR: [{ email }, { nationalId }, { phoneNumber }] },
    select: {
      nationalId: true,
      banned: true,
      banReason: true,
      banExpires: true,
      email: true,
      phoneNumber: true,
    },
  });

  if (existingUser) {
    // banned user
    if (existingUser.banned && new Date() < (existingUser.banExpires ?? 0)) {
      res.status(403).json({
        success: false,
        message: `User is banned until ${existingUser.banExpires}. Reason: ${existingUser.banReason}`,
      });
      return;
    }
    // validate duplicate phone number
    if (existingUser.phoneNumber === phoneNumber) {
      res.status(400).json({
        success: false,
        message: "Phone number is already associated with another account",
      });
      return;
    }
    //validate duplicate email
    if (existingUser.email === email) {
      res.status(400).json({
        success: false,
        message: "Email is already associated with another account",
      });
      return;
    }
    // validate duplicate national ID
    if (existingUser.nationalId === nationalId) {
      res.status(400).json({
        success: false,
        message: "User with this national ID already exists",
      });
      return;
    }
  }

  const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
    email,
  );
  if (email && !validateEmail) {
    res.status(400).json({ success: false, message: "Invalid email format" });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        name,
        email,
        phoneNumber,
        nationalId,
        password: hashedPassword,
        role,
        issueCountry,
        address,
      },
    });
    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: "Error: " + error,
    });
    return;
  }
};

export const createProperty = async (req: Request, res: Response) => {
  let { landlordId } = req.params;
  const {
    address,
    city,
    province,
    district,
    sector,
    bedrooms,
    bathrooms,
    hasParking,
    hasWifi,
    securityIncluded,
    monthlyRent,
    initialPaymentMonths,
    initialPaymentPrice,
    includesWater,
    includesElectricity,
    property_type,
    description,
    property_photos,
    amenities,
  } = req.body;

  if (!landlordId) {
    res
      .status(400)
      .json({ success: false, message: "Landlord ID is required" });
    return;
  }
  if (
    !address ||
    !city ||
    !province ||
    !district ||
    !sector ||
    !bedrooms ||
    !bathrooms ||
    !monthlyRent ||
    !property_type ||
    !property_photos
  ) {
    res
      .status(400)
      .json({ success: false, message: "Important Fields are missing" });
    return;
  }

  try {
    // make transaction to ensure one property number is generated at a time for a district to avoid duplicates in concurrent requests
    const property = await prisma.$transaction(
      async (tx) => {
        // query the last generated property number
        const latestPropertyNumber = await tx.property.findFirst({
          where: { district: district.toUpperCase() },
          orderBy: { createdAt: "desc" },
          select: { propety_number: true },
        });

        let newPropertyNumber: string;

        if (!latestPropertyNumber) {
          newPropertyNumber = generatePropertyId(district, null);
        } else {
          newPropertyNumber = generatePropertyId(
            district,
            latestPropertyNumber.propety_number,
          );
        }

        const adminApproval = req.userInfo?.name as string; //from auth middleware

        const newProperty = {
          landlordId: landlordId as string,
          propety_number: newPropertyNumber,
          address: address.toUpperCase() as District,
          city,
          province,
          district,
          sector,
          bedrooms,
          bathrooms,
          hasParking,
          hasWifi,
          securityIncluded,
          monthlyRent,
          initialPaymentMonths,
          initialPaymentPrice,
          includesWater,
          includesElectricity,
          property_type,
          description,
          property_photos,
          amenities,
          approvedBy: adminApproval,
          approvedAt: new Date(),
        };

        return await tx.property.create({
          data: newProperty,
        });
      },

      {
        isolationLevel: "Serializable",
      },
    );
    res.status(201).json({
      success: true,
      message: "Property created successfully",
      data: property,
    });
  } catch (error) {
    console.error("Error creating property:", error); //debug log
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: "Error: " + error,
    });
  }
};

export const updateProperty = async (req: Request, res: Response) => {
  const propertyId = req.params.propertyId as string;
  const {
    address,
    city,
    province,
    district,
    sector,
    bedrooms,
    bathrooms,
    hasParking,
    hasWifi,
    securityIncluded,
    monthlyRent,
    initialPaymentMonths,
    initialPaymentPrice,
    includesWater,
    includesElectricity,
    property_type,
    description,
    property_photos,
    amenities,
    status,
    isActive,
  } = req.body;

  if (
    !address &&
    !city &&
    !province &&
    !district &&
    !sector &&
    !bedrooms &&
    !bathrooms &&
    !hasParking &&
    !hasWifi &&
    !securityIncluded &&
    !monthlyRent &&
    !initialPaymentMonths &&
    !initialPaymentPrice &&
    !includesWater &&
    !includesElectricity &&
    !property_type &&
    !description &&
    !property_photos &&
    !amenities &&
    status === undefined &&
    isActive === undefined
  ) {
    res.status(400).json({
      success: false,
      message: "At least one field is required to update the property",
    });
    return;
  }

  if (!propertyId) {
    res
      .status(400)
      .json({ success: false, message: "Property ID is required" });
    return;
  }

  try {
    const existingProperty = await prisma.property.findUnique({
      where: { id: propertyId },
      select: { id: true },
    });

    if (!existingProperty) {
      res.status(404).json({ success: false, message: "Property not found" });
      return;
    }
    const updatedProperty = await prisma.property.update({
      where: { id: propertyId },
      data: {
        address: address?.toUpperCase(),
        city,
        province,
        district,
        sector,
        bedrooms,
        bathrooms,
        hasParking,
        hasWifi,
        securityIncluded,
        monthlyRent,
        initialPaymentMonths,
        initialPaymentPrice,
        includesWater,
        includesElectricity,
        property_type,
        description,
        property_photos,
        amenities,
        status,
        isActive,
      },
    });

    res.status(200).json({
      success: true,
      message: "Property updated successfully",
    });
  } catch (error) {
    console.error("Error updating property:", error); //debug log
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: "Error: " + error,
    });
  }
};

export const deleteProperty = async (req: Request, res: Response) => {
  const propertyId = req.params.propertyId as string;

  if (!propertyId) {
    res
      .status(400)
      .json({ success: false, message: "Property ID is required" });
    return;
  }
  try {
    const existingProperty = await prisma.property.findUnique({
      where: { id: propertyId },
      select: { id: true },
    });
    if (!existingProperty) {
      res.status(404).json({ success: false, message: "Property not found" });
      return;
    }
    const deleteProperty = await prisma.property.delete({
      where: { id: propertyId },
    });

    //add admin log here to log the deleted property with req.userInfo?.name as the admin who performed the deletion

    res.status(200).json({
      success: true,
      message: "Property deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting property:", error); //debug log
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: "Error: " + error,
    });
  }
};

export const getAllProperties = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = 15;
  const skip = (page - 1) * limit;

  try {
    const [properties, totalProperties] = await Promise.all([
      await prisma.property.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          address: true,
          city: true,
          district: true,
          monthlyRent: true,
          property_type: true,
          property_photos: true,
          isActive: true,
          status: true,
          approvedBy: true,
        },
      }),
      await prisma.property.count(),
    ]);
    const totalPages = Math.ceil(totalProperties / limit);

    if (properties.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No properties found",
        data: {
          properties: [],
          totalProperties,
          totalPages: 0,
          currentPage: page,
        },
      });
    }

    res.status(200).json({
      success: true,
      message: "Properties fetched successfully",
      data: {
        properties,
        totalProperties,
        totalPages,
        currentPage: page,
      },
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: "Error: " + error,
    });
  }
};

export const getPropertyById = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  try {
    const property = await prisma.property.findUnique({
      where: { id },
      select: {
        id: true,
        property_photos: true,
        address: true,
        city: true,
        province: true,
        district: true,
        sector: true,
        bedrooms: true,
        bathrooms: true,
        hasParking: true,
        hasWifi: true,
        securityIncluded: true,
        monthlyRent: true,
        initialPaymentMonths: true,
        includesWater: true,
        includesElectricity: true,
        property_type: true,
        status: true,
        description: true,
        amenities: true,

        approvedBy: true, //not in public
        createdAt: true, //not in public
        contractUrl: true, //not in public
        approvedAt:true,//not in public

        landlord: {
          select: {
            name: true,
            email: true,
            phoneNumber: true,
          },
        },
      },
    });

    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Property fetched successfully",
      data: property,
    });
  } catch (error) {
    console.error("Error fetching property:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: "Error: " + error,
    });
  }
};

export const banUser = async (req: Request, res: Response) => {};

//TODO: make unban user
