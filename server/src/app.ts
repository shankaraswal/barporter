import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({ limit: "300kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// user routes
import userRoutes from "./routes/user.routes";

// route declaration
app.use("/api/v1/users", userRoutes);

export default app;
