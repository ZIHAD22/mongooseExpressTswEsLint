import mongoose from "mongoose";
import confiq from "./app/confiq";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(confiq.database_url as string);
    app.listen(confiq.port, () => {
      console.log(`Example app listening on port ${confiq.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
