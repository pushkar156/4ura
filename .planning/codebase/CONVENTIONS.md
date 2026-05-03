# Coding Conventions

**Analysis Date:** 2026-05-04

## General Principles

- **Mobile-First Design:** Responsive layouts are designed for small screens first and scale up.
- **Vanilla Implementation:** Zero external frameworks; rely on standard browser APIs.
- **Clean Data:** Keep UI logic (`menu.js`) separate from the content repository (`menu-items.js`).

## CSS / Styling

**Naming:**
- Uses descriptive class names (e.g., `.menu-card`, `.price-tag`).
- Follows a hybrid of simple naming and BEM-lite where appropriate.

**Theming:**
- **Variables:** All colors, shadows, and transitions must use CSS Variables defined in `:root` and `[data-theme='dark']`.
- **Naming Schema:** `--primary`, `--secondary`, `--bg-color`, `--card-bg`.

**Layout:**
- Prefer `display: grid` for structured lists (like the menu) and `display: flex` for components (like headers/filters).

## JavaScript

**Variables:**
- Use `const` by default, `let` only when reassignment is necessary.
- Avoid `var`.

**Functions:**
- Use Arrow Functions for simple utilities and callbacks.
- Use named functions for core application logic (`displayMenuItems`, `organizeMenuData`).

**DOM Manipulation:**
- Use Template Literals for generating complex HTML structures.
- Cache frequently accessed DOM elements (though currently often re-queried).

**State:**
- Persist user preferences (like theme) in `localStorage`.

## Data Structure (`menu-items.js`)

- Items must follow the established schema:
  ```javascript
  "Item Name": {
      price: Number,
      rating: Number,
      category: String,
      type: "Veg" | "Non-Veg",
      image: String (URL)
  }
  ```

---

*Conventions analysis: 2026-05-04*
*Update when coding standards evolve*
