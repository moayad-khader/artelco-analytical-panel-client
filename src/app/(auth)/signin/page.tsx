import { type Metadata } from "next"
import Link from "next/link"
import "app/globals.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/ui/card"

import { SignInForm } from "components/forms/signin.form";
import { Shell } from "components/shell"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
}

export default function SignInPage() {
  console.log("ss")
  return (
    <Shell layout="auth">
      <Card className="border-2 border-primary  dark:bg-background-secondary-dark">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-black dark:text-white">Sign in</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 text-black dark:text-white">
          <SignInForm />
        </CardContent>
      </Card>
    </Shell>
  )
}