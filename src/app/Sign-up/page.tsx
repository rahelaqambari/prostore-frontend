"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
import { APP_NAME } from "../../../constants"
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
                id="name"
                type="text"
                placeholder="my name is..."
                required
              />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
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
              <Input id="password" type="password" required />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="email">Confirm Passwrod</Label>
              <Input
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
                id="phone_number"
                type="phone_number"
                placeholder="+ 93 "
                required
              />
              </div>
            </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
        
      </CardFooter>
    </Card>
    </div>
  )
}
