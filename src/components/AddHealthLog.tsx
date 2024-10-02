import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useHealthLogs } from "@/lib/hooks/use-health-logs";;
import { Input } from "@/components/ui/input";
import { HealthActivity } from "@/lib/health-log.types";

export function AddHealthLog() {
  const [description, setDescription] = useState("");
  const [activity, setActivity] = useState<HealthActivity | "">("");
  const { addHealthLog } = useHealthLogs();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description && activity) {
      addHealthLog(description, activity as HealthActivity);
      setDescription("");
      setActivity("");
    }
  };

  const options = Object.values(HealthActivity).map((act) => ({
    value: act,
    label: act,
  }));

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter health activity description"
        className="flex-grow"
      />
      
      {/* <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="solid" 
          color="default"
        >
          Select activity
        </Button>
      </DropdownTrigger>
      <DropdownMenu onAction={(key) => setActivity(key as HealthActivity)} 
      aria-label="Static Actions" items={getOptions()}>
      {(item) => (
          <DropdownItem
            key={item.value}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown> */}

      <Button variant="outline" type="submit">Add</Button>
    </form>
  );
}