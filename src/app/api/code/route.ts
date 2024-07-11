import clientPromise from "@/lib/mongoConnect";
import code, { ICode } from "@/lib/model";
import { Db, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

interface IbodyPost {
  name: string;
  description: string;
  show: boolean;
  author: string;
  html: string;
  css: string;
  js: string;
}

interface IbodyPut {
  _id: string;
  name: string;
  description: string;
  show: boolean;
  author: string;
  html: string;
  css: string;
  js: string;
}

interface IbodyGet {
  _id: string;
  author: string;
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  await clientPromise;

  try {
    const bodyObject = (await req.json()) as IbodyPut;
    // _id, name, description, show, author, html, css, js

    const Code = await code.findOne({ _id: bodyObject._id }).exec();

    if (Code!.author !== bodyObject.author) {
      return NextResponse.json({ status: 403 });
    }

    await code.deleteOne({ _id: bodyObject._id });

    const newCode = await code.create({
      _id: bodyObject._id,
      name: bodyObject.name,
      description: bodyObject.description,
      show: bodyObject.show,
      author: bodyObject.author,
      html: bodyObject.html,
      css: bodyObject.css,
      js: bodyObject.js,
    });

    await newCode.save();

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 400, error: error });
  }
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  await clientPromise;

  try {
    const bodyObject = (await req.json()) as IbodyPost;
    // name, description, show, author, html, css, js

    console.log(bodyObject);
    const newCode = await code.create(bodyObject);

    await newCode.save();

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 400, error: error });
  }
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await clientPromise;

  try {
    const url = new URL(req.url || "");
    const params = new URLSearchParams(url.searchParams);

    const _id = params.get("_id");
    const author = params.get("author");

    const newCode = await code.findOne({ _id: _id }).exec();

    if (!newCode) {
      return NextResponse.json({ status: 400 });
    }

    console.log(author);

    if (!newCode.show && newCode.author !== author) {
      return NextResponse.json({ status: 403 });
    }

    return NextResponse.json({ status: 200, code: newCode });
  } catch (error) {
    return NextResponse.json({ status: 400, error: error });
  }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  await clientPromise;

  try {
    const url = new URL(req.url || "");
    const params = new URLSearchParams(url.searchParams);

    const _id = params.get("_id");
    const author = params.get("author");

    const Code = await code.findOne({ _id: _id }).exec();

    if (Code!.author !== author) {
      return NextResponse.json({ status: 403 });
    }

    await code.deleteOne({ _id: _id });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 400, error: error });
  }
}
