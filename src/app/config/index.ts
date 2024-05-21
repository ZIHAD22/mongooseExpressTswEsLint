import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });
const port = process.env.PORT;
const database_url = process.env.SERVER_URL;

export { port, database_url };
