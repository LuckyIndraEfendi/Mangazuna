import { NextRequest } from "next/server";
import { NEXT_MANGAZUNA_APIURL, NEXT_MANGAZUNA_APIKEY } from "@/lib/mangazuna";
export async function GET(req: NextRequest, { params }: any) {
  try {
    if (!NEXT_MANGAZUNA_APIURL && !NEXT_MANGAZUNA_APIKEY) {
      throw new Error("Missing API Key Or API URL");
    }
    const { id } = params;
    const fetchData = await fetch(
      `${NEXT_MANGAZUNA_APIURL}/api/v1/komik/chapter/${id}?apiKey=${NEXT_MANGAZUNA_APIKEY}`
    );
    const data = await fetchData.json();
    return Response.json(data);
  } catch (err) {
    return Response.json(err, {
      status: 500,
    });
  }
}
