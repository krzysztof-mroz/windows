import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="de">
    <Head>
    
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EPGNMCECXW"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EPGNMCECXW', { page_path: window.location.pathname });
            `,
          }}
        />
      
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}