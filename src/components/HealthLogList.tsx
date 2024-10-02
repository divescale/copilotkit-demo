"use client";

import { AddHealthLog } from "@/components/AddHealthLog";
import { HealthLog } from "@/components/HealthLog";
import { useHealthLogs } from "@/lib/hooks/use-health-logs";
import { AnimatePresence } from "framer-motion";
import { HeartPulse } from "lucide-react"; // Import the heart icon

export function HealthLogList() {
  const { healthLogs } = useHealthLogs();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="flex flex-col gap-4 min-w-full md:min-w-[500px]">
        <h1 className="text-2xl font-bold flex items-center">
          <HeartPulse className="mr-2 h-6 w-6 text-black-500" /> {/* Add the icon here */}
          Log your health routine here
        </h1>
        <AddHealthLog />

        <AnimatePresence>
          {healthLogs
            .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
            .map((log) => (
              <HealthLog key={log.id} log={log} />
            ))}
        </AnimatePresence>
      </div>
    </main>
  );
}
