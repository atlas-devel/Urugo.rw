import type { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { generatePropertyId } from "../../utils/propertyId";
import { District } from "../../generated/prisma/enums";

export const createProperty = async (req: Request, res: Response) => {
  const { landlordId } = req.params;
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

  let updatedDistrictNumber: string | undefined;
  try {
    const existingProperty = await prisma.property.findUnique({
      where: { id: propertyId },
      select: { id: true, district: true },
    });

    if (!existingProperty) {
      res.status(404).json({ success: false, message: "Property not found" });
      return;
    }
    if (district !== existingProperty.district) {
      const latestPropertyNumber = await prisma.$transaction(async (tx) => {
        const propetyNumber = await tx.property.findFirst({
          where: { district: district.toUpperCase() },
          orderBy: { createdAt: "desc" },
          select: { propety_number: true },
        });
        return propetyNumber?.propety_number;
      });

      if (!latestPropertyNumber) {
        updatedDistrictNumber = generatePropertyId(district, null);
      } else {
        updatedDistrictNumber = generatePropertyId(
          district,
          latestPropertyNumber,
        );
      }
    }
    const updatedProperty = await prisma.property.update({
      where: { id: propertyId },
      data: {
        address,
        propety_number: district ? updatedDistrictNumber : undefined,
        city, //inforce forntend to send city in capital letters to avoid confusion and maintain consistency in the database
        province, // inforce frontend to send province in capital letters to avoid confusion and maintain consistency in the database
        district: district?.toUpperCase() as District,
        sector, //inforce frontend to send sector in capital letters to avoid confusion and maintain consistency in the database
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
      message: "Something went wrong while updating the property",
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

  //dynamic filter from query params
  const where: Record<string, unknown> = {};

  if (req.query.district)
    where.district = (req.query.district as string).toUpperCase();
  if (req.query.city) where.city = req.query.city;
  if (req.query.province)
    where.province = (req.query.province as string).toUpperCase();
  if (req.query.sector) where.sector = (req.query.sector as string).toUpperCase();
  if (req.query.property_type) where.property_type = (req.query.property_type as string).toUpperCase();
  if (req.query.status) where.status = (req.query.status as string).toUpperCase();
  if (req.query.isActive) where.isActive = req.query.isActive === "true";
  if (req.query.bedrooms) where.bedrooms = Number(req.query.bedrooms);
  if (req.query.bathrooms) where.bathrooms = Number(req.query.bathrooms);

  if (req.query.minRent || req.query.maxRent) {
    where.monthlyRent = {
      ...(req.query.minRent && { gte: Number(req.query.minRent) }),
      ...(req.query.maxRent && { lte: Number(req.query.maxRent) }),
    };
  }

  try {
    const [properties, totalProperties] = await Promise.all([
      prisma.property.findMany({
        where,
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
      prisma.property.count({ where }),
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

//plan to get the payment history and lease details of the property  based in current id from params
//also plan to get the tenant details who is currently renting the property based on the current active lease contract of the property
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
        approvedAt: true, //not in public

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
