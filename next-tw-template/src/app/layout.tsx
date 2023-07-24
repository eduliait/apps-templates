import 'ui/src/styles/main.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='theme-masterclass-dark'>
          {children}
      </body>
    </html>
  )
}
