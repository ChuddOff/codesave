import clientPromise from "@/lib/mongoConnect";
import code, {ICode} from "@/lib/model";
import {Db, ObjectId} from "mongodb";
import {NextApiRequest, NextApiResponse} from "next";

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
    _id: ObjectId;
    author: string;
}

export async function CodeHandler(req: NextApiRequest, res: NextApiResponse) {
    await clientPromise;

    switch (req.method) {
        case 'POST':
            try {
                const bodyObject = req.body as IbodyPost;
                // name, description, show, author, html, css, js

                const newCode = await code.create(bodyObject)

                await newCode.save()

                res.status(201);
            } catch (error) {
                res.status(400).json({success: false, error});
            }
        case 'GET':
            try {
                const bodyObject = req.body as IbodyGet;
                // _id, author
                let object;
                const newCode = await code.findOne({_id: bodyObject._id}, function (err, obj) {
                    object = obj
                })

                if (!newCode) {
                    res.status(400);
                }

                if (!object.show && object.author === bodyObject.author) {
                    res.status(400);
                }

                res.status(201).json(newCode);
            } catch (error) {
                res.status(400).json({success: false, error});
            }
        case 'DELETE':
            try {
                const bodyObject = req.body as IbodyGet;
                // _id, author
                let object;
                const newCode = await code.findOne({_id: bodyObject._id}, function (err, obj) {
                    object = obj
                })

                if (!newCode) {
                    res.status(400);
                }

                if (!object.show && object.author === bodyObject.author) {
                    res.status(400);
                }

                await code.deleteOne({_id: bodyObject._id})

                res.status(201)

            } catch (error) {
                res.status(400).json({success: false, error});
            }
        case 'PUT':
            try {
                const bodyObject = req.body as IbodyPut;
                // _id, name, description, show, author, html, css, js

                await code.deleteOne({_id: bodyObject._id})

                const newCode = await code.create({
                    name: bodyObject.name,
                    description: bodyObject.description,
                    show: bodyObject.show,
                    author: bodyObject.author,
                    html: bodyObject.html,
                    css: bodyObject.css,
                    js: bodyObject.js
                })

                await newCode.save()

                res.status(201);
            } catch (error) {
                res.status(400).json({success: false, error});
            }
    }
}