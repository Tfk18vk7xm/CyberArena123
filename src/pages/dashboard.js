// Dashboard page - Main page after user logs in
// This page displays the user's gaming dashboard with trending games and recently played games
// Users can navigate through sidebar, search games, and logout from here

import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Dashboard() {
  // useRouter hook from Next.js - allows us to navigate to different pages
  const router = useRouter()

  // Handle logout functionality
  const handleLogout = () => {
    // Show success alert message
    alert('Successfully Logged Out')
    
    // Redirect to the landing page (homepage)
    // Check if router is ready before navigating
    if (router.isReady) {
      router.push('/')
    } else {
      // Fallback: use window.location if router isn't ready
      window.location.href = '/'
    }
  }

  // Sample game data for trending section
  // In a real app, this would come from an API or database
  const trendingGames = [
    {
      name: "Stellar Blade",
      developer: "dev_player_001",
      image: "https://tse2.mm.bing.net/th/id/OIP.t2jFR3NZMezsHmIwTBTX3QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 4.5,
      isNew: true
    },
    {
      name: "Need For Speed",
      developer: "solo_rider_24",
      image: "https://th.bing.com/th/id/OIP.9ZRHAfPDQ1I2n0CrIqRvSgHaEK?w=280&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      rating: 4.5,
      isNew: true
    },
    {
      name: "Fortnite",
      developer: "John Fontana",
      image: "https://tse4.mm.bing.net/th/id/OIP.C5A17VtI1jviPImGPZqAXgHaEK?pid=ImgDet&w=178&h=99&c=7&dpr=1.5&o=7&rm=3",
      rating: 4.5,
      isNew: false
    }
  ]

  // Sample game data for recently played section
  // In a real app, this would track the user's actual game history
  const recentlyPlayedGames = [
    {
      name: "WWE 2K24",
      developer: "dev_nba",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59f0f0b7-ac9c-4bb3-947e-bc0e3be8398a/dgetpv5-ff390344-50bb-4caa-a04c-fff4e117d91c.jpg/v1/fill/w_1024,h_1290,q_75,strp/wwe_2k24_cover_design_11___roman_reigns_by_cngjl1986_dgetpv5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI5MCIsInBhdGgiOiJcL2ZcLzU5ZjBmMGI3LWFjOWMtNGJiMy05NDdlLWJjMGUzYmU4Mzk4YVwvZGdldHB2NS1mZjM5MDM0NC01MGJiLTRjYWEtYTA0Yy1mZmY0ZTExN2Q5MWMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.zPFxpdWIWNUdVf9o43-4ZX3Ms7dtsCfVLVU7I3WnZgg",
      rating: 4.5,
      borderColor: "red" // Red border for this card
    },
    {
      name: "Fable Legends",
      developer: "Thomas Seven",
      image: "https://images.alphacoders.com/655/655398.jpg",
      rating: 4.5,
      borderColor: "green" // Green border for this card
    },
    {
      name: "Mortal Kombat 1",
      developer: "Pranav Shah",
      image: "https://cdn1.epicgames.com/offer/fda0f2b4047f46ffb4e94d5595c1468e/EGS_MortalKombat1PremiumEdition_NetherRealmStudios_Editions_S1_2560x1440-43d47cfc125118b13b26cea9c80ae15c",
      rating: 4.5,
      borderColor: "yellow" // Yellow border for this card
    }
  ]

  return (
    <div>
      {/* Head component - Sets the page title and meta tags */}
      <Head>
        <title>Dashboard - CyberArena</title>
        <meta name="description" content="Your gaming dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main container for the entire dashboard page */}
      <div className="dashboard-container">
        {/* Top Header Section */}
        {/* Contains logo, navigation links, and user action buttons */}
        <header className="dashboard-header">
          <div className="dashboard-header-content">
            {/* Logo on the left */}
            <div className="dashboard-logo">
              <h1>CyberArena</h1>
            </div>

            {/* Navigation links in the center */}
            <nav className="dashboard-nav">
              <a href="#" className="dashboard-nav-link active">Home</a>
              <a href="#" className="dashboard-nav-link">Discover</a>
              <a href="#" className="dashboard-nav-link">About</a>
            </nav>

            {/* User action buttons on the right */}
            {/* User icon and logout (power) icon */}
            <div className="dashboard-actions">
              <button className="dashboard-icon-btn" aria-label="User Profile">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              {/* Logout button - calls handleLogout function when clicked */}
              <button 
                className="dashboard-icon-btn" 
                onClick={handleLogout}
                aria-label="Logout"
                title="Logout"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main content area with sidebar and content */}
        <div className="dashboard-main">
          {/* Left Sidebar Navigation */}
          {/* Vertical menu for main navigation options */}
          <aside className="dashboard-sidebar">
            <nav className="sidebar-nav">
              <a href="#" className="sidebar-nav-link active">Home</a>
              <a href="#" className="sidebar-nav-link">Favourites</a>
              <a href="#" className="sidebar-nav-link">Profile</a>
              <a href="#" className="sidebar-nav-link">Community</a>
            </nav>
          </aside>

          {/* Main Content Area */}
          {/* Contains search bar, trending games, and recently played games */}
          <main className="dashboard-content">
            {/* Search Bar */}
            {/* Allows users to search for games */}
            <div className="dashboard-search">
              <input 
                type="text" 
                placeholder="Search" 
                className="search-input"
              />
              <button className="search-icon-btn" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>

            {/* Trending Games Section */}
            {/* Displays popular/trending games in a horizontal row */}
            <section className="dashboard-section">
              <div className="section-divider"></div>
              <h2 className="section-title">Trending</h2>
              <div className="games-horizontal">
                {trendingGames.map((game, index) => (
                  <div key={index} className="game-card-dashboard">
                    {/* NEW tag if the game is new */}
                    {game.isNew && (
                      <span className="game-tag new-tag">NEW</span>
                    )}
                    {/* Game cover image */}
                    <div className="game-cover-dashboard">
                      <img src={game.image} alt={game.name} />
                    </div>
                    {/* Game information */}
                    <div className="game-info-dashboard">
                      <h3 className="game-name-dashboard">{game.name}</h3>
                      <p className="game-developer-dashboard">
                        Developed by: {game.developer}
                      </p>
                      {/* Rating display */}
                      <div className="game-rating">
                        <span className="star-icon">★</span>
                        <span>{game.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recently Played Games Section */}
            {/* Displays user's recently played games with colored borders */}
            <section className="dashboard-section">
              <div className="section-divider"></div>
              <h2 className="section-title">Recently played games</h2>
              <div className="games-horizontal">
                {recentlyPlayedGames.map((game, index) => (
                  <div 
                    key={index} 
                    className="game-card-dashboard"
                    style={{ borderColor: game.borderColor }}
                  >
                    {/* Game cover image */}
                    <div className="game-cover-dashboard">
                      <img src={game.image} alt={game.name} />
                    </div>
                    {/* Game information */}
                    <div className="game-info-dashboard">
                      <h3 className="game-name-dashboard">{game.name}</h3>
                      <p className="game-developer-dashboard">
                        Developed by: {game.developer}
                      </p>
                      {/* Rating display */}
                      <div className="game-rating">
                        <span className="star-icon">★</span>
                        <span>{game.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>

        {/* Footer Section */}
        {/* Contains navigation links, copyright, and social media icons */}
        <footer className="dashboard-footer">
          <div className="footer-content">
            {/* Navigation links */}
            <div className="footer-links">
              <a href="#" className="footer-link">About</a>
              <span className="footer-separator">|</span>
              <a href="#" className="footer-link">Privacy</a>
              <span className="footer-separator">|</span>
              <a href="#" className="footer-link">Terms</a>
              <span className="footer-separator">|</span>
              <a href="#" className="footer-link">Contact</a>
            </div>
            {/* Copyright information */}
            <div className="footer-copyright">
              © 2005: CyberArena
            </div>
            {/* Social media icons */}
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

