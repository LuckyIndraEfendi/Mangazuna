import { NextRequest, NextResponse } from "next/server";
import {
  NEXT_MANGAZUNA_APIURL,
  NEXT_MANGAZUNA_APIKEY,
} from "../../../../lib/mangazuna";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    if (!NEXT_MANGAZUNA_APIURL && !NEXT_MANGAZUNA_APIKEY) {
      throw new Error("Missing API Key Or API URL");
    }
    const fetchData = await fetch(
      `${process.env.NEXT_MANGAZUNA_APIURL}/api/v1/manga/project`
    );
    const data = await fetchData.json();
    return Response.json(data);
  } catch (err) {
    return Response.json(err, {
      status: 500,
    });
  }
}
