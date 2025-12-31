// About page - Describes the CyberArena platform
// This page provides information about the platform, its mission, features, and how it works

import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      {/* Head component - Sets the page title and meta tags */}
      <Head>
        <title>About Us - CyberArena</title>
        <meta name="description" content="Learn about CyberArena - A platform for indie game developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main container for the entire page */}
      <main className="main-container">
        {/* Header component - Top navigation bar */}
        <Header />

        {/* About page content */}
        <section className="about-section">
          <div className="about-container">
            {/* Main heading */}
            <h1 className="about-title">About CyberArena</h1>
            
            {/* Introduction section */}
            <div className="about-content">
              <h2 className="about-subtitle">Our Mission</h2>
              <p className="about-text">
                CyberArena is a revolutionary platform designed to help independent game developers 
                gain visibility and connect with their audience. We believe that great games deserve 
                to be discovered, regardless of the size of the development team or marketing budget.
              </p>

              <h2 className="about-subtitle">What We Do</h2>
              <p className="about-text">
                Our platform provides a curated space where indie developers can showcase their games, 
                receive community feedback, and build a dedicated player base. We make it easy for 
                gamers to discover unique, innovative titles that might not get the mainstream attention 
                they deserve.
              </p>

              {/* Platform Features */}
              <h2 className="about-subtitle">Platform Features</h2>
              <div className="features-list">
                <div className="feature-item">
                  <h3 className="feature-title">Curated Library</h3>
                  <p className="feature-description">
                    Our team carefully selects and features the best indie games across various genres. 
                    Every game in our library has been reviewed to ensure quality and originality.
                  </p>
                </div>

                <div className="feature-item">
                  <h3 className="feature-title">Community Reviews</h3>
                  <p className="feature-description">
                    Players can share their experiences and rate games, helping others discover titles 
                    that match their interests. Our community-driven approach ensures authentic 
                    recommendations.
                  </p>
                </div>

                <div className="feature-item">
                  <h3 className="feature-title">Developer Support</h3>
                  <p className="feature-description">
                    We provide tools and resources to help developers promote their games, track 
                    analytics, and engage with their player community. Your success is our success.
                  </p>
                </div>

                <div className="feature-item">
                  <h3 className="feature-title">Easy Discovery</h3>
                  <p className="feature-description">
                    With advanced search and filtering options, players can easily find games by genre, 
                    rating, popularity, and more. Discover your next favorite game in seconds.
                  </p>
                </div>
              </div>

              {/* How It Works */}
              <h2 className="about-subtitle">How It Works</h2>
              <div className="how-it-works">
                <div className="step-item">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3 className="step-title">For Developers</h3>
                    <p className="step-description">
                      Submit your game to our platform. Our team reviews it for quality and originality. 
                      Once approved, your game is featured in our library and becomes discoverable by 
                      thousands of players.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3 className="step-title">For Players</h3>
                    <p className="step-description">
                      Browse our curated collection of indie games. Read reviews, watch gameplay, and 
                      discover unique titles. Play games instantly and share your feedback with the community.
                    </p>
                  </div>
                </div>

                <div className="step-item">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3 className="step-title">Community Building</h3>
                    <p className="step-description">
                      Join a growing community of developers and players. Share your experiences, 
                      provide feedback, and help shape the future of indie gaming.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <h2 className="about-subtitle">Why Choose CyberArena?</h2>
              <ul className="benefits-list">
                <li className="benefit-item">
                  <strong>Free to Use:</strong> No hidden fees for developers or players. We believe 
                  in making game discovery accessible to everyone.
                </li>
                <li className="benefit-item">
                  <strong>Quality Focused:</strong> Every game is reviewed to ensure it meets our 
                  quality standards before being featured.
                </li>
                <li className="benefit-item">
                  <strong>Community Driven:</strong> Our platform is built by and for the gaming 
                  community, ensuring authentic experiences.
                </li>
                <li className="benefit-item">
                  <strong>Developer Friendly:</strong> We provide tools and support to help developers 
                  succeed, not just list their games.
                </li>
                <li className="benefit-item">
                  <strong>Constantly Growing:</strong> New games are added regularly, so there's 
                  always something new to discover.
                </li>
              </ul>

              {/* Contact Information */}
              <h2 className="about-subtitle">Get in Touch</h2>
              <p className="about-text">
                Have questions? Want to submit your game? Need support? We're here to help! 
                Reach out to us through our contact page or connect with us on social media.
              </p>

              {/* Call to Action */}
              <div className="cta-section">
                <h3 className="cta-title">Ready to Get Started?</h3>
                <p className="cta-text">
                  Join thousands of developers and players who are already part of the CyberArena community.
                </p>
                <div className="cta-buttons">
                  <a href="/" className="cta-button primary">Discover Games</a>
                  <a href="/login" className="cta-button secondary">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer component - Bottom section with links and social media */}
        <Footer />
      </main>
    </div>
  )
}

