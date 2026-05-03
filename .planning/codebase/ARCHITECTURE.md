# Architecture

**Analysis Date:** 2026-05-04

## Pattern Overview

**Overall:** Static Frontend Web Application with Centralized Data

**Key Characteristics:**
- **Modular Data:** Menu items are decoupled from UI logic into a dedicated file (`menu-items.js`).
- **Functional UI Rendering:** Dynamic HTML generation based on data state using template literals.
- **Client-Side Search/Filter:** All data processing occurs in the browser on the loaded menu object.
- **Theming System:** CSS-variable-based dark/light mode managed via JS and persisted in `localStorage`.

## Layers

**Data Layer:**
- **Purpose:** Centralized storage of all menu content.
- **Contains:** `menuItemsData` object.
- **Location:** `menu-items.js`
- **Used by:** Logic Layer.

**Logic Layer:**
- **Purpose:** Data processing, filtering, and event handling.
- **Contains:** `MenuApp` (or functional equivalents like `organizeMenuData`, `displayMenuItems`).
- **Location:** `menu.js`
- **Depends on:** Data Layer.
- **Used by:** UI Layer.

**UI Layer:**
- **Purpose:** Displaying content and capturing user interaction.
- **Contains:** HTML structure, CSS styling, and DOM elements.
- **Location:** `home.html`, `menu.html`, `styles.css`.
- **Depends on:** Logic Layer for content.

## Data Flow

**Menu Rendering Flow:**

1. Browser loads `menu.html`.
2. Scripts `menu-items.js` and `menu.js` are executed.
3. `organizeMenuData()` groups the raw `menuItemsData` into categories.
4. `displayMenuItems()` is called with the categorized data.
5. HTML strings are generated for each item and injected into the DOM container.
6. Event listeners are attached to category filters and search inputs.

**State Management:**
- **Active Category:** Tracked in JS to filter the display.
- **Search Query:** Captured from input to live-filter the menu items.
- **Theme:** Persistent state in `localStorage` ("theme" key).

## Key Abstractions

**Menu Item Object:**
- **Purpose:** Standardized schema for all menu content.
- **Schema:** `{ price, rating, category, type, image, ... }`.

**Categorized Data Structure:**
- **Purpose:** Map of arrays where keys are category names, used for fast lookup and rendering.

## Entry Points

**Home Page:**
- **Location:** `home.html` / `index.html`
- **Responsibilities:** Dashboard view, navigation to menu, theme switching.

**Menu Page:**
- **Location:** `menu.html`
- **Responsibilities:** Displaying the full menu, searching, and filtering.

## Error Handling

**Strategy:** Fail-safe defaults for missing data.
- **Images:** Uses a default Unsplash image if the specified image URL is missing or fails to load.
- **Data:** Graceful degradation if categories are empty.

---

*Architecture analysis: 2026-05-04*
*Update when major patterns change*
