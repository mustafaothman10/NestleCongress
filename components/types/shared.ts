export type UiSession = {
    id: number;
    time: string;
    title: string;
    speaker: string;
    category: "Keynote" | "Nutrition" | "Research";
};

export type Category = "All" | "Nutrition" | "Research" | "Pediatric";

