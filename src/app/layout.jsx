import '../styles/globals.css'

export const metadata = {
  title: 'Nick Gardone - Senior Product Manager',
  description: 'Senior Product Manager passionate about building user-centric products that drive business growth and create meaningful impact.',
  keywords: ['Product Manager', 'Product Strategy', 'User Experience', 'SaaS', 'Mobile Apps'],
  authors: [{ name: 'Nick Gardone' }],
  creator: 'Nick Gardone',
  openGraph: {
    title: 'Nick Gardone - Senior Product Manager',
    description: 'Senior Product Manager passionate about building user-centric products that drive business growth and create meaningful impact.',
    url: 'https://nickgardone.com',
    siteName: 'Nick Gardone Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nick Gardone - Senior Product Manager',
    description: 'Senior Product Manager passionate about building user-centric products that drive business growth and create meaningful impact.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-950 text-gray-100">
        {children}
      </body>
    </html>
  )
} 