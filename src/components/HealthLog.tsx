import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useHealthLogs } from "@/lib/hooks/use-health-logs";
import { motion } from "framer-motion";
import { HealthActivity, type HealthLog } from "@/lib/health-log.types";
import { format } from "date-fns";

export function HealthLog({ log: { id, description, activity, timestamp } }: { log: HealthLog }) {
  const { deleteHealthLog } = useHealthLogs();

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center gap-4 p-4 rounded-md bg-gray-100"
    >
      <Label className="flex-1 text-sm text-muted-foreground font-bold">
        {description}
      </Label>
      <div className={`text-sm font-medium px-2 py-1 rounded ${activity === HealthActivity.drink ? 'bg-blue-300' : activity === HealthActivity.eat ? 'bg-green-300' : activity === HealthActivity.meditate ? 'bg-purple-300' : 'bg-gray-300'}`}>{activity}</div>
      <div className="text-sm text-neutral-500">
        {format(timestamp, "dd MMM, dd hh:mm a")}
      </div>
      <Button variant="ghost" size="sm" onClick={() => deleteHealthLog(id)}>
        <TrashIcon className="w-4 h-4 text-red-500" />
        <span className="sr-only">Delete</span>
      </Button>
    </motion.div>
  );
}