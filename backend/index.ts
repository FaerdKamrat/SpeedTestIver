import express, { Express, Request, Response } from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import cron from 'node-cron'
import { PrismaClient } from '@prisma/client'
import * as op from './OP/OP'


dotenv.config();
export const prisma = new PrismaClient()
const app: Express = express();
app.use(cors())
const port = process.env.PORT;

cron.schedule('* 30 * * * *', ()=>op.CheckSpeed())

app.get('/', (req: Request, res: Response) => {
    const req_data = JSON.parse(String(req.query.id))
    main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

    async function main() {
        
        // får alla hastighets data för idag eller om en annan dag är specificerat
        if(req_data.route === "getDay") res.status(200).json(await op.GetDay(req_data.data))

        //får alla hastighets data för den nuvarande veckan eller om en annan vecka är specificerat
        else if(req_data.route === "getWeek") res.status(200).json(await op.GetWeek(req_data.data))

        //får alla hastighets data för den nuvarande månaden eller om en annan måndad är specificerat
        else if(req_data.route === "getMonth") res.status(200).json(await op.GetMonth(req_data.data))

        //får alla hastighets data för den nuvarande året eller om en annat år är specificerat
        else if(req_data.route === "getYear") res.status(200).json(await op.GetYear(req_data.data))

        // får data från en datum till en annan.
        else if(req_data.route === "getCustom") res.status(200).json(await op.GetCustom(req_data.data))

        else res.status(404)
    }
});

app.listen(port, () => {
  console.log(`🔥Powered By OP⚡️ http://localhost:${port}`);
});