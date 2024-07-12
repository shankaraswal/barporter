import dotenv from "dotenv";
import connectDB from "./db_connection";
import app from "./app";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("-----------------------");
      console.log(
        `BACKEND SERVER IS RUNNING ON [ __${process.env.NODE_ENV}__ ] ENVIRONMENT`
      );
      console.log(`http://localhost:${process.env.PORT}`);
      console.log("");
    });
  })
  .catch((err) => console.log("DB a CONNECTION FAILED: ", err));
