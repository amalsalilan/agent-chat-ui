"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { DEFAULT_AGENT_ID } from "@/lib/agents-config";

interface AgentContextType {
  selectedAgent: string;
  setSelectedAgent: (agentId: string) => void;
}

const AgentContext = createContext<AgentContextType | undefined>(undefined);

const STORAGE_KEY = "deep-researcher-selected-agent";

export function AgentProvider({ children }: { children: ReactNode }) {
  const [selectedAgent, setSelectedAgentState] = useState<string>(DEFAULT_AGENT_ID);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setSelectedAgentState(stored);
    }
  }, []);

  // Save to localStorage when changed
  const setSelectedAgent = (agentId: string) => {
    setSelectedAgentState(agentId);
    localStorage.setItem(STORAGE_KEY, agentId);
  };

  return (
    <AgentContext.Provider value={{ selectedAgent, setSelectedAgent }}>
      {children}
    </AgentContext.Provider>
  );
}

export function useAgent() {
  const context = useContext(AgentContext);
  if (!context) {
    throw new Error("useAgent must be used within AgentProvider");
  }
  return context;
}
