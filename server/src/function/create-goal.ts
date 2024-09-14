import { db } from "../db";
import { goals } from "../db/schema";

interface CreateGoal {
    title:string,
    desiredWeeklyFrequency:number,
}   

export async function createGoal({
    title, 
    desiredWeeklyFrequency
}: CreateGoal){
    const result = await db
    .insert(goals)
    .values({
        title,
        desiredWeeklyFrequency,
    })
    .returning();

    const goal = result[0];

    return {
        goal,
    }
}