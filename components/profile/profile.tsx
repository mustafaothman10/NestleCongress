import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Profile() {
    return (
        <View className="rounded-[24px] border border-white/10 bg-[#1b2f59]/80 p-4">
            <View className="items-center">
                <View
                    className="relative h-20 w-20 items-center justify-center rounded-full border-[4px] border-[#dfeafc] bg-[#f4f7ff]"
                    style={{ backgroundColor: "#f3f7ff" }}
                >
                    <Text className="text-[32px] font-bold text-[#10264e]">HL</Text>

                    <View className="absolute -bottom-1 -right-1 h-7 w-7 items-center justify-center rounded-full border-[3px] border-[#f1f7ff] bg-[#f0c758]">
                        <Ionicons name="camera-outline" size={14} color="#10264e" />
                    </View>
                </View>
            </View>

            <Text className="mt-4 text-center text-[30px] font-bold text-[#f6faff]">
                Huda Latheef
            </Text>

            <Text className="mt-1 text-center text-[13px] text-[#cfe0ff]">
                Medical Congress Attendee
            </Text>

            <Text className="mt-3 text-center text-[12px] font-semibold text-[#dfeeff]">
                ID: NMC-2026-001
            </Text>
        </View>
    )
}