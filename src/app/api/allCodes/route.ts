import clientPromise from "@/lib/mongoConnect";
import code, {ICode} from "@/lib/model";
import {Db, ObjectId} from "mongodb";
import {NextApiRequest, NextApiResponse} from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    console.log(123);
    const md = await clientPromise;

    try {

        const newCode = await code.find({}); // Используем toArray() для преобразования результата в массив

        res.status(209).json({message: "Hello, World!"});
    } catch (error) {
        res.status(500).json({success: false, error: 'Internal server error'}); // Код 500 для внутренней ошибки сервера
    }
}
