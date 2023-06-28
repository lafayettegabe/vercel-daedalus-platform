'use client'
import { AuthCheck } from "@/modules/shared/AuthCheck"

function Bot() {

    return (
    <div className="flex flex-col items-center justify-center h-screen">
        Management
    </div>
  )}
  
  export default AuthCheck(Bot)