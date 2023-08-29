import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

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
    const { name, ingredient, steps, category } = await request.json();
    const result = await conn.query("INSERT INTO recipe SET ?", {
      name,
      ingredient,
      steps,
      category,
    });
    console.log(result);
    return NextResponse.json({
      name,
      ingredient,
      steps,
      category,
      id: result.insertId,
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
