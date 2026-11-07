import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Address() {
    return (
        <View className="mb-5 rounded-[22px] border border-white/10 bg-[#f3f6fb] p-3">
            <View className="mb-3 flex-row items-center">
                <View className="mr-3 h-9 w-9 items-center justify-center rounded-full bg-[#dfeeff]">
                    <Ionicons name="location-outline" size={18} color="#123a73" />
                </View>

                <Text className="text-[16px] font-bold text-[#162d54]">
                    Venue Address
                </Text>
            </View>

            <Text className="text-[15px] font-semibold text-[#1f3d72]">
                World Trade Centre, Dubai, United Arab Emirates
            </Text>
        </View>
    );
}