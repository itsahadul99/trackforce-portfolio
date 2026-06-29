import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const tags: string[] = Array.isArray(body.tags) ? body.tags : [];

  if (tags.length === 0) {
    return NextResponse.json({ error: "No tags provided" }, { status: 400 });
  }

  for (const tag of tags) {
    revalidateTag(tag, "layout");
  }

  return NextResponse.json({ revalidated: tags });
}
