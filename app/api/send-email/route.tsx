import WelcomeTemplate from "@/emails/WelcomeTemplate"
import { Resend } from "resend"

const resend = new Resend()

export async function POST() {
  resend.emails.send({
    from: "",
    to: "",
    subject: "Welcome",
    react: <WelcomeTemplate name="Shanmukh" />,
  })
}
