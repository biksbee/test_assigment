import './globals.css'
import { Providers } from './store/provider'
import { Montserrat_Alternates } from "next/font/google"

const mont = Montserrat_Alternates({
  subsets: ['latin'],
  variable: '--font-mont',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'test-assignment',
  description: 'test app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex justify-center pt-[24px] pb-[100px] ${mont.variable}`}>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  )
}
