# Architectural & Technical Concerns

**Analysis Date:** 2026-05-04

## High Priority

### 1. Manual Data Management
- **Description:** 80+ items are managed in a single `menu-items.js` file.
- **Impact:** High risk of syntax errors, difficult to scale beyond a few hundred items, and lacks concurrency (only one person can edit easily without merge conflicts).
- **Recommendation:** Migrate to a structured database (SQL/NoSQL) and a backend API.

### 2. Rendering Performance
- **Description:** `displayMenuItems` re-renders large portions of the DOM using template literals on every search or filter change.
- **Impact:** Potential layout thrashing and sluggishness as the menu grows.
- **Recommendation:** Implement a virtual DOM approach or fine-grained DOM updates (e.g., hiding/showing instead of re-creating).

## Medium Priority

### 3. State Management Fragmentation
- **Description:** Theming state is in `localStorage`, but application state (search query, current category) is in-memory only.
- **Impact:** Refreshing the page loses the current view/search context.
- **Recommendation:** Sync view state with URL parameters or use a lightweight state management pattern.

### 4. Hardcoded Category Logic
- **Description:** `menu.js` contains some hardcoded logic for specific categories or item types.
- **Impact:** Adding new categories requires logic changes in `menu.js` instead of just data changes in `menu-items.js`.
- **Recommendation:** Make the UI entirely data-driven based on unique category keys found in the data.

## Low Priority

### 5. Dependency on CDNs
- **Description:** Reliability depends on Font Awesome and Google Fonts CDNs.
- **Impact:** Offline development is limited; production failure if a CDN goes down.
- **Recommendation:** Self-host critical assets if high availability is required.

---

*Concerns analysis: 2026-05-04*
*Update as issues are resolved or new ones identified*
