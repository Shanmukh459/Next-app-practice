import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import bcrypt from "bcrypt"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
})

export async function POST(request: NextRequest) {
  const body = await request.json()

  const validate = schema.safeParse(body)

  if (!validate.success)
    return NextResponse.json(validate.error.errors, { status: 400 })

  const user = await prisma.user.findUnique({ where: { email: body.email } })

  if (user)
    return NextResponse.json({ message: "User already exists", status: 400 })

  const hashedPassword = await bcrypt.hash(body.password, 10)

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  })

  return NextResponse.json({ email: newUser.email })
}
