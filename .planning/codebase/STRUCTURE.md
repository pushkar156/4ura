# Codebase Structure

**Analysis Date:** 2026-05-04

## Overview

The project is organized as a flat-structure static site with assets and documentation in subdirectories.

## Root Directory

| Path | Purpose |
| :--- | :--- |
| `index.html` | Potential entry point (often redirects to home). |
| `home.html` | Main dashboard/landing page for the user. |
| `menu.html` | The core menu display page. |
| `menu.js` | Main application logic for rendering and searching. |
| `menu-items.js` | Central data repository for all 80+ menu items. |
| `styles.css` | Global styling and theme definitions. |
| `start-server.bat` | Utility script to run a local development server. |
| `README.md` | General project documentation. |
| `MENU-IMPROVEMENTS.md`| Log of technical refactors and optimizations. |

## Directories

### `/assets`
Contains static media used by the application.
- `logo.png`: Application branding.
- Images for various categories (often referenced in JS).

### `/.planning` (New)
GSD workflow tracking and codebase intelligence.
- `/codebase`: Technical documentation (Stack, Architecture, etc.).

## Development & Test Files

| Path | Purpose |
| :--- | :--- |
| `test-menu.html` | Unit-like test for menu data organization. |
| `test-display.html`| Visual test for menu item card rendering. |
| `menu-debug.html` | Tooling for debugging data issues. |
| `menu-backup.html` | Legacy version of the menu page. |
| `menu-data-backup.js`| Backup of previous data state. |

---

*Structure analysis: 2026-05-04*
*Update when major files are moved or added*
