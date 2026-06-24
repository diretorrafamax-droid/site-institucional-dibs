import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Dibs Solutions — Technology Agency",
  description: "Transformamos ideias em soluções digitais que geram impacto. Software, Design, Conteúdo, Blockchain e Automações Financeiras.",
  icons: { icon: '/dibs_favicon.svg', apple: '/dibs_favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}window.__theme=t;if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`
        }} />
      </head>
      <body className={`${inter.variable} font-sans min-h-full flex flex-col antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
