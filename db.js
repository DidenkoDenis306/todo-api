import dotenv from 'dotenv';
import {Sequelize} from "sequelize";

dotenv.config();

const sequalize = new Sequelize( process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    port: Number(process.env.POSTGRES_PORT),
})

export default sequalize;
