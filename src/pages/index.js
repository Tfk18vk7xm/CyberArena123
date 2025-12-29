// This is the main landing page (homepage) of the website
// In Next.js, pages/index.js automatically becomes the route "/"
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import GameCategory from '../components/GameCategory'
import PlatformFeatures from '../components/PlatformFeatures'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      {/* Head component allows us to modify the HTML head (title, meta tags, etc.) */}
      <Head>
        <title>CyberArena - Discover & Play Indie Games Instantly</title>
        <meta name="description" content="Join a growing community and explore something unique" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main container for the entire page */}
      <main className="main-container">
        {/* Header component - contains logo, navigation, and login buttons */}
        <Header />
        
        {/* Hero section - the big banner with main message */}
        <Hero />
        
        {/* Featured Games section */}
        <GameCategory 
          title="FEATURED GAMES"
          description="Handpicked featured games found by the community"
          games={[
            { name: "Stellar Blade", developer: "dev_stellar" },
            { name: "Need For Speed", developer: "dev_nfs" },
            { name: "Fortnite", developer: "dev_fortnite" },
            { name: "NBA 2K24", developer: "dev_nba" },
            { name: "Fable Legends", developer: "dev_fable" },
            { name: "Mortal Kombat 1", developer: "dev_mk" }
          ]}
        />
        
        {/* Popular Games section */}
        <GameCategory 
          title="POPULAR GAMES"
          description="Trending games loved by the community"
          games={[
            { name: "GTA V", developer: "dev_gta" },
            { name: "Call of Duty", developer: "dev_cod" },
            { name: "Valorant", developer: "dev_valorant" },
            { name: "Hollow Knight", developer: "dev_hollow" },
            { name: "Undertale", developer: "dev_undertale" },
            { name: "Hades", developer: "dev_hades" }
          ]}
        />
        
        {/* Racing Games section */}
        <GameCategory 
          title="RACING GAMES"
          description="Fast-paced racing action"
          games={[
            { name: "F1 23", developer: "dev_f1" },
            { name: "Need For Speed", developer: "dev_nfs" },
            { name: "Asphalt 9", developer: "dev_asphalt" },
            { name: "Dirt 5", developer: "dev_dirt" },
            { name: "Hot Wheels Unleashed", developer: "dev_hotwheels" },
            { name: "Mario Kart", developer: "dev_mario" }
          ]}
        />
        
        {/* Action Games section */}
        <GameCategory 
          title="ACTION GAMES"
          description="Thrilling action-packed adventures"
          games={[
            { name: "NBA 2K24", developer: "dev_nba" },
            { name: "Tekken 8", developer: "dev_tekken" },
            { name: "Assassin's Creed", developer: "dev_ac" },
            { name: "Elden Ring", developer: "dev_elden" },
            { name: "Spider-Man", developer: "dev_spiderman" },
            { name: "God of War", developer: "dev_gow" }
          ]}
        />
        
        {/* Platform Features section */}
        <PlatformFeatures />
        
        {/* Footer component - contains copyright, links, and social media */}
        <Footer />
      </main>
    </div>
  )
}

