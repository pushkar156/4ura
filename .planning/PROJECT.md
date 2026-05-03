# Project Context: AURA 3.0

**Status:** Initializing
**Vision:** A premium, real-time restaurant ordering ecosystem that bridges the gap between digital menus and physical service.

## Core Value
To provide a frictionless, "zero-login" ordering experience for customers while empowering managers with real-time order tracking and menu control, all wrapped in a high-performance, glassmorphism UI.

## What This Is
AURA 3.0 is a complete evolution of the AURA 2.0 static menu. It transitions from a file-based display to a dynamic, Supabase-backed React application. It features a dual-interface system: a mobile-first customer ordering portal and a secure admin dashboard for order management and inventory control.

## Success Criteria
1.  **Frictionless Entry:** Customers can start ordering in seconds by scanning a QR and entering a name/table number.
2.  **Real-time Synchronization:** Manager sees new orders instantly via Supabase Realtime without page refreshes.
3.  **Aesthetic Continuity:** Preserves the exact color palette, typography, and glassmorphism style of AURA 2.0.
4.  **Operational Control:** Manager can toggle item availability (In Stock / Out of Stock) dynamically.
5.  **Free & Simple Deployment:** Hosted on Vercel/Netlify with Supabase Free Tier for zero operational cost.

## Requirements

### Validated (from AURA 2.0)
- ✓ **Responsive Design:** Mobile-first layout for various screen sizes.
- ✓ **Theming System:** Dark/Light mode support with persistent user choice.
- ✓ **Menu Categorization:** Logical grouping of 80+ items.
- ✓ **Search Functionality:** Instant filtering of menu items.

### Active (Hypotheses for 3.0)
- [ ] **React Migration:** Port existing HTML/CSS/JS logic into a modular React (Vite) application.
- [ ] **Name/Table Gate:** Mandatory entry screen for customers before accessing the menu.
- [ ] **Order Cart:** Simple persistent cart for customers to add/remove items.
- [ ] **Order Submission:** Real-time push of order details to Supabase.
- [ ] **Manager Dashboard:** Real-time list of active orders with "Serve/Clear" actions.
- [ ] **Inventory Control:** Toggle to enable/disable items on the menu via the dashboard.
- [ ] **Secure Admin:** Password-protected login for the manager dashboard.

### Out of Scope
- **Payment Gateways:** No digital payments (as per user request).
- **Customer Accounts:** No login/signup for customers (simplicity focus).
- **Desktop Wrapper:** No Electron/Native layer for this version.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| **React + Vite** | Better state management for ordering and dashboard logic compared to Vanilla JS. | Decided |
| **Supabase** | Free tier, easy Auth, and powerful Realtime features for instant order updates. | Decided |
| **CSS Variables** | Maintain the AURA 2.0 theme tokens for 1:1 visual match. | Decided |
| **Name/Table Input** | Replaces QR-table-coding to simplify physical setup (only 1 QR code needed for all tables). | Decided |

## Evolution
This document evolves at phase transitions and milestone boundaries.

---
*Last updated: 2026-05-04 after initialization*
