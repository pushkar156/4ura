# Technology Stack

**Analysis Date:** 2026-05-04

## Languages

**Primary:**
- JavaScript (ES6+) - Core application logic and data management.
- HTML5 - Page structure and semantic markup.
- CSS3 - Styling, layouts (Grid/Flexbox), and theme variables.

## Runtime

**Environment:**
- Browser (Modern Evergreen Browsers) - The application is purely client-side.
- No backend runtime (e.g., Node.js) currently in use for the production app.

## Frameworks

**Core:**
- Vanilla JavaScript - No external frameworks like React or Vue are used.
- Vanilla CSS - Standard CSS with custom properties (CSS variables) for theming.

**Testing:**
- Manual Testing - Specialized HTML files (`test-menu.html`, `test-display.html`, `menu-debug.html`) are used for data and UI verification.

**Build/Dev:**
- None - Static execution. A batch script `start-server.bat` is available for local serving (likely using a tool like `http-server` or `live-server`).

## Key Dependencies

**Critical:**
- Font Awesome (via CDN) - Used for all UI icons.
- Google Fonts (via CDN) - League Spartan, Philosopher, M PLUS Rounded 1c.
- Unsplash (via URL) - Used for menu item images.

## Configuration

**Environment:**
- Client-side variables - Theme state (light/dark) stored in `localStorage`.

## Platform Requirements

**Development:**
- Any platform with a web browser and a text editor.
- Local static server recommended for development.

**Production:**
- Any static web hosting service (GitHub Pages, Vercel, Netlify).

---

*Stack analysis: 2026-05-04*
*Update after major dependency changes*
