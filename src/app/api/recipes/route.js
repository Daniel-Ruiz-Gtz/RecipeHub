import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";
import { unlink } from "fs/promises";
import cloudinary from "@/libs/cloudinary";
import { processImage } from "@/libs/processImage";

export async function GET() {
  try {
    const result = await conn.query("SELECT * FROM recipe");
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.formData();
    const image = data.get("image");
    if (!data.get("image")) {
      return NextResponse.json(
        {
          message: "Image is Required",
        },
        {
          status: 400,
        }
      );
    }
    if (!image) {
      return NextResponse.json(
        {
          message: "Image is required",
        },
        {
          status: 400,
        }
      );
    }
    const filePath = await processImage(image);
    const res = await cloudinary.uploader.upload(filePath);
    if (res) {
      await unlink(filePath);
    }
    const result = await conn.query("INSERT INTO recipe SET ?", {
      name: data.get("name"),
      ingredient: data.get("ingredient"),
      steps: data.get("steps"),
      category: data.get("category"),
      image: res.secure_url,
    });
    return NextResponse.json({
      name: data.get("name"),
      ingredient: data.get("ingredient"),
      steps: data.get("steps"),
      category: data.get("category"),
      id: result.insertId,
      image: res.secure_url,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
