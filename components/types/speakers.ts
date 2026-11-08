import { Category } from "./shared";

export type SpeakerProfile = {
    id: string;
    name: string;
    role: string;
    location: string;
    category: Exclude<Category, "All">;
    initials: string;
    accent: string;
    isFeatured?: boolean;
    topic: string;
};