# Roadmap: AURA 3.0

## Overview
AURA 3.0 evolves from a static menu into a real-time ordering system. The journey moves from setting up the React/Supabase foundation to building the customer-facing name/table gate, the ordering logic, and finally the real-time manager dashboard for full operational control.

## Phases

- [ ] **Phase 1: Foundation & Theming** - Initialize React (Vite) and Supabase, and migrate AURA 2.0 CSS tokens.
- [ ] **Phase 2: Customer Landing & Data** - Build the Name/Table entry gate and dynamic menu fetching.
- [ ] **Phase 3: Cart & Real-time Ordering** - Implement the cart system and order submission to Supabase.
- [ ] **Phase 4: Admin Dashboard & Auth** - Create the secure manager login and real-time order queue.
- [ ] **Phase 5: Inventory & Availability** - Add manager controls for toggling item availability.

## Phase Details

### Phase 1: Foundation & Theming
**Goal**: Establish the technical backbone and visual identity.
**Depends on**: Nothing
**Requirements**: SETUP-01, SETUP-02, SETUP-03
**Success Criteria**:
  1. Vite + React project is running locally.
  2. CSS variables from AURA 2.0 are accessible in the React project.
  3. Supabase connection is verified with a successful "ping" to the database.
**Plans**: 2 plans

Plans:
- [ ] 01-01: Initialize Vite/React project and migrate CSS tokens/variables.
- [ ] 01-02: Configure Supabase client and define initial DB schemas for `menu_items` and `orders`.

### Phase 2: Customer Landing & Data
**Goal**: Enable customers to identify themselves and view the menu dynamically.
**Depends on**: Phase 1
**Requirements**: CUST-01, CUST-02, CUST-03
**Success Criteria**:
  1. Landing page prompts for Name and Table Number.
  2. Menu items are fetched from Supabase (not hardcoded JS).
  3. Search and filtering work identically to AURA 2.0.
**Plans**: 2 plans

Plans:
- [ ] 02-01: Create the Landing/Entry gate component with name/table validation.
- [ ] 02-02: Build the Menu rendering engine using Supabase data.

### Phase 3: Cart & Real-time Ordering
**Goal**: Allow customers to build a cart and submit orders.
**Depends on**: Phase 2
**Requirements**: CUST-04, CUST-05, CUST-06
**Success Criteria**:
  1. Items can be added to/removed from a persistent cart.
  2. Submitting an order creates a record in the Supabase `orders` table.
  3. User sees a "Thank You" or "Order Sent" confirmation screen.
**Plans**: 2 plans

Plans:
- [ ] 03-01: Implement the Cart state management and UI.
- [ ] 03-02: Hook up the order submission logic with Supabase.

### Phase 4: Admin Dashboard & Auth
**Goal**: Empower managers to see incoming orders in real-time.
**Depends on**: Phase 3
**Requirements**: ADMN-01, ADMN-02, ADMN-03
**Success Criteria**:
  1. Secure login page restricts access to the `/manager` route.
  2. Manager sees a live list of orders that updates automatically when a customer submits one.
  3. Manager can "Clear" or "Mark as Served" an order to remove it from the view.
**Plans**: 2 plans

Plans:
- [ ] 04-01: Setup Supabase Auth and the Admin login interface.
- [ ] 04-02: Build the Real-time Order Queue dashboard.

### Phase 5: Inventory & Availability
**Goal**: Give managers control over what is visible to customers.
**Depends on**: Phase 4
**Requirements**: ADMN-04, ADMN-05
**Success Criteria**:
  1. Manager dashboard has a "Menu Management" tab.
  2. Toggling an item to "Out of Stock" immediately hides it or marks it as unavailable for customers.
**Plans**: 1 plan

Plans:
- [ ] 05-01: Build the inventory management UI and availability sync logic.

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Theming | 0/2 | Not started | - |
| 2. Customer Landing & Data | 0/2 | Not started | - |
| 3. Cart & Real-time Ordering | 0/2 | Not started | - |
| 4. Admin Dashboard & Auth | 0/2 | Not started | - |
| 5. Inventory & Availability | 0/1 | Not started | - |

---
*Roadmap defined: 2026-05-04*
*Last updated: 2026-05-04 after initial definition*
