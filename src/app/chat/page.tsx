'use client'
import { AuthCheck } from "@/modules/shared/AuthCheck"

function Chat() {

    return (
    <div className="flex flex-col items-center justify-center h-screen">
        Chat
    </div>
  )}
  
  export default AuthCheck(Chat)