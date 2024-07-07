import clientPromise from "@/lib/mongoConnect";
import code, {ICode} from "@/lib/model";
import {Db, ObjectId} from "mongodb";
import {NextApiRequest, NextApiResponse} from "next";
import {NextResponse} from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    console.log(123)
    await clientPromise;

    try {

        const newCode = await code.find(); // Используем toArray() для преобразования результата в массив

        return NextResponse.json(newCode);
    } catch (error) {
        return NextResponse.json({error}); // Код 500 для внутренней ошибки сервера
    }
}
