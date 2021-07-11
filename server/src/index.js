import express from 'express'
import {PORT} from "./utils/utils.js";
import {Connection} from "./database/db.js";
import * as dotenv from 'dotenv';
import DefaultData from "./default.js";
import bodyParser from "body-parser";
import cors from 'cors'
import Routes from './routes/routes.js'

dotenv.config()

// interface bodyParserInterface extends OptionsJson{
//     extended: boolean
// }

const app = express();

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.use('/', Routes)



// const username = process.env.NODE_ENV_DB_USERNAME;
// const password = process.env.NODE_ENV_DB_USERNAME;

// console.log(process.env)

Connection("aman", "12345");
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})

DefaultData();



