# Agent Selector Dropdown - Implementation Plan

## 📋 Project Overview

**Goal:** Add a dropdown selector in the Agent Chat UI to allow users to choose between all 5 Deep Researcher agents without editing `.env` file.

**Approach:** Option 1 + 4 - Dropdown with Auto-Fetch from API

**Impact:** 
- ✅ NO changes to Deep Researcher
- ✏️ ONLY changes in `agent-chat-ui/` folder

---

## ✅ Task List

### Phase 1: Research & Setup
- [ ] **Task 1.1:** Test LangGraph API endpoints
  - [ ] Check if `/assistants` endpoint exists
  - [ ] Check if `/info` endpoint returns graph list
  - [ ] Document what data is available
  - [ ] Decide: API fetch vs hardcoded list

- [ ] **Task 1.2:** Examine current code structure
  - [ ] Read `src/providers/Stream.tsx` - understand assistant_id usage
  - [ ] Read `src/app/page.tsx` - find where to add dropdown
  - [ ] Check existing UI components in `src/components/`
  - [ ] Verify Radix UI components available

---

### Phase 2: Create Agent Data Layer
- [ ] **Task 2.1:** Create agent configuration
  - [ ] File: `src/lib/agents-config.ts`
  - [ ] Define Agent interface (id, name, description)
  - [ ] Create hardcoded list of 5 agents as fallback
  - [ ] Export agent metadata

- [ ] **Task 2.2:** Create API fetch utility (Optional - for future)
  - [ ] File: `src/lib/fetch-agents.ts`
  - [ ] Function to fetch from LangGraph API
  - [ ] Add error handling
  - [ ] Add fallback to hardcoded list
  - [ ] Note: Can be added later if needed

- [ ] **Task 2.3:** Create React hook for agents
  - [ ] File: `src/hooks/use-agents.ts`
  - [ ] Hook to fetch and manage agent list
  - [ ] Handle loading state
  - [ ] Handle error state
  - [ ] Return agents array

---

### Phase 3: Build Agent Context
- [ ] **Task 3.1:** Create Agent Context Provider
  - [ ] File: `src/providers/agent-provider.tsx`
  - [ ] Create context for selected agent
  - [ ] Add state management (selectedAgent, setSelectedAgent)
  - [ ] Add localStorage persistence
  - [ ] Export useAgent hook

- [ ] **Task 3.2:** Wrap app with provider
  - [ ] File: `src/app/layout.tsx` or `page.tsx`
  - [ ] Add AgentProvider wrapper
  - [ ] Test context is accessible

---

### Phase 4: Build Dropdown Component
- [ ] **Task 4.1:** Create Agent Selector component
  - [ ] File: `src/components/agent-selector.tsx`
  - [ ] Use Radix UI Select component
  - [ ] Display current agent name
  - [ ] Show dropdown with all agents
  - [ ] Display agent descriptions
  - [ ] Handle selection change

- [ ] **Task 4.2:** Style the dropdown
  - [ ] Match existing UI theme
  - [ ] Add hover states
  - [ ] Add loading indicator
  - [ ] Make responsive for mobile
  - [ ] Add icons (optional)

---

### Phase 5: Integrate with Chat System
- [ ] **Task 5.1:** Modify Stream provider
  - [ ] File: `src/providers/Stream.tsx`
  - [ ] Import useAgent hook
  - [ ] Replace static `NEXT_PUBLIC_ASSISTANT_ID` with dynamic value
  - [ ] Add fallback to env variable
  - [ ] Test assistant switching

- [ ] **Task 5.2:** Add selector to UI
  - [ ] File: `src/app/page.tsx` or header component
  - [ ] Import AgentSelector component
  - [ ] Add to header/navbar area
  - [ ] Position next to "New Thread" button
  - [ ] Test visibility and functionality

---

### Phase 6: Handle Edge Cases
- [ ] **Task 6.1:** Add error handling
  - [ ] Show error message if API fetch fails
  - [ ] Gracefully fall back to hardcoded list
  - [ ] Show warning if selected agent doesn't exist
  - [ ] Handle network timeouts

- [ ] **Task 6.2:** Add user feedback
  - [ ] Show loading state while fetching agents
  - [ ] Add confirmation when switching agents
  - [ ] Clear conversation or show warning on agent switch
  - [ ] Add tooltips with agent descriptions

- [ ] **Task 6.3:** Add persistence
  - [ ] Save selected agent to localStorage
  - [ ] Load saved agent on page load
  - [ ] Clear saved agent if it no longer exists

---

### Phase 7: Testing
- [ ] **Task 7.1:** Functional testing
  - [ ] Test dropdown shows all 5 agents
  - [ ] Test selecting each agent
  - [ ] Test sending message with each agent
  - [ ] Test switching mid-conversation
  - [ ] Test page reload preserves selection

