import { Colleges, Grade } from "@/views/types";
export function getColleges(index: number): string {
    return Colleges[index];
}

export function getGrade(index: number): string {
    return Grade[index];
}
