import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Location() {
    return (
        <View className="mb-5 rounded-[22px] border border-white/10 bg-[#1b2f59]/80 p-4">
            <Text className="text-[18px] font-bold text-white">
                Dubai International Convention & Exhibition Center
            </Text>

            <View className="mt-3 flex-row items-center">
                <Ionicons name="calendar-outline" size={14} color="#dfeeff" />
                <Text className="ml-2 text-[12px] text-[#dfeeff]">
                    22 - 23 May 2026
                </Text>
            </View>
        </View>
    );
}