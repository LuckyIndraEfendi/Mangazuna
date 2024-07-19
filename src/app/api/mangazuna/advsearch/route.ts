import { NextRequest, NextResponse } from "next/server";
import {
  NEXT_MANGAZUNA_APIURL,
  NEXT_MANGAZUNA_APIKEY,
} from "../../../../lib/mangazuna";
import axios from "axios";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    if (!NEXT_MANGAZUNA_APIURL && !NEXT_MANGAZUNA_APIKEY) {
      throw new Error("Missing API Key Or API URL");
    }
    const page = req.nextUrl.searchParams.get("page") || 1;
    const type = req.nextUrl.searchParams.get("type") || "Manga";
    const title = req.nextUrl.searchParams.get("title") || "";

    const fetchData = await axios.get(
      `${process.env.NEXT_MANGAZUNA_APIURL}/api/v1/manga/advsearch`,
      {
        params: {
          page: page,
          type: type,
          title: title,
        },
      }
    );
    const data = await fetchData.data;
    return Response.json(data);
  } catch (err) {
    return Response.json(err, {
      status: 500,
    });
  }
}
