import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
      const source = await fetch(process.env.BASE);

      const posts = await source.json()

    return new NextResponse(JSON.stringify(posts));
  } catch (err) {
    return new NextResponse("failed to fetch", { status: 500 });
  }
};