- [ ] **Task 7.2:** Error scenario testing
  - [ ] Test when Deep Researcher API is down
  - [ ] Test when API returns no graphs
  - [ ] Test with invalid agent ID
  - [ ] Test network timeout

- [ ] **Task 7.3:** UI/UX testing
  - [ ] Test on desktop (Chrome, Firefox, Safari)
  - [ ] Test on mobile (responsive)
  - [ ] Test keyboard navigation
  - [ ] Test with screen readers (accessibility)

---

### Phase 8: Documentation
- [ ] **Task 8.1:** Update QUICKSTART.md
  - [ ] Add section about agent selector
  - [ ] Remove manual `.env` editing instructions
  - [ ] Add screenshots (optional)

- [ ] **Task 8.2:** Add code comments
  - [ ] Document agent-provider.tsx
  - [ ] Document agent-selector.tsx
  - [ ] Add JSDoc comments to functions

---

## 📁 Files to Create/Modify

### New Files (6)
1. `src/lib/agents-config.ts` - Agent definitions
2. `src/lib/fetch-agents.ts` - API fetch utility
3. `src/hooks/use-agents.ts` - React hook
4. `src/providers/agent-provider.tsx` - Context provider
5. `src/components/agent-selector.tsx` - Dropdown UI
6. `agent-chat-ui/IMPLEMENTATION.md` - This file

### Files to Modify (2-3)
1. `src/providers/Stream.tsx` - Use dynamic agent
2. `src/app/page.tsx` - Add dropdown to UI
3. `src/app/layout.tsx` - Add provider wrapper (if needed)

---

## 🎯 Success Criteria

### Must Have ✅
- [ ] Dropdown displays all 5 agents
- [ ] Selecting an agent switches to that agent
- [ ] New conversations use selected agent
- [ ] Works without Deep Researcher code changes
- [ ] No errors in console

### Should Have 🟡
- [ ] Agent selection persists on reload
- [ ] Shows loading state while fetching
- [ ] Graceful error handling
- [ ] Responsive on mobile

### Nice to Have 🔵
- [ ] Smooth animations
- [ ] Keyboard shortcuts
- [ ] Auto-fetch from API (future enhancement)

---

## 🚀 Implementation Approach

**Time Estimate:** 2-3 hours  
**Strategy:** Balanced approach - functional with proper error handling

### Key Features:
1. ✅ Hardcoded agent list with API fallback ready
2. ✅ Clean dropdown using existing Radix UI components
3. ✅ Context provider for state management
4. ✅ localStorage persistence
5. ✅ Basic error handling
6. ✅ Match existing UI styling

### Approach:
- Start with hardcoded list (reliable, fast)
- Build proper context/state management
- Add dropdown with descriptions
- Integrate with chat system
- Test thoroughly

---

## 🔄 Development Workflow

Follow phases in order:

1. ✅ Phase 1: Research & Setup
2. ✅ Phase 2: Agent Data Layer (hardcoded)
3. ✅ Phase 3: Build Context Provider
4. ✅ Phase 4: Build Dropdown Component
5. ✅ Phase 5: Integrate with Chat
6. ✅ Phase 6: Error Handling
7. ✅ Phase 7: Testing
8. ✅ Phase 8: Documentation

---

## 📝 Notes

### Questions & Decisions
- **Q:** Should switching agents start a new thread?
  - **A:** YES - auto-start new thread to avoid confusion

- **Q:** Where to place dropdown?
  - **A:** Header, next to "New Thread" button

- **Q:** Show descriptions?
  - **A:** YES - in tooltip or as subtext in dropdown

### Known Limitations
- Switching mid-conversation will start new thread
- Requires Deep Researcher API to be running
- Agent list is fixed (from langgraph.json)

---

## 🐛 Troubleshooting Plan

| Issue | Solution |
|-------|----------|
| API fetch fails | Fall back to hardcoded list |
| Selected agent doesn't exist | Default to `research_agent_full` |
| localStorage corrupted | Clear and use default |
| Dropdown doesn't show | Check provider wrapper |

---

## 📊 Progress Tracking

**Started:** [Date]  
**Target Completion:** [Date]  

**Current Phase:** Not Started  
**Tasks Completed:** 0 / 36  
**Blockers:** None  

---

## ✨ Future Enhancements (Post-MVP)

- [ ] Add agent search/filter
- [ ] Show agent status (active/busy)
- [ ] Add custom agent configurations
- [ ] Multi-agent comparison mode
- [ ] Agent performance metrics

---

**Ready to start? Begin with Phase 1, Task 1.1! 🚀**
