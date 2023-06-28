import { createPool } from "mysql2/promise";

const pool = createPool({
    host: "localhost",
    user: "antonio",
    password: "123456789",
    port: "8889",
    database: "productsdb",
});

export {pool};