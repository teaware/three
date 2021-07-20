import Head from 'next/head'

import Moon from '@/components/canvas/Moon'

export default function Page() {
  return (
    <>
      <Head>
        <title>帝国钛战机</title>
      </Head>

      <div>
        <Moon />
      </div>
    </>
  )
}
