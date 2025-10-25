# Quick Start Guide - Agent Chat UI with Deep Researcher

## Setup Complete ✅

The Agent Chat UI is now configured to work with all Deep Researcher agents!

## How to Run

### Step 1: Start Deep Researcher API
In the **main project directory**, run:
```bash
uv run langgraph dev --allow-blocking
```
Wait until you see: `API: http://127.0.0.1:2024`

### Step 2: Start Agent Chat UI
In the **agent-chat-ui directory**, run:
```bash
pnpm dev
```
Or if using npm:
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to: `http://localhost:3001`

## Switching Between Agents

To use a different agent, edit the `.env` file and change the `NEXT_PUBLIC_ASSISTANT_ID`:

**Available Options:**
- `research_agent_full` - Complete end-to-end system (DEFAULT) ⭐
- `scope_research` - User clarification & brief generation
- `research_agent` - Research agent with Tavily search
- `research_agent_mcp` - Research agent with MCP filesystem
- `research_agent_supervisor` - Multi-agent coordinator

**Example:**
```bash
NEXT_PUBLIC_ASSISTANT_ID=scope_research
```

After changing, restart the Agent Chat UI (`pnpm dev`).

## Troubleshooting

**Problem:** UI shows connection error
**Solution:** Make sure Deep Researcher API is running on port 2024

**Problem:** UI not updating after changing agent
**Solution:** Restart the UI with `pnpm dev`

**Problem:** Port 3001 already in use
**Solution:** Kill the process or change port in `package.json` scripts

## Configuration

Current settings in `.env`:
- API URL: `http://localhost:2024` (Deep Researcher)
- Default Agent: `research_agent_full` (Full research system)

That's it! You're ready to chat with Deep Researcher! 🎉
