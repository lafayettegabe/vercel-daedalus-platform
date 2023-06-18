import type { PropsWithChildren } from 'react'
import { RootStyleRegistry } from '../../modules/shared/components/root-style-registry'

export const metadata = {
  title: 'D | Login',
  description: 'Daedalus',
  keywords: 'Daedalus',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <RootStyleRegistry>
      {children}
    </RootStyleRegistry>
  )
};