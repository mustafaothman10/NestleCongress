import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export interface ShowCardProps {
    title: string;
    description: string;
    iconName: keyof typeof Ionicons.glyphMap;
    iconColor: string;
}

export default function ShowCard({ title, description, iconColor, iconName }: ShowCardProps) {
    return (

        <View className="mb-5 rounded-[28px] border border-white/10 bg-[#1b2f59]/80 p-4">
            <View className="mb-3 flex-row items-center">
                <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-[#6ecaf7]">
                    <Ionicons name="sparkles" size={18} color={iconColor} />
                </View>
                <Text className="text-[22px] font-bold text-white">
                    {title}
                </Text>
            </View>

            <Text className="text-[12px] text-[#c8d9f6]">
                {description}
            </Text>
        </View>

    )
}