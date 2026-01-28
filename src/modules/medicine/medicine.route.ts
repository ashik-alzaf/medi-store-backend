import { Router } from "express";
import { medicineControllers } from "./medicine.controller";
import { middleware, UserRole } from "../../middleware/middleware";
const router = Router();
router.post(
  "/",
  middleware(UserRole.SELLER),
  medicineControllers.createMedicine,
);

export const medicineRoutes = router;
