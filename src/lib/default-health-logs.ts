import { HealthLog, HealthActivity } from "./health-log.types";

export const defaultHealthLogs: HealthLog[] = [
  {
    id: 1,
    description: "Had a healthy breakfast",
    activity: HealthActivity.eat,
    timestamp: new Date("2023-04-01T08:00:00"),
  },
  {
    id: 2,
    description: "Morning meditation session",
    activity: HealthActivity.meditate,
    timestamp: new Date("2023-04-01T09:00:00"),
  },
  {
    id: 3,
    description: "Gym workout",
    activity: HealthActivity.workout,
    timestamp: new Date("2023-04-01T18:00:00"),
  },
  {
    id: 4,
    description: "Drank 8 glasses of water",
    activity: HealthActivity.drink,
    timestamp: new Date("2023-04-01T22:00:00"),
  },
];