import { Metadata } from 'next';
import './globals.css'
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Esselife',
  icons: {
    icon: ['/apple-whole-solid.svg']
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
        <main>{children}</main>
      </body>
    </html>
  )
}
