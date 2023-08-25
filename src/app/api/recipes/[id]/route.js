import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json("Obteniendo un Producto");
}

export function DELETE() {
  return NextResponse.json("Eliminando un Producto");
}

export function PUT() {
  return NextResponse.json("Actualizando un Producto");
}
