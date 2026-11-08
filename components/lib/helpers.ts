import { Category } from "../types";

export function getSpeakerCategory(description: string): Exclude<Category, "All"> {
    const value = description.toLowerCase();

    if (value.includes("nutrition") || value.includes("diet") || value.includes("health")) {
        return "Nutrition";
    }

    if (
        value.includes("research") ||
        value.includes("clinical") ||
        value.includes("diagnostic") ||
        value.includes("medical") ||
        value.includes("ai")
    ) {
        return "Research";
    }

    return "Pediatric";
}