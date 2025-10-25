# Layout Fix - TODO List

## Objective
Fix the vertical overflow issue by properly integrating AgentSelector into the Thread component's layout system without breaking the existing 100vh viewport contract.

## Analysis Complete ✅
- [x] Identified root cause: AgentSelector placed outside Thread component
- [x] Confirmed Thread expects full 100vh viewport
- [x] Reviewed original repository structure
- [x] Documented issue in LAYOUT_ISSUE_ANALYSIS.md

---

## Solution Options

Based on original repository structure, we have 3 possible solutions:

### Option 1: Move AgentSelector INSIDE Thread Component ⭐ (RECOMMENDED)
**Pros:**
- Respects Thread's layout contract
- Thread manages total height calculation
- Minimal structural changes
- Follows the pattern Thread uses for its own header

**Cons:**
- Requires modifying Thread component (not ideal, but necessary)
- Couples AgentSelector to Thread

**Implementation:**
1. Read entire `Thread` component to understand structure
2. Find where Thread renders its header/top section
3. Inject AgentSelector at the top of Thread's internal layout
4. Ensure Thread's height calculations account for AgentSelector

---

### Option 2: Create Custom Layout Wrapper
**Pros:**
- Keeps Thread component unchanged
- More flexible for future additions

**Cons:**
- More complex implementation
- Need to rewrite viewport height management
- Risk breaking Thread's internal scroll logic

**Implementation:**
1. Create new layout component that manages viewport
2. Calculate remaining height after AgentSelector
3. Pass calculated height to Thread
4. Update Thread to accept height prop

---

### Option 3: Modify Page Layout with CSS Grid/Flexbox
**Pros:**
- Pure CSS solution
- No component logic changes

**Cons:**
- May conflict with Thread's existing layout system
- Harder to debug if issues arise
- Less control over dynamic height

**Implementation:**
1. Wrap page in CSS Grid container
2. Use `grid-template-rows: auto 1fr`
3. AgentSelector in first row (auto)
4. Thread in second row (1fr = remaining space)
5. Modify Thread to not use `min-h-screen`

---

## Chosen Solution: Option 1 ⭐

**Reasoning:**
- Safest approach that respects Thread's architecture
- Similar to how Thread already manages its internal header
- Least likely to cause unexpected side effects
- Can be implemented without major refactoring

---

## Implementation TODO

### Phase 1: Investigation (MUST DO FIRST)
- [ ] Read full `Thread` component source code (all 565 lines)
- [ ] Identify where Thread renders header content
- [ ] Find where Thread sets up layout structure
- [ ] Locate any height/viewport calculations
- [ ] Document Thread's internal component structure
- [ ] Verify how StickToBottom is implemented

### Phase 2: Design Integration Point
- [ ] Determine exact location to inject AgentSelector
- [ ] Check if Thread has a props system for header content
- [ ] Verify if Thread uses slots/portals pattern
- [ ] Plan how to pass AgentProvider context to Thread
- [ ] Ensure AgentSelector height is accounted for in scroll calculations

### Phase 3: Code Modification
- [ ] Update `src/app/page.tsx`:
  - [ ] Keep `<AgentProvider>` wrapping Thread
  - [ ] Remove `<AgentSelector />` from page level
  - [ ] Pass AgentSelector to Thread (method TBD based on Phase 1)

- [ ] Update `src/components/thread/index.tsx`:
  - [ ] Add AgentSelector rendering at top of Thread
  - [ ] Adjust height calculations if needed
  - [ ] Ensure scroll area starts below AgentSelector
  - [ ] Test StickToBottom still works correctly

- [ ] Update `src/components/agent-selector.tsx`:
  - [ ] Remove `border-b` if Thread already has borders
  - [ ] Adjust padding to match Thread's design
  - [ ] Ensure it fits within Thread's design system

### Phase 4: Testing
- [ ] Test on different screen sizes (mobile, tablet, desktop)
- [ ] Verify input field is visible and accessible
- [ ] Verify scroll behavior works correctly
- [ ] Test agent switching functionality
- [ ] Check that Thread History sidebar still works
- [ ] Verify Artifact panel doesn't conflict
- [ ] Test with long message threads

### Phase 5: Edge Cases
- [ ] Test with browser zoom (50%, 100%, 150%, 200%)
- [ ] Test with browser dev tools open
- [ ] Test in different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Verify mobile responsive behavior
- [ ] Check accessibility (keyboard navigation, screen readers)

### Phase 6: Documentation
- [ ] Update AGENT_SELECTOR_COMPLETE.md with final solution
- [ ] Document any Thread component modifications
- [ ] Add comments explaining AgentSelector integration
- [ ] Update QUICK_START_AGENT_SELECTOR.md if UI changed

---

## Critical Rules

### ❌ DO NOT:
1. Remove or modify `min-h-screen` from Thread without understanding full impact
2. Change StickToBottom component behavior
3. Add page-level scroll (Thread manages its own scroll)
4. Assume Thread can be treated as a normal component
5. Make changes without checking original repository first

### ✅ DO:
1. Read original Thread component source code completely
2. Test after EVERY change
3. Compare with original repository frequently
4. Preserve Thread's viewport height contract
5. Follow Thread's existing patterns for layout

---

## Success Criteria

- [x] Agent selector is visible at top of page
- [ ] Input field and submit button are fully visible
- [ ] Scroll behavior works correctly
- [ ] Thread height exactly fills remaining viewport
- [ ] No vertical overflow or hidden content
- [ ] All existing Thread features still work:
  - [ ] Message scrolling
  - [ ] Sticky input at bottom
  - [ ] Thread history sidebar
  - [ ] Artifact panel
  - [ ] Tool calls display
- [ ] Agent selection persists and functions correctly
- [ ] Layout works on all screen sizes

---

## Priority: 🔴 CRITICAL - BLOCKING

This must be fixed before the feature can be considered complete. The current implementation is non-functional.

---

## Estimated Effort

- Phase 1 (Investigation): 30-45 minutes
- Phase 2 (Design): 15-20 minutes  
- Phase 3 (Implementation): 30-45 minutes
- Phase 4 (Testing): 30 minutes
- Phase 5 (Edge Cases): 20 minutes
- Phase 6 (Documentation): 15 minutes

**Total: ~2.5-3 hours**

---

## Notes

- Original repository link: https://github.com/langchain-ai/agent-chat-ui
- Original page.tsx location: `src/app/page.tsx`
- Original Thread component: `src/components/thread/index.tsx` (565 lines)
- Key dependency: `use-stick-to-bottom` library for scroll management

---

## Current Status: 📋 PLANNING PHASE

Next action: **Phase 1 - Read entire Thread component source code**
