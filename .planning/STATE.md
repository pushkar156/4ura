# Project State: AURA 3.0

**Milestone:** v1.0 MVP Initialization
**Current Phase:** Phase 0 (Planning)
**Last Action:** Project initialization and planning documentation created.

## Active Context
- **Objective:** Transition AURA from a static menu to a real-time ordering system.
- **Key Constraints:** Free hosting (Vercel/Netlify), Supabase for backend, preserve existing AURA 2.0 aesthetics.
- **Tech Stack:** React (Vite), Tailwind/Vanilla CSS, Supabase (DB, Auth, Realtime).

## Recent Decisions
- **Stack Shift:** Decided to move from Vanilla JS to React to handle the complexity of the Manager Dashboard and real-time state.
- **Table Gate:** Customers will enter their table number manually after scanning a common QR code to simplify physical setup.
- **Admin Security:** Supabase Auth will be used for a single manager account to protect the dashboard.

## Pending Questions / Risks
- **Data Migration:** We need to migrate 80+ items from `menu-items.js` into Supabase. I should plan an automated script for this to avoid manual data entry.
- **Realtime Quota:** Ensure the "Manager Dashboard" stays within Supabase's free tier realtime limits.

## Phase History
(None yet)

---
*Last action: 2026-05-04 04:40*
