import { NextRequest, NextResponse } from "next/server";
import { Redis } from "ioredis";
import { NEXT_MANGAZUNA_APIURL, NEXT_MANGAZUNA_APIKEY } from "@/lib/mangazuna";
const redis = new Redis(
  "rediss://default:5af9d27d1ad1451eb3e9daa270705586@us1-cuddly-dinosaur-40221.upstash.io:40221"
);
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    if (!NEXT_MANGAZUNA_APIURL && !NEXT_MANGAZUNA_APIKEY) {
      throw new Error("Missing API Key Or API URL");
    }
    const page = req.nextUrl.searchParams.get("page") || 1;
    const fetchData = await fetch(
      `${process.env.NEXT_MANGAZUNA_APIURL}/api/v1/komik/manga?apiKey=${process.env.NEXT_MANGAZUNA_APIKEY}&page=${page}`
    );
    const data = await fetchData.json();
    return Response.json(data);
  } catch (err) {
    return Response.json(err, {
      status: 500,
    });
  }
}
