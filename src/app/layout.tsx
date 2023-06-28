'use client'
import type { PropsWithChildren } from 'react'
import { RootStyleRegistry } from '../modules/shared/components/root-style-registry'
import { RootStyle } from '../modules/shared/components/root-style'
import { LoginStyle } from '../modules/shared/components/login-style'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/modules/Firebase'

/*
export const metadata = {
  title: 'D | Platform',
  description: 'Daedalus',
  keywords: 'Daedalus',
}
*/

export default function RootLayout({ children }: PropsWithChildren) {
  const [user] = useAuthState(auth);
  
  return (
    <html lang="es">
      <head>
        <title>D | Platform</title>
        <meta title="Daedalus Platform" />
        <meta name="description" content="Daedalus Platform is a platform for AI research and development" />
      </head>
      <body style={{ margin: 0 }}>
        <RootStyleRegistry>
          {user ? <RootStyle>{children}</RootStyle> : <LoginStyle>{children}</LoginStyle>}
        </RootStyleRegistry>
      </body>
    </html>
  )
};