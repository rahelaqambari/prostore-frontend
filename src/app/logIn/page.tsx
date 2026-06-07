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

export default function CardDemo() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
           <Card className="w-full max-w-sm">
      <CardHeader>
         <Image src="/images/logo.svg" alt={APP_NAME} className="justify-center items-center mx-auto" height={52} width={52} />
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
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
              <Input id="password" type="password" required />
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
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="ghost" className="w-full">
          alredy have acount <Link href="Sign-up"><span className="text-yellow-500"> Sign Up</span></Link>
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}
