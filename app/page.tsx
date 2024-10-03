"use client"

import Link from "next/link"
import ProductCard from "./components/ProductCard"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import Image from "next/image"
import icecream from "@/public/images/icecream.jpg"
import { useState } from "react"

export default function Home() {
  const [isVisible, setVisible] = useState(false)
  return (
    <main>
      <h1>Hello</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }]
          const sortedUsers = _.orderBy(users, ["name"])
          console.log(sortedUsers)
        }}
      >
        Show
      </button>
    </main>
  )

  // const session = await getServerSession(authOptions)
  // return (
  //   <main>
  //     <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
  //     <Link href="/users">Users</Link>
  //     <ProductCard />
  //   </main>
  // )

  // return (
  //   <main className="relative h-screen">
  //     <Image
  //       src="https://bit.ly/react-cover"
  //       alt="Ice cream"
  //       fill
  //       className="object-cover"
  //       sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
  //       quality={100}
  //       priority
  //     />
  //   </main>
  // )
}
