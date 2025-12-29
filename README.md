# CyberArena - Indie Game Development Platform

A web-based platform that helps independent game developers gain visibility and connect with their audience.

## Project Structure

```
client/
├── src/
│   ├── components/          # React components
│   │   ├── common/          # Common reusable components
│   │   │   ├── Login.js     # Login form component
│   │   │   └── MyAppBar.jsx # App bar component
│   │   ├── Header.js        # Top navigation bar
│   │   ├── Hero.js          # Hero banner section
│   │   ├── GameCategory.js  # Game category sections
│   │   ├── PlatformFeatures.js # Platform features section
│   │   └── Footer.js        # Footer with links and social media
│   │
│   ├── pages/               # Next.js pages (routes)
│   │   ├── _app.js          # Main app wrapper (loads global styles)
│   │   ├── _document.js     # Custom document
│   │   ├── index.js         # Landing page (homepage at "/")
│   │   ├── login.js         # Login page
│   │   └── blog.js          # Blog page
│   │
│   ├── redux/               # Redux state management
│   │   ├── reducers/        # Redux reducers
│   │   │   ├── movieReducer.js  # Movie/game reducer
│   │   │   └── themeReducer.js  # Theme reducer
│   │   └── store.js         # Redux store configuration
│   │
│   ├── styles/              # CSS styles
│   │   ├── mui/             # Material-UI custom styles
│   │   └── globals.css      # Global styles for entire website
│   │
│   └── theme.js             # Shared theme configuration
│
├── package.json              # Project dependencies and scripts
├── next.config.js           # Next.js configuration
├── .gitignore               # Git ignore file
└── README.md                # This file
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## File Explanations

### Pages

- **`src/pages/_app.js`**: This is a special Next.js file that wraps all pages. It's where we import global CSS styles.

- **`src/pages/index.js`**: This is the main landing page. When someone visits your website at "/", this page is shown. It imports and arranges all the components.

- **`src/pages/_document.js`**: Custom document for Next.js, allows customization of the HTML document structure.

- **`src/pages/login.js`**: Login page that uses the common Login component.

- **`src/pages/blog.js`**: Blog listing page.

### Components

- **`src/components/Header.js`**: Contains the logo, navigation menu (Home, Discover, Developers, Community), and Login/Sign Up buttons.

- **`src/components/Hero.js`**: The big banner section at the top with the main message "DISCOVER & PLAY INDIE GAMES INSTANTLY".

- **`src/components/GameCategory.js`**: A reusable component that displays a row of game cards. Used for Featured Games, Popular Games, Racing Games, and Action Games sections.

- **`src/components/PlatformFeatures.js`**: Shows three feature cards: Curated Library, Community Reviews, and Publish Your Game.

- **`src/components/Footer.js`**: The bottom section with copyright, navigation links, and social media icons.

- **`src/components/common/Login.js`**: Reusable login form component.

- **`src/components/common/MyAppBar.jsx`**: Reusable app bar component.

### Redux

- **`src/redux/store.js`**: Redux store configuration that combines all reducers.

- **`src/redux/reducers/movieReducer.js`**: Manages movie/game state.

- **`src/redux/reducers/themeReducer.js`**: Manages theme state (dark/light mode, colors).

### Styles

- **`src/styles/globals.css`**: Contains all the CSS styling for the website. Uses a dark blue theme (#0a1929) with light blue accents (#64b5f6).

- **`src/styles/mui/`**: Folder for Material-UI custom styles and theme overrides.

### Theme

- **`src/theme.js`**: Shared theme configuration file that exports a theme object with colors, typography, spacing, and other design tokens. Can be imported and used across all pages for consistent styling.

## Using the Theme

Import the theme in any component or page:

```javascript
import theme from '../theme'

// Use theme colors
const primaryColor = theme.colors.primary

// Use theme spacing
const margin = theme.spacing.lg
```

## Using Redux

Wrap your app with the Redux Provider:

```javascript
import { Provider } from 'react-redux'
import store from './redux/store'

<Provider store={store}>
  <YourApp />
</Provider>
```

## Next Steps

1. Add actual game images to replace the placeholders
2. Connect to MongoDB database
3. Create API routes for game data
4. Add user authentication
5. Implement game upload functionality
6. Add ML models for recommendations

## Notes

- This is a Next.js setup using the Pages Router
- All components are functional components (not class components)
- Styles are in a single CSS file for simplicity
- The design matches the CyberArena landing page with dark blue theme
- All frontend code is organized in the `client/` folder
