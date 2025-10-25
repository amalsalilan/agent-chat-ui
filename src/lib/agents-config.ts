// Agent configuration for Deep Researcher
export interface Agent {
  id: string;
  name: string;
  description: string;
}

export const DEEP_RESEARCHER_AGENTS: Agent[] = [
  {
    id: "research_agent_full",
    name: "Full Research System",
    description: "Complete end-to-end research system with all capabilities",
  },
  {
    id: "scope_research",
    name: "Scope Research",
    description: "User clarification and brief generation",
  },
  {
    id: "research_agent",
    name: "Research Agent",
    description: "Research agent with Tavily search",
  },
  {
    id: "research_agent_mcp",
    name: "Research Agent (MCP)",
    description: "Research agent with MCP filesystem",
  },
  {
    id: "research_agent_supervisor",
    name: "Multi-Agent Supervisor",
    description: "Multi-agent coordinator for complex research",
  },
];

export const DEFAULT_AGENT_ID = "research_agent_full";

export function getAgentById(id: string): Agent | undefined {
  return DEEP_RESEARCHER_AGENTS.find((agent) => agent.id === id);
}

export function getAgentName(id: string): string {
  const agent = getAgentById(id);
  return agent ? agent.name : id;
}
