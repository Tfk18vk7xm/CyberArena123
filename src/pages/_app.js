// This is the main App component that wraps all pages in Next.js
// We import global styles here so they apply to all pages
import '../styles/globals.css'

// This function receives Component (the page being rendered) and pageProps
function MyApp({ Component, pageProps }) {
  // Return the page component with its props
  return <Component {...pageProps} />
}

export default MyApp

