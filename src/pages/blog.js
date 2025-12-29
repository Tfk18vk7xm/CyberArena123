// Blog page - Blog listing page
import Head from 'next/head'
import MyAppBar from '../components/common/MyAppBar'

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - CyberArena</title>
        <meta name="description" content="Read the latest news and updates from CyberArena" />
      </Head>
      <MyAppBar />
      <main className="main-container">
        <div className="blog-container">
          <h1>Blog</h1>
          <p>Welcome to the CyberArena blog. Stay tuned for updates!</p>
        </div>
      </main>
    </div>
  )
}

