import { Ionicons } from "@expo/vector-icons";

export type QuickAccessTab = "All" | "Event" | "Interactive" | "Tools";

export type QuickAccessItemData = {
    id: string;
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
    color: string;
    meta?: string;
    category: QuickAccessTab | "All";
};
