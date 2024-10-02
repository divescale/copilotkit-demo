export type HealthLog = {
    id: number;
    description: string;
    activity: HealthActivity;
    timestamp: Date;
};

export enum HealthActivity {
    eat = "eat",
    drink = "drink",
    meditate = "meditate",
    workout = "workout",
}

