import type { Request, Response } from "express";
import { medicineServices } from "./medicine.service";

const createMedicine = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return;
    }
    const result = await medicineServices.createMedicine(
      req.body,
      userId as string,
    );
    res.status(201).json({
      success: true,
      message: "Successfully Create",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const medicineControllers = {
  createMedicine,
};
