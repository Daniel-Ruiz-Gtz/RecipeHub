import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("Listando Recetas");
}

export function POST() {
  return NextResponse.json("Creando Receta");
}
