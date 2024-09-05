import Link from "next/link"
import React from "react"

const NavBar = () => {
  return (
    <div className="flex bg-sky-200 p-4">
      <Link href="/" className="mr-4">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
    </div>
  )
}

export default NavBar
