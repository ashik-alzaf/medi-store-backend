import { auth } from "./lib/auth";
import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { notFound } from "./middleware/not-found";
import { medicineRoutes } from "./modules/medicine/medicine.route";

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.APP_PUBLIC_URL || "http://localhost:3000",
    credentials: true,
  }),
);
app.all("/api/auth/*splat", toNodeHandler(auth));

// medicine route
app.use("/api/seller/medicines", medicineRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("hellow world");
});

app.use(notFound);

export default app;
