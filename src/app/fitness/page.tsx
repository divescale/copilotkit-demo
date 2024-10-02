"use client";

import { HealthLogList } from "@/components/HealthLogList";
import { HealthLogsProvider } from "@/lib/hooks/use-health-logs";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export default function Home() {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      <HealthLogsProvider>
        <HealthLogList />
      </HealthLogsProvider>
      <CopilotPopup />
    </CopilotKit>
  );
}
