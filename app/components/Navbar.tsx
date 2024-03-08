import Link from "next/link"
import { ThemeToggle } from "./Themetoggle"
import { Button } from "@/components/ui/button"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export const Navbar = () => {
  return (
    <div className="border-b bg-background h-[10vh] flex items-center">
        <div className="container flex items-center justify-between">
            <Link href="/" >
                <h1 className="font-bold text-2xl">ToDoIt</h1>
            </Link>
           <div className="flex items-center gap-x-5">
            <ThemeToggle/>

            <div className="flex items-center gap-x-5">
            <LoginLink>
              <Button>Sign in</Button>
              </LoginLink>
            <RegisterLink>
              <Button variant="secondary">Sign up</Button>
              </RegisterLink>
                
            </div>
           </div>
        </div>
    </div>
  )
}

