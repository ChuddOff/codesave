import clientPromise from "@/lib/mongoConnect";
import code, {ICode} from "@/lib/model";
import {Db, ObjectId} from "mongodb";
import {NextApiRequest, NextApiResponse} from "next";
import {NextResponse} from "next/server";

interface IbodyPost {
    name: string,
    description: string,
    show: boolean,
    author: string,
    html: string,
    css: string,
    js: string
}

interface IbodyPut {
    _id: ObjectId,
    name: string,
    description: string,
    show: boolean,
    author: string,
    html: string,
    css: string,
    js: string
}

interface IbodyGet {
    author: string;
}

export async function CodeHandler(req: NextApiRequest, res: NextApiResponse) {
    await clientPromise;

    switch (req.method) {
        case 'GET':
            try {
                const bodyObject = req.body as IbodyGet;
                // author

                const newCodes = await code.find({author: bodyObject.author})

                if (!newCodes) {
                    return NextResponse.json({status: 400})
                }

                return NextResponse.json({status: 200, code: newCodes})
            } catch (error) {
                return NextResponse.json({status: 400, error: error})
            }
    }
}