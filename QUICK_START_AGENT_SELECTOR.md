# Quick Start Guide - Agent Selector

## Starting the System

### 1. Start Deep Researcher Backend
```bash
# In the root directory: Infosys-Springboard-Virtual-Internship-6.0-Open-Deep-Researcher-batch-2
langgraph dev
```
✅ Backend runs on: `http://localhost:2024`

### 2. Start Agent Chat UI
```powershell
# Navigate to agent-chat-ui folder
cd agent-chat-ui

# Start the development server
pnpm dev
```
✅ UI runs on: `http://localhost:3001`

### 3. Open Browser
Navigate to: **http://localhost:3001**

---

## Using the Agent Selector

### The UI Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Select Agent: [▼ Full Research System - Complete end-t...] │  ← Agent Selector Dropdown
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Thread / Chat Interface                                   │  ← Main Chat Area
│                                                             │
│  Your messages and agent responses appear here...          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Available Agents in Dropdown

When you click the dropdown, you'll see:

```
Select Agent: ▼
┌─────────────────────────────────────────────────────────────────┐
│ Full Research System - Complete end-to-end research system     │  ← Default
│ Scope Research - User clarification and brief generation       │
│ Research Agent - Research agent with Tavily search             │
│ Research Agent (MCP) - Research agent with MCP filesystem      │
│ Multi-Agent Supervisor - Multi-agent coordinator for complex.. │
└─────────────────────────────────────────────────────────────────┘
```

### How to Switch Agents

1. **Click** the dropdown at the top of the page
2. **Select** your desired agent
3. **Automatically**: 
   - The chat thread resets
   - Connection switches to the new agent
   - Selection is saved to localStorage

### Persistence

- Your selected agent **persists across page refreshes**
- Stored in browser localStorage
- No need to re-select after closing/reopening the browser

---

## Agent Descriptions

### 🚀 Full Research System (Default)
- **ID**: `research_agent_full`
- **Best For**: Complete research projects requiring all capabilities
- **Features**: End-to-end research with all tools and features enabled

### 🎯 Scope Research
- **ID**: `scope_research`
- **Best For**: Initial project scoping and requirement gathering
- **Features**: User clarification questions, brief generation

### 🔍 Research Agent
- **ID**: `research_agent`
- **Best For**: Standard web research tasks
- **Features**: Tavily search integration for web queries

### 📁 Research Agent (MCP)
- **ID**: `research_agent_mcp`
- **Best For**: Research with local file system access
- **Features**: MCP (Model Context Protocol) filesystem integration

### 🤝 Multi-Agent Supervisor
- **ID**: `research_agent_supervisor`
- **Best For**: Complex research requiring coordination
- **Features**: Orchestrates multiple specialized agents

---

## Testing the Feature

### Test 1: Basic Agent Switch
1. Open the UI at http://localhost:3001
2. Default agent should be "Full Research System"
3. Click dropdown → Select "Scope Research"
4. Verify the selection changes
5. Start a conversation to test the agent

### Test 2: Persistence
1. Select "Research Agent (MCP)"
2. Refresh the page (F5)
3. Verify "Research Agent (MCP)" is still selected

### Test 3: All Agents
Try each agent one by one:
- Full Research System ✓
- Scope Research ✓
- Research Agent ✓
- Research Agent (MCP) ✓
- Multi-Agent Supervisor ✓

---

## Troubleshooting

### Dropdown Not Appearing
- **Check**: Is the UI running on port 3001?
- **Fix**: Run `pnpm dev` in the `agent-chat-ui` folder

### "Failed to connect to LangGraph server"
- **Check**: Is the backend running on port 2024?
- **Fix**: Run `langgraph dev` in the root workspace directory

### Agent Not Switching
- **Check**: Open browser DevTools → Console for errors
- **Fix**: Make sure localStorage is enabled in your browser

### Selection Not Persisting
- **Check**: Browser localStorage settings
- **Fix**: Ensure localStorage is not disabled (private/incognito mode may block this)

---

## File Locations

If you need to modify anything:

```
agent-chat-ui/
├── src/
│   ├── lib/
│   │   └── agents-config.ts          ← Agent definitions
│   ├── providers/
│   │   ├── agent-provider.tsx        ← State management
│   │   └── Stream.tsx                ← Agent connection logic
│   ├── components/
│   │   └── agent-selector.tsx        ← Dropdown UI
│   └── app/
│       └── page.tsx                  ← Main page integration
└── .env                              ← API configuration
```

---

## Default Configuration

From `.env`:
```env
NEXT_PUBLIC_API_URL=http://localhost:2024
NEXT_PUBLIC_ASSISTANT_ID=research_agent_full
```

The selector **overrides** `NEXT_PUBLIC_ASSISTANT_ID` dynamically.

---

## Summary

✅ **What It Does**: Lets you switch between 5 different Deep Researcher agents  
✅ **How**: Simple dropdown at the top of the UI  
✅ **Persistence**: Your choice is saved in browser localStorage  
✅ **No Backend Changes**: Works with existing Deep Researcher setup  
✅ **Zero Configuration**: Works out of the box after `pnpm dev`

**Enjoy researching with Deep Researcher!** 🎉
