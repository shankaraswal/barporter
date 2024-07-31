import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    // origin: process.env.CORS_ORIGIN,
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({ limit: "300kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// user routes
import { userRoutes, itemRoutes } from "./routes";

// route declaration
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/items", itemRoutes);

export default app;
