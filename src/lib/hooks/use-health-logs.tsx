import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { createContext, useContext, useState, ReactNode } from "react";
import { defaultHealthLogs } from "@/lib/default-health-logs";
import { HealthLog, HealthActivity } from "@/lib/health-log.types";

let nextId = defaultHealthLogs.length + 1;

type HealthLogsContextType = {
  healthLogs: HealthLog[];
  addHealthLog: (description: string, activity: HealthActivity) => void;
  deleteHealthLog: (id: number) => void;
};

const HealthLogsContext = createContext<HealthLogsContextType | undefined>(undefined);

export const HealthLogsProvider = ({ children }: { children: ReactNode }) => {
  const [healthLogs, setHealthLogs] = useState<HealthLog[]>(defaultHealthLogs);

  useCopilotReadable({
    description: "The state of the health logs",
    value: JSON.stringify(healthLogs),
  });

  useCopilotAction({
    name: "addHealthLog",
    description: "Adds a health log entry",
    parameters: [
      {
        name: "description",
        type: "string",
        description: "The description of the health activity",
        required: true,
      },
      {
        name: "activity",
        type: "string",
        description: "The type of health activity",
        enum: Object.values(HealthActivity),
        required: true,
      },
    ],
    handler: ({ description, activity }) => {
      addHealthLog(description, activity as HealthActivity);
    },
  });

  useCopilotAction({
    name: "deleteHealthLog",
    description: "Deletes a health log entry",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the health log entry",
        required: true,
      },
    ],
    handler: ({ id }) => {
      deleteHealthLog(id);
    },
  });

  const addHealthLog = (description: string, activity: HealthActivity) => {
    setHealthLogs([...healthLogs, { id: nextId++, description, activity, timestamp: new Date() }]);
  };

  const deleteHealthLog = (id: number) => {
    setHealthLogs(healthLogs.filter((log) => log.id !== id));
  };

  return (
    <HealthLogsContext.Provider
      value={{ healthLogs, addHealthLog, deleteHealthLog }}
    >
      {children}
    </HealthLogsContext.Provider>
  );
};

export const useHealthLogs = () => {
  const context = useContext(HealthLogsContext);
  if (context === undefined) {
    throw new Error("useHealthLogs must be used within a HealthLogsProvider");
  }
  return context;
};
