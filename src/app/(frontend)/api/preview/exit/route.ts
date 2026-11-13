import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path");

  const draft = await draftMode();
  draft.disable();

  if (path && path.startsWith("/") && !path.startsWith("//")) {
    redirect(path);
  }

  redirect("/vi");
}
