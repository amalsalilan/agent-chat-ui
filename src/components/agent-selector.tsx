"use client";

import React from "react";
import { useAgent } from "@/providers/agent-provider";
import { DEEP_RESEARCHER_AGENTS, getAgentById } from "@/lib/agents-config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function AgentSelector() {
  const { selectedAgent, setSelectedAgent } = useAgent();
  const currentAgent = getAgentById(selectedAgent);

  return (
    <div className="flex items-center gap-3 border-b bg-background px-4 py-2.5">
      <Label htmlFor="agent-select" className="text-sm font-medium whitespace-nowrap">
        Agent:
      </Label>
      <Select value={selectedAgent} onValueChange={setSelectedAgent}>
        <SelectTrigger id="agent-select" className="flex-1 max-w-sm">
          {currentAgent?.name}
        </SelectTrigger>
        <SelectContent>
          {DEEP_RESEARCHER_AGENTS.map((agent) => (
            <SelectItem key={agent.id} value={agent.id}>
              {agent.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {currentAgent && (
        <span className="hidden sm:inline text-xs text-muted-foreground truncate">
          {currentAgent.description}
        </span>
      )}
    </div>
  );
}
