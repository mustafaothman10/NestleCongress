import { UiSession } from "../types";

export const toSessionCategory = (type: string): UiSession["category"] => {
    switch (type) {
        case "keynote":
            return "Keynote";
        case "workshop":
            return "Nutrition";
        default:
            return "Research";
    }
};

