'use client'
import { AuthCheck } from "@/modules/shared/AuthCheck"

function Vision() {

    return (
    <div className="flex flex-col items-center justify-center h-screen">
        Live Tracking
    </div>
  )}
  
  export default AuthCheck(Vision)