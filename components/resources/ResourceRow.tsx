import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";


type ResourceType = "All" | "PDF" | "Slides" | "Videos" | "Save";

type ResourceItem = {
    id: string;
    title: string;
    description: string;
    size: string;
    type: Exclude<ResourceType, "All">;
    accent: string;
};


export default function ResourceRow({ item }: { item: ResourceItem }) {
    return (
        <View className="mb-3 flex-row items-center rounded-[18px] border border-white/10 bg-[#f5f8ff] p-3">
            <View
                className="mr-3 h-12 w-12 items-center justify-center rounded-[12px]"
                style={{ backgroundColor: item.accent + "22" }}
            >
                <Text
                    className="text-[12px] font-bold"
                    style={{ color: item.accent }}
                >
                    {item.type === "PDF" ? "PDF" : item.type === "Slides" ? "SL" : item.type === "Videos" ? "VID" : "S"}
                </Text>
            </View>

            <View className="flex-1">
                <Text className="text-[11px] font-bold uppercase tracking-[1px] text-[#5f7aa6]">
                    {item.type}
                </Text>
                <Text className="mt-1 text-[15px] font-bold text-[#10264e]">
                    {item.title}
                </Text>
                <Text className="mt-1 text-[11px] text-[#5a7195]">
                    {item.description}
                </Text>
            </View>

            <View className="ml-2 items-end">
                <Text className="text-[11px] font-semibold text-[#516d98]">
                    {item.size}
                </Text>
                <Pressable className="mt-2 h-8 w-8 items-center justify-center rounded-full bg-white">
                    <Ionicons name="download-outline" size={16} color="#112a56" />
                </Pressable>
            </View>
        </View>
    );
}