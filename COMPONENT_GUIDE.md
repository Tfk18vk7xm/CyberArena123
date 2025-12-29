# Component Guide - How Everything Works Together

This guide explains how the landing page components work together.

## How Next.js Pages Work

In Next.js, files in the `src/pages/` folder automatically become routes:
- `src/pages/index.js` → becomes the homepage at "/"
- `src/pages/about.js` → would become "/about" (if you create it)

## The Landing Page Flow

```
User visits website
    ↓
src/pages/index.js loads
    ↓
Imports all components:
    - Header (top navigation)
    - Hero (big banner)
    - GameCategory (multiple sections)
    - PlatformFeatures (feature cards)
    - Footer (bottom section)
    ↓
All components render together
    ↓
src/styles/globals.css applies styling
    ↓
User sees the complete landing page
```

## Component Hierarchy

```
src/pages/index.js (Main Page)
├── Header
│   ├── Logo
│   ├── Navigation Links
│   └── Login/Sign Up Buttons
│
├── Hero
│   ├── Background Image
│   ├── Main Heading
│   └── Tagline
│
├── GameCategory (Featured Games)
│   ├── Section Title
│   ├── Game Cards (6 games)
│   └── View All Link
│
├── GameCategory (Popular Games)
│   └── (same structure)
│
├── GameCategory (Racing Games)
│   └── (same structure)
│
├── GameCategory (Action Games)
│   └── (same structure)
│
├── PlatformFeatures
│   ├── Feature Card 1 (Curated Library)
│   ├── Feature Card 2 (Community Reviews)
│   └── Feature Card 3 (Publish Your Game)
│
└── Footer
    ├── Copyright
    ├── Navigation Links
    └── Social Media Icons
```

## Understanding Props

Props are like parameters you pass to components. For example:

```javascript
// In src/pages/index.js
<GameCategory 
  title="FEATURED GAMES"           // This is a prop
  description="Handpicked games"   // This is a prop
  games={[...]}                    // This is a prop (array of games)
/>
```

The `GameCategory` component receives these props and uses them to display different content.

## Styling System

All styles are in `src/styles/globals.css`:
- Uses CSS classes (like `.header`, `.hero`, `.game-card`)
- Dark blue theme (#0a1929) with light blue accents (#64b5f6)
- Responsive design (works on mobile, tablet, desktop)

## Theme System

The project includes a shared theme configuration in `src/theme.js`:
- Centralized color palette
- Typography settings
- Spacing values
- Can be imported and used across all pages

```javascript
import theme from '../theme'

// Use theme colors
const primaryColor = theme.colors.primary
```

## Redux State Management

The project uses Redux for state management:
- `src/redux/store.js` - Main store configuration
- `src/redux/reducers/movieReducer.js` - Manages movie/game state
- `src/redux/reducers/themeReducer.js` - Manages theme state

## Making Changes

### To change the hero message:
Edit `src/components/Hero.js` - change the text in `hero-title` or `hero-tagline`

### To add more games:
Edit `src/pages/index.js` - add more game objects to the `games` array in any `GameCategory`

### To change colors:
Edit `src/styles/globals.css` - search for color codes like `#0a1929` or `#64b5f6` and replace them
OR
Edit `src/theme.js` - update the theme colors and import where needed

### To add a new page:
Create a new file in `src/pages/` folder, e.g., `src/pages/about.js`

## Simple Concepts Used

1. **Components**: Reusable pieces of UI (like Header, Footer)
2. **Props**: Data passed from parent to child component
3. **JSX**: HTML-like syntax in JavaScript
4. **CSS Classes**: Styling applied via className attribute
5. **Import/Export**: How files share code with each other
6. **Redux**: State management for global application state
7. **Theme**: Shared design tokens for consistent styling

No complex Next.js features used - just basic React and Next.js routing!

