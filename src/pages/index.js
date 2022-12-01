import { Fragment, useRef } from 'react'
import Head from 'next/head'

export const getServerSideProps = async () => ({
  props: {
    justATest: 42,
  },
})

export default function Home({ justATest }) {
  return (
    <div className="dark">
      <Head>
        <title>Cloudflare SSR Bug</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <div>Just a test should be 42: {justATest}</div>
    </div>
  )
}
