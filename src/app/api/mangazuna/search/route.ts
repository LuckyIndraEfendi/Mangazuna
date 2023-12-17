import { NextRequest } from "next/server";
import { NEXT_MANGAZUNA_APIURL, NEXT_MANGAZUNA_APIKEY } from "@/lib/mangazuna";
export async function GET(req: NextRequest) {
  try {
    if (!NEXT_MANGAZUNA_APIURL && !NEXT_MANGAZUNA_APIKEY) {
      throw new Error("Missing API Key Or API URL");
    }
    const search = req.nextUrl.searchParams.get("q") || "";
    console.log(search);
    const fetchData = await fetch(
      `${NEXT_MANGAZUNA_APIURL}/api/v1/komik/search?q=${search}&apiKey=${NEXT_MANGAZUNA_APIKEY}`
    );
    const data = await fetchData.json();
    return Response.json(data);
  } catch (err) {
    return Response.json(err, {
      status: 500,
    });
  }
}
