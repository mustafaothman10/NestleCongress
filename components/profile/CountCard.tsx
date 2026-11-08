import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function CountCard({
    icon,
    label,
    value,
}: {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    value: string;
}) {
    return (
        <View className="flex-1 items-center rounded-[16px] border border-[#dfeafc] bg-[#f5f8ff] px-3 py-4">
            <View className="mb-2 h-10 w-10 items-center justify-center rounded-full bg-white">
                <Ionicons name={icon} size={18} color="#2a4d8f" />
            </View>

            <Text className="text-[20px] font-bold text-[#10264e]">{value}</Text>
            <Text className="mt-1 text-[11px] text-[#5e7290]">{label}</Text>
        </View>
    );
}