import { commerceStreamData } from "./commerce-stream";
import { scienceStreamData } from "./science-stream";

export const twelethData = [
    {
        id: "sci",
        label: "Science (PUC / 11th-12th)",
        description: "For students interested in engineering, medicine, biotechnology, research, and pure sciences.",
        children: scienceStreamData
    },
    {
        id: "comm",
        label: "Commerce (PUC / 11th-12th)",
        description: "For students interested in business, finance, economics, management, and entrepreneurship.",
        children: commerceStreamData
    }];