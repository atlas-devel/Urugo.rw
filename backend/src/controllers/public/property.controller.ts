import type { Request, Response } from "express";
import prisma from "../../utils/prisma";

export const getAvailableProperties = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = 15;
  const skip = (page - 1) * limit;

  try {
    const [properties, totalProperties] = await Promise.all([
      prisma.property.findMany({
        where: {
          status: "AVAILABLE",
        },
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          address: true,
          district: true,
          monthlyRent: true,
          property_type: true,
          property_photos: true,
          status: true,
        },
      }),
      prisma.property.count({
        where: {
          status: "AVAILABLE",
        },
      }),
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

export const getAvailablePropertyDetailById = async (
  req: Request,
  res: Response,
) => {
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
    if (property.status !== "AVAILABLE") {
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
