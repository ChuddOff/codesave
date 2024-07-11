import clientPromise from "@/lib/mongoConnect";
import code from "@/lib/model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await clientPromise;

  try {
    const newCode = await code.find(); // Используем toArray() для преобразования результата в массив

    return NextResponse.json(newCode);
  } catch (error) {
    return NextResponse.json({ error }); // Код 500 для внутренней ошибки сервера
  }
}
