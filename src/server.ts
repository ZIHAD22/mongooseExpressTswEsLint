import mongoose from "mongoose";
import { port, database_url } from "./app/config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(database_url as string);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
