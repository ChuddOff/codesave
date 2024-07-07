"use server";

import code from "@/lib/model";
import clientPromise from "@/lib/mongoConnect";

interface config {
  show: boolean;
  author: string;
  html: string;
  css: string;
  js: string;
}

export async function postCode(config: config, formData: FormData) {
  await clientPromise;

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const bodyObject = {
    name,
    description,
    ...config,
  };

  // validate data with zod

  // console.log(bodyObject);

  // simulate slow loading 20s
  await new Promise((resolve) => setTimeout(resolve, 20000));

  try {
    const newCode = await code.create(bodyObject);
    await newCode.save();
  } catch (error) {
    console.log(error);
  }
  return "Success";
}
