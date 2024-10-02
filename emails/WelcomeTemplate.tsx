import React, { CSSProperties } from "react"
import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Text,
  Tailwind,
} from "@react-email/components"

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-blue-300">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}!</Text>
            <Link href="www.google.com">www.google.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
  background: "lightblue",
}

const heading: CSSProperties = {
  fontSize: "32px",
}

export default WelcomeTemplate
