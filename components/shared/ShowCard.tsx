import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export interface ShowCardProps {
    title: string;
    description: string;
    iconName: keyof typeof Ionicons.glyphMap;
    iconColor: string;
    iconCoverColor?: string;
}

export default function ShowCard({ title, description, iconColor, iconName, iconCoverColor }: ShowCardProps) {
    return (

        <View className="mb-5 rounded-[28px] border border-white/10 bg-[#1b2f59]/80 p-4">
            <View className="mb-3 flex-row items-center">
                <View className={`mr-3 h-20 w-20 items-center justify-center rounded-[15px] bg-${iconCoverColor}`}>
                    <Ionicons name={iconName} size={30} color={iconColor} />
                </View>
                <View className="flex-1">
                    <Text className="text-[22px] font-bold text-white">
                        {title}
                    </Text>
                    <Text className="text-[12px] text-[#c8d9f6] opacity-80">
                        {description}
                    </Text>
                </View>
            </View>


        </View>

    )
}