// Header component - This is the top navigation bar of the website
// Contains: Logo, Navigation links, Login and Sign Up buttons

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo on the left side */}
        <div className="logo">
          <h1>CyberArena</h1>
        </div>

        {/* Navigation menu in the center */}
        <nav className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Discover</a>
          <a href="#" className="nav-link">Developers</a>
          <a href="#" className="nav-link">Community</a>
        </nav>

        {/* Action buttons on the right */}
        <div className="header-actions">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </header>
  )
}
 
