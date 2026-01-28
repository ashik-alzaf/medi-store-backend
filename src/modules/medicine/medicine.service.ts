import type { Medicine } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createMedicine = async (
  data: Omit<Medicine, "createdAt" | "updatedAt">,
  authorId: string,
) => {
  console.log("medicine", data, "id:", authorId);
  return await prisma.medicine.create({
    data: {
      ...data,
      id: authorId,
    },
  });
};

export const medicineServices = {
  createMedicine,
};
