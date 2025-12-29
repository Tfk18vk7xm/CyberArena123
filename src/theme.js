// Theme configuration file
// This file exports a shared theme object that can be used across all pages
// Other developers can import this theme to maintain consistency

export const theme = {
  // Color palette
  colors: {
    primary: '#64b5f6',      // Light blue - primary brand color
    secondary: '#0a1929',    // Dark blue - background color
    accent: '#42a5f5',       // Lighter blue - hover states
    text: {
      primary: '#ffffff',    // White - main text
      secondary: '#b0bec5',  // Light gray - secondary text
      muted: '#90a4ae',      // Muted gray - less important text
    },
    background: {
      primary: '#0a1929',    // Dark blue - main background
      secondary: '#0d1929',  // Slightly lighter - section backgrounds
      card: '#1a237e',       // Darker blue - card backgrounds
    },
    border: {
      primary: '#64b5f6',    // Light blue - primary borders
      secondary: 'rgba(255, 255, 255, 0.1)', // Subtle borders
    },
  },

  // Typography
  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  // Spacing
  spacing: {
    xs: '0.5rem',   // 8px
    sm: '1rem',     // 16px
    md: '1.5rem',   // 24px
    lg: '2rem',     // 32px
    xl: '3rem',     // 48px
    '2xl': '4rem',  // 64px
  },

  // Border radius
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.15)',
    lg: '0 8px 16px rgba(100, 181, 246, 0.3)',
    xl: '0 12px 24px rgba(0, 0, 0, 0.2)',
  },

  // Transitions
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },

  // Breakpoints (for responsive design)
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
}

// Export a function to get theme colors (useful for dynamic theming)
export const getThemeColors = (themeMode = 'dark') => {
  if (themeMode === 'light') {
    return {
      ...theme.colors,
      background: {
        primary: '#ffffff',
        secondary: '#f5f5f5',
        card: '#ffffff',
      },
      text: {
        primary: '#0a1929',
        secondary: '#424242',
        muted: '#757575',
      },
    }
  }
  return theme.colors
}

// Export default theme object
export default theme

