'use client'
import { AuthCheck } from "@/modules/shared/AuthCheck"

function Dev() {

    return (
    <div className="flex flex-col items-center justify-center h-screen">
        Devs
    </div>
  )}
  
  export default AuthCheck(Dev)