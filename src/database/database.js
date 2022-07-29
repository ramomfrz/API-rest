import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";

sqlite3.verbose()
<<<<<<< HEAD
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db"
=======
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.bd"
>>>>>>> 432ab8bd4b9fb9f4fb1b13c5b4cefcee6cba3e3c
const Database = new sqlite3.Database(filePath)

export default Database