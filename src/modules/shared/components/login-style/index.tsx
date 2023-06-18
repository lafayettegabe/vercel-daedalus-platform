import { PropsWithChildren } from "react"



export const LoginStyle = ({ children }: PropsWithChildren) => {
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen bg-gray-100' style={{ textAlign: 'center' }}>
            {children}
        </div>
    )
}