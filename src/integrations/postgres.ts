import 'reflect-metadata';
import {createConnection} from "typeorm";
import {Users} from "../models/users";
import {Expenses} from "../models/expenses";

const createConnectionDB = async () => {
    const connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 52923,
        username: "postgres",
        password: "123",
        database: "postgres",
        entities: [
            Users,
            Expenses
        ],
        migrations: [__dirname + '/migration/**/*.{ts,js}'],
        migrationsTableName: '_migrations',
        synchronize: true,
        cli: {
            migrationsDir: 'src/migration',
            entitiesDir: 'src/models',
        },
    })
    console.log('Connection with database is success!')
    return connection
}

export default createConnectionDB;