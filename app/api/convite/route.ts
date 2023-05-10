import prisma from "@/lib/prisma";
import { Inputs } from "@/types";
import { NextRequest, NextResponse } from "next/server";

const validateFamilyDto = (body: Inputs) => {
  if (!body.family) {
    return NextResponse.json({
      error: {
        message: "The 'family' field is required.",
        field: "family",
      },
      status: 400,
    });
  }
  if (body.family.length > 75) {
    return NextResponse.json({
      error: {
        message: "The text exceeded the maximum length of 75 characters.",
      },
      status: 400,
    });
  }
};

export async function POST(request: NextRequest) {
  const body: Inputs = await request.json();

  try {
    validateFamilyDto(body);

    const newAddedFamily = await prisma.family.create({
      data: {
        name: body.family,
      },
    });

    return NextResponse.json({
      message: "Dados enviados com sucesso!",
      data: newAddedFamily,
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "We had an unexpected error",
      error: error,
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const families = await prisma.family.findMany();

    if (!families.length) {
      return NextResponse.json({
        error: {
          message: "Don't have any family in data",
        },
        status: 400,
      });
    }

    return NextResponse.json({ data: families, status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "We had an unexpected error",
      error: error,
      status: 500,
    });
  }
}
