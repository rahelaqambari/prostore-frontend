"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState } from "react"
import { SignUp } from "@/lib/Actions/auth.action"

export default function Signup() {
  const [data, func] = useActionState(SignUp, {
    message: "",
    status: false
  })
  return (
    <div className=" w-full h-screen flex justify-center items-center">
           <Card className="w-full max-w-lg">
      <CardHeader>
          {/* <Image src="/images/logo.svg" alt={APP_NAME} className="justify-center items-center mx-auto" height={52} width={52} /> */}
        <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
        <CardDescription>
          Enter your info below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={func}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input
              name="name"
                id="name"
                type="text"
                placeholder="my name is..."
                required
              />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
              name="email"
                id="email"
                type="email"
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
              name="password"
               id="password" type="password" required />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="email">Confirm Passwrod</Label>
              <Input
              name="confirmpassword"
                id="confirmpassword"
                type="confirmpassword"
                required
              />
            </div>
              {!data.status && data.message ==='passwords not match' && (
                <div>
                  <span className="text-sm text-red-600">the password not match</span>
                </div>
              )}
              <div className="grid gap-2">
              <Label htmlFor="phone_number">Phone Number</Label>
              <Input
              name="phone_number"
                id="phone_number"
                type="phone_number"
                placeholder="+ 93 "
                required
              />
              </div>
            </div>
        <Button type="submit" className="w-full my-3">
          Sign Up
        </Button>
        </form>
      </CardContent>
    </Card>
    </div>
  )
}
