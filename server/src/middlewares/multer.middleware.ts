import multer, { StorageEngine } from "multer";
import { Request } from "express";
import { join } from "path";

const diskStorage: StorageEngine = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, join(__dirname, "../../public/temp/images"));
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) => {
    cb(null, file.originalname);
  },
});

export const uploadImage = multer({ storage: diskStorage });
