import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import './styles/other.css'
import './styles/headerFooter.css'
import './styles/fonts.css';

import Header from './components/Header';
import Footer from './components/Footer';




export const metadata = {
  metadataBase: new URL('https://www.continuuminsights.com/'),
  charset: "UTF-8",
  xUaCompatible: "ie=edge",
  pageType: 'Rich Internet Media',
  distribution: 'Global',
  yahoobot: 'index,follow',
  bingbot: 'index,follow',
  referrer: "no-referrer-when-downgrade",
  title: 'Continuum Insights',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      
    },
  },

  manifest: 'https://nextjs.org/manifest.json',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
{ //<!-- Google Tag Manager  -->
}

<script async src="https://www.googletagmanager.com/gtag/js?id=G-T1N34HMZZG"></script>
      <Script>
      {`
      window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T1N34HMZZG');
      `}
  </Script>

  {//<!-- End Google Tag Manager (noscript) -->
}

      { //<!-- Google Tag Manager (noscript) -->
      }
     
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTPMZTL"
height="0" width="0" style={{display:"none" ,visibility:"hidden"}}></iframe></noscript>
{//<!-- End Google Tag Manager (noscript) -->
}
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
