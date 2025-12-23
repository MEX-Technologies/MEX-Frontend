# Theme Guide

How to customize the MEX site theme and styling.

## Overview

MEX uses a centralized theme system for consistent styling across the platform.

## Theme Configuration

Theme settings are located in `/src/config/theme.js`.

## Customization

### Colors

Modify color variables in the theme configuration:

```javascript
colors: {
  primary: '#FF6B35',
  black: '#000000',
  white: '#FFFFFF',
  // ...
}
```

### Typography

Adjust font sizes and families:

```javascript
typography: {
  fontFamily: 'IBM Plex Sans',
  fontSize: {
    base: '1rem',
    // ...
  }
}
```

## Chart Themes

Charts use theme colors and styling automatically. See [THEME_GUIDE.md](../../THEME_GUIDE.md) for details.

## Learn More

- Review [THEME_GUIDE.md](../../THEME_GUIDE.md)
- Check [Markdown Guide](./markdown-guide.md)

