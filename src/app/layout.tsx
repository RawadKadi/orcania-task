import './globals.css'
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        {/* Place any common metadata for your layout here */}
        <title>Your Default Title</title>
        <meta name="description" content="Your Default Description" />
      </Head>
      <>{children}</>
    </>
  )
}