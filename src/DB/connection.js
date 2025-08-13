import mongoose from "mongoose";

export function connectDB() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Saraha_App")
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      console.log("Fail to connect to DB", err.message);
    });
}
