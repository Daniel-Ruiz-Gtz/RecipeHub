import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";
import { metadata } from "@/app/layout";

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
    console.log(result);
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
    const data = await request.json();
    const result = await conn.query("UPDATE recipe SET ? WHERE id = ?", [
      data,
      params.id,
    ]);
    console.log(result);
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
