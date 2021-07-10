import express from 'express'
import {PORT} from "./utils/utils";
import {Connection} from "./database/db";
import * as dotenv from 'dotenv';
import DefaultData from "./default";

dotenv.config()

const app = express();

// const username = process.env.NODE_ENV_DB_USERNAME;
// const password = process.env.NODE_ENV_DB_USERNAME;

// console.log(process.env)

Connection("aman", "12345");
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})

DefaultData();



