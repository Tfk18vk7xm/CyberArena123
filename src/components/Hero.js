// Hero component - This is the main banner section at the top of the landing page
// Contains: Background image, main heading, tagline, and Xbox logo

export default function Hero() {
  return (
    <section className="hero">
      {/* Background image will be set via CSS */}
      <div className="hero-background"></div>
      
      {/* Content overlay on top of background */}
      <div className="hero-content">
        {/* Main heading - the big call to action */}
        <h1 className="hero-title">DISCOVER & PLAY INDIE GAMES INSTANTLY</h1>
        
        {/* Subtitle/tagline */}
        <p className="hero-tagline">Join a growing community and explore something unique</p>
      </div>

      {/* Xbox logo on the right side */}
      <div className="hero-logo">
        <div className="xbox-logo">XBOX</div>
      </div>
    </section>
  )
}

