import Link from "next/link"
import { ThemeToggle } from "./Themetoggle"
import { Button } from "@/components/ui/button"


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
                <Button>Sign In</Button>
                <Button variant="secondary">Login In</Button>
            </div>
           </div>
        </div>
    </div>
  )
}

