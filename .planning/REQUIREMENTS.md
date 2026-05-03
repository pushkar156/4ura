# Requirements: AURA 3.0

**Defined:** 2026-05-04
**Core Value:** A premium, real-time restaurant ordering ecosystem that bridges the gap between digital menus and physical service.

## v1 Requirements

### Setup & Infrastructure
- [ ] **SETUP-01**: Initialize React (Vite) project with Tailwind/Vanilla CSS support.
- [ ] **SETUP-02**: Port AURA 2.0 theme tokens (colors, gradients, fonts) as CSS variables.
- [ ] **SETUP-03**: Configure Supabase project (Auth, Database, Realtime).

### Customer Experience (Mobile-First)
- [ ] **CUST-01**: Access restricted until Name and Table Number are entered.
- [ ] **CUST-02**: Dynamic menu display fetched from Supabase.
- [ ] **CUST-03**: Interactive menu with search and category filtering (preserved from v2).
- [ ] **CUST-04**: Persistent cart system (add/remove/update quantity).
- [ ] **CUST-05**: Order submission pushes data to Supabase orders table.
- [ ] **CUST-06**: Order confirmation state for the user.

### Admin Dashboard (Desktop/Tablet optimized)
- [ ] **ADMN-01**: Secure login for managers using Supabase Auth.
- [ ] **ADMN-02**: Real-time order queue showing incoming orders with Name, Table, and Items.
- [ ] **ADMN-03**: "Clear Order" action to remove processed orders from the live queue.
- [ ] **ADMN-04**: Menu Management: List all items with "Availability" toggle (In Stock/Out of Stock).
- [ ] **ADMN-05**: Live sync: Changes to item availability update the customer menu instantly.

## v2 Requirements
- **STAT-01**: Daily/Weekly sales reports in Admin Dashboard.
- **NOTF-01**: Browser push notifications for manager on new orders.
- **IMG-01**: Image upload for menu items via Admin Dashboard.

## Out of Scope
| Feature | Reason |
|---------|--------|
| Payment Gateways | User explicitly requested no digital payments. |
| Customer Login | Simplicity/Frictionless focus; name/table is sufficient. |
| Desktop App | Web-first approach fulfills the "free hosting" requirement best. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SETUP-01 | Phase 1 | Pending |
| SETUP-02 | Phase 1 | Pending |
| SETUP-03 | Phase 1 | Pending |
| CUST-01 | Phase 2 | Pending |
| CUST-02 | Phase 2 | Pending |
| CUST-03 | Phase 2 | Pending |
| CUST-04 | Phase 3 | Pending |
| CUST-05 | Phase 3 | Pending |
| CUST-06 | Phase 3 | Pending |
| ADMN-01 | Phase 4 | Pending |
| ADMN-02 | Phase 4 | Pending |
| ADMN-03 | Phase 4 | Pending |
| ADMN-04 | Phase 5 | Pending |
| ADMN-05 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 14 total
- Mapped to phases: 14
- Unmapped: 0 ✓

---
*Requirements defined: 2026-05-04*
*Last updated: 2026-05-04 after initial definition*
