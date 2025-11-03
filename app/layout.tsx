import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Women's Health Coaching | 5-Month Transformation Program",
  description:
    "A full-body reset for the woman who's done chasing quick fixes. Private coaching for high-achieving women.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '704508205466539');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=704508205466539&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <Script id="facebook-pixel-lead-tracking" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const ctaButtons = document.querySelectorAll('a[href*="paperbell.com"]');
              ctaButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                  fbq('track', 'Lead', {
                    content_name: 'Rooted Path Program',
                    value: 3500,
                    currency: 'USD'
                  });
                });
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}
