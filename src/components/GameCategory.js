// GameCategory component - Displays a horizontal row of game cards
// Props: title (section title), description (subtitle), games (array of game objects)
// This component shows a preview of games and links to the full games page

export default function GameCategory({ title, description, games, category }) {
  // Convert title to lowercase and replace spaces with hyphens for URL
  // Example: "FEATURED GAMES" -> "featured"
  // This creates a URL-friendly category identifier
  // If category prop is provided, use it; otherwise generate from title
  const categorySlug = category || title.toLowerCase().replace(/\s+/g, '-').replace(/-games$/, '').replace(/games$/, '').trim()
  return (
    <section className="game-category">
      <div className="category-container">
        {/* Section header with title and description */}
        <div className="category-header">
          <h2 className="category-title">{title}</h2>
          <p className="category-description">{description}</p>
        </div>

        {/* Horizontal scrollable row of game cards */}
        <div className="games-row">
          {games.map((game, index) => (
            <div key={index} className="game-card">
              {/* Game cover image */}
              <div className="game-cover">
                {game.image ? (
                  <img
                    src={game.image}
                    alt={game.name}
                    className="game-image"
                  />
                ) : (
                  <div className="game-image-placeholder">
                    {game.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Game information */}
              <div className="game-info">
                <h3 className="game-name">{game.name}</h3>
                <p className="game-developer">
                  Developed by: <span>{game.developer}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All link on the right */}
        {/* This link redirects to the games page with the category as a query parameter */}
        {/* Example: /games?category=featured */}
        <div className="view-all">
          <a href={`/games?category=${categorySlug}`} className="view-all-link">
            View All Games →
          </a>
        </div>
      </div>
    </section>
  )
}

