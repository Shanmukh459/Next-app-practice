import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const response = await getToken({ req: request })
  return NextResponse.json(response)
}
