import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'



export default function Document() {
  return (
    <Html lang="de">
    <Head>
    
    <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-52B2G4Q');`}}></Script>

<Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EPGNMCECXW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EPGNMCECXW');
        `}
      </Script>


      
    </Head>
      <body>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-52B2G4Q"
height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}