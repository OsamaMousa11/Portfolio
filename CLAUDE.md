# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm start` - Start development server (opens http://localhost:3000)
- `npm run build` - Build for production (outputs to `build/` folder)
- `npm test` - Run tests in interactive watch mode
- `npm run eject` - Eject from Create React App (irreversible)

## Architecture Overview

This is a personal portfolio website built with Create React App featuring:

### Core Structure
- **Single-page application** with scroll-based navigation using IntersectionObserver
- **Theme system** with dark/light mode toggle stored in localStorage
- **Responsive design** with desktop navigation and mobile sidebar
- **Particles background** using @tsparticles/react for visual effects

### Key Components
- `App.js` - Main application container with embedded resume data, theme management, and navigation logic
- `Background.jsx` - Particles animation background system
- `Sidebar.jsx` - Mobile navigation with theme toggle
- `Hero.jsx` - Landing section with name/title
- `AboutWindow.jsx` - Introduction/summary section
- `Experience.jsx` - Work experience timeline
- `Skills.jsx` - Technology skills with IconCloudDemo
- `Projects.jsx` - Project showcase with links
- `Activities.jsx` - Activities and achievements
- `Contact.jsx` - Contact information

### Data Management
- **Embedded data model**: All portfolio content is stored directly in `App.js` as the `resumeData` object
- **Static data**: No external APIs or databases - all content is compile-time static
- **Theme persistence**: Uses localStorage for theme preference

### Styling Architecture  
- **CSS Custom Properties**: Theme system using CSS variables in `:root` and `:root[data-theme="light"]`
- **portfolio.css** - Main styling file with responsive design and theme support
- **Reveal animations** - Intersection observer-based animations with `.reveal` class

### Dependencies
Key libraries used:
- **@tsparticles/react** + **@tsparticles/slim** - Animated background particles
- **react-icon-cloud** - 3D icon cloud for skills section
- **@uiw/react-heat-map** - Heat map visualizations
- **@uiw/react-tooltip** - Tooltip components

## Development Notes

### Content Updates
To modify portfolio content, edit the `resumeData` object in `src/App.js` (lines 13-136). This includes:
- Personal information and contact details
- Work experience entries  
- Project information with links
- Activities and achievements

### Theme System
Theme switching is handled by:
- `toggleTheme()` function in App.js
- CSS custom properties in portfolio.css
- `data-theme` attribute on document element
- localStorage persistence

### Particles Configuration
Particle effects are configured in `particals.json` and can be customized for different visual effects.

### Mobile Responsiveness
The app uses a hybrid navigation approach:
- Desktop: Top navigation bar
- Mobile: Hamburger sidebar (Sidebar.jsx)
Both share the same theme toggle and section linking functionality.