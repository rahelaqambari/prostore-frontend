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
import Link from "next/link"
import { APP_NAME } from "../../../constants"
import Image from "next/image"
import { useActionState } from "react"
import login from "@/lib/Actions/auth.action"

export default function loginPage() {
  const [state,action] = useActionState(login,{
    data: "",
    success: false
  });
   if(state.data !=="Something went wrong !"){
    localStorage.setItem('token',state.data);
  }
  return (
    <div className=" w-full h-screen flex justify-center items-center">
           <Card className="w-full max-w-sm">
            <form action={action}>
      <CardHeader>
         <Image src="/images/logo.svg" alt={APP_NAME} className="justify-center items-center mx-auto" height={52} width={52} />
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="email@example.com"
                required
              />
              {state.error &&(
                <div className="flex gap-3 flex-wrap">
                  {state.error?.email.map((x:string)=>(
                    <div className="text-sm text-red-500 border rounded-md px-3 py-1.5">
                      {x}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="grid gap-2">
              <Input id="password"
              name="password"
              type="password" required />
              {state.error &&(
                <div className="flex gap-3 flex-wrap">
                  {state.error?.password.map((x:string)=>(
                    <div className="text-sm text-red-500 border rounded-md px-3 py-1.5">
                      {x}
                    </div>
                  ))}
                </div>
              )}
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          login
          {/* {pending ? 'Wait ...' : 'Login' } */}
        </Button>
        <Button variant="ghost" className="w-full">
          alredy have acount <Link href="Sign-up"><span className="text-yellow-500"> Sign Up</span></Link>
        </Button>
      </CardFooter>
      </form>
    </Card>
    </div>
  )
}
