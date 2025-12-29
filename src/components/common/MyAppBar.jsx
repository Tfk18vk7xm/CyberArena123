// MyAppBar component - Common app bar component
// Can be reused across different pages with consistent styling

export default function MyAppBar() {
  return (
    <div className="app-bar">
      <div className="app-bar-container">
        <div className="app-bar-logo">
          <h1>CyberArena</h1>
        </div>
        <nav className="app-bar-nav">
          <a href="/" className="app-bar-link">Home</a>
          <a href="/blog" className="app-bar-link">Blog</a>
          <a href="/login" className="app-bar-link">Login</a>
        </nav>
      </div>
    </div>
  )
}

