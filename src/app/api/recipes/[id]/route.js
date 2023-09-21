import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";
import { processImage } from "@/libs/processImage";
import { unlink } from "fs/promises";
import cloudinary from "@/libs/cloudinary";

export async function GET(request, { params }) {
  try {
    const result = await conn.query("SELECT * FROM recipe WHERE id = ?", [
      params.id,
    ]);
    if (result.length == 0) {
      return NextResponse.json(
        {
          message: "Receta no Encontrada",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const result = await conn.query("DELETE FROM recipe WHERE id = ?", [
      params.id,
    ]);
    if (result.affectedRows == 0) {
      return NextResponse.json(
        {
          message: "Receta no Encontrada",
        },
        {
          status: 404,
        }
      );
    }
    return new Response(null, {
      status: 204,
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

export async function PUT(request, { params }) {
  try {
    const data = await request.formData();
    const image = data.get("image");
    const updatedData = {
      name: data.get("name"),
      ingredient: data.get("ingredient"),
      steps: data.get("steps"),
      category: data.get("category"),
    };
    if (!data.get("name")) {
      return NextResponse.json(
        {
          message: "Name is required",
        },
        {
          status: 400,
        }
      );
    }
    if (image) {
      const filePath = await processImage(image);
      const res = await cloudinary.uploader.upload(filePath);
      updatedData.image = res.secure_url;
      if (res) {
        await unlink(filePath);
      }
    }

    const result = await conn.query("UPDATE recipe SET ? WHERE id = ?", [
      updatedData,
      params.id,
    ]);
    if (result.affectedRows == 0) {
      return NextResponse.json(
        {
          message: "Receta no Encontrada",
        },
        {
          status: 404,
        }
      );
    }
    const updatedRecipe = await conn.query(
      "SELECT * FROM recipe WHERE id = ?",
      [params.id]
    );
    return NextResponse.json(updatedRecipe[0]);
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
