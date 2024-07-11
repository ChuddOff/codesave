import clientPromise from "@/lib/mongoConnect";
import code, { ICode } from "@/lib/model";
import { Db, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

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
  author: string;
}

export async function GET(req: NextRequest) {
  await clientPromise;

  try {
    const url = new URL(req.url || "");
    const params = new URLSearchParams(url.searchParams);
    const author = params.get("author");

    // author

    const newCodes = await code.find({ author: author });

    if (!newCodes) {
      return NextResponse.json({ status: 400 });
    }

    return NextResponse.json({ status: 200, code: newCodes });
  } catch (error) {
    return NextResponse.json({ status: 400, error: error });
  }
}
