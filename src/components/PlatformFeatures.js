// PlatformFeatures component - Shows three feature cards
// Displays: Curated Library, Community Reviews, and Publish Your Game

export default function PlatformFeatures() {
  return (
    <section className="platform-features">
      <div className="features-container">
        <h2 className="features-title">PLATFORM FEATURES</h2>
        
        {/* Three feature cards in a row */}
        <div className="features-grid">
          {/* Feature 1: Curated Library */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="6" width="20" height="12" rx="2"/>
                <path d="M6 10h12M6 14h8"/>
              </svg>
            </div>
            <h3 className="feature-name">CURATED LIBRARY</h3>
            <p className="feature-description">Play to discover.</p>
          </div>

          {/* Feature 2: Community Reviews */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3 className="feature-name">COMMUNITY REVIEWS</h3>
            <p className="feature-description">Build for indie Developers.</p>
          </div>

          {/* Feature 3: Publish Your Game */}
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                <line x1="9" y1="10" x2="15" y2="10"/>
                <line x1="12" y1="7" x2="12" y2="13"/>
              </svg>
            </div>
            <h3 className="feature-name">PUBLISH YOUR GAME</h3>
            <p className="feature-description">Your game deserves players.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

