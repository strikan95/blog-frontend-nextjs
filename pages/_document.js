import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='scroll-smooth'>

      <Head>
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
      </Head>

      <body className='bg-white text-black antialised min-w-fit dark:bg-gray-900 dark:text-white'>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" async></script>
      </body>

    </Html>
  )
}
