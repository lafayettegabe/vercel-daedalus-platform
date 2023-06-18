import type { PropsWithChildren } from 'react'
import { RootStyleRegistry } from '../modules/shared/components/root-style-registry'
import { RootStyle } from '../modules/shared/components/root-style'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <head />
      <body style={{ margin: 0 }}>
        <RootStyleRegistry>
          <RootStyle>{children}</RootStyle>
        </RootStyleRegistry>
      </body>
    </html>
  )
};