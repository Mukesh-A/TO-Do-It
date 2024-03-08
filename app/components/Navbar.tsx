import Link from "next/link"
import { ThemeToggle } from "./Themetoggle"
import { Button } from "@/components/ui/button"
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
export const Navbar = async() => {

  const {isAuthenticated} = getKindeServerSession();


  return (
    <div className="border-b bg-background h-[10vh] flex items-center">
        <div className="container flex items-center justify-between">
            <Link href="/" >
                <h1 className="font-bold text-2xl">ToDoIt</h1>
            </Link>
           <div className="flex items-center gap-x-5">
            <ThemeToggle/>

            {await isAuthenticated() ? (<div className="flex items-center gap-x-5">
            <LogoutLink>
              <Button>Log out</Button>
              </LogoutLink>

            </div>) : (<div className="flex items-center gap-x-5">
            <LoginLink>
              <Button>Sign in</Button>
              </LoginLink>
            <RegisterLink>
              <Button variant="secondary">Sign up</Button>
              </RegisterLink>
                
            </div>)}

            
           </div>
        </div>
    </div>
  )
}

