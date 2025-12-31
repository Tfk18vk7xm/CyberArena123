// Header component - This is the top navigation bar of the website
// Contains: Logo, Navigation links, Login and Sign Up buttons

export default function Header() {
  // Function to handle smooth scroll to Featured Games section
  // When user clicks "Discover", it scrolls to the featured games section on the landing page
  const handleDiscoverClick = (e) => {
    e.preventDefault() // Prevent default anchor behavior
    
    // Check if we're on the homepage
    if (window.location.pathname === '/') {
      // Find the featured games section by its ID
      const featuredSection = document.getElementById('featured-games')
      if (featuredSection) {
        // Smooth scroll to the featured games section
        featuredSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // If not on homepage, navigate to homepage and then scroll
      window.location.href = '/#featured-games'
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo on the left side */}
        <div className="logo">
          <h1>CyberArena</h1>
        </div>

        {/* Navigation menu in the center */}
        <nav className="nav-menu">
          <a href="/" className="nav-link">Home</a>
          {/* Discover link - scrolls to Featured Games section */}
          <a href="#featured-games" className="nav-link" onClick={handleDiscoverClick}>Discover</a>
          {/* About link - navigates to About page */}
          <a href="/about" className="nav-link">About</a>
        </nav>

        {/* Action buttons on the right */}
        <div className="header-actions">
          <a href="/login" className="btn-login">Login</a>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </header>
  )
}
 
