"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import React from "react"

const NavBar = () => {
  const { status, data: session } = useSession()

  return (
    <div className="flex bg-sky-200 p-4 space-x-3">
      <Link href="/" className="mr-4">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {/* {status === "loading" && <div>Loading...</div>} */}
      {status === "authenticated" && <div>{session.user!.name}</div>}
      {status === "unauthenticated" && (
        <Link href="api/auth/signin">Login</Link>
      )}
    </div>
  )
}

export default NavBar
