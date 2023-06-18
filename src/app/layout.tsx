import type { PropsWithChildren } from 'react'
import { RootStyleRegistry } from '../modules/shared/components/root-style-registry'
import { RootStyle } from '../modules/shared/components/root-style'
import { LoginStyle } from '../modules/shared/components/login-style'

// metadata
export const metadata = {
  title: 'D | Platform',
  description: 'Daedalus',
  keywords: 'Daedalus',
}

export default function RootLayout({ children }: PropsWithChildren) {
  const isLogged = true || false;
  
  return (
    <html lang="es">
      <head />
      <body style={{ margin: 0 }}>
        <RootStyleRegistry>
          {isLogged ? <RootStyle>{children}</RootStyle> : <LoginStyle>{children}</LoginStyle>}
        </RootStyleRegistry>
      </body>
    </html>
  )
};