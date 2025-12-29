// Login page - User authentication page
import Head from 'next/head'
import Login from '../components/common/Login'
import MyAppBar from '../components/common/MyAppBar'

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Login - CyberArena</title>
        <meta name="description" content="Login to your CyberArena account" />
      </Head>
      <MyAppBar />
      <main className="main-container">
        <Login />
      </main>
    </div>
  )
}

