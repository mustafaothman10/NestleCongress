import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function FacilityPill({
    icon,
    label,
}: {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
}) {
    return (
        <View className="mb-3 w-[48%] items-center justify-center rounded-[18px] border border-[#dfe9f8] bg-[#f5f8ff] p-3">
            <Ionicons name={icon} size={22} color="#123a73" />
            <Text className="mt-2 text-[13px] font-semibold text-[#123a73]">
                {label}
            </Text>
        </View>
    );
}