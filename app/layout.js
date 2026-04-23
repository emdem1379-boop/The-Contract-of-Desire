import './globals.css'

export const metadata = {
  title: 'Velvet Choice',
  description: 'Interactive romance stories',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
