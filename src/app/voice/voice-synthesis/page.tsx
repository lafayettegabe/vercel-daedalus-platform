'use client'
import { AuthCheck } from "@/modules/shared/AuthCheck"

function Voice() {

    return (
    <div className="flex flex-col items-center justify-center h-screen">
        Voice Synthesis
    </div>
  )}
  
  export default AuthCheck(Voice)