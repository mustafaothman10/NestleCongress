import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type InfoRowProps = {
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    value: string;
};

export default function InfoRow({ icon, label, value }: InfoRowProps) {
    return (
        <View className="mb-3 flex-row items-center rounded-xl border border-[#dfe9f8] bg-[#edf4ff] px-3 py-3">
            <View className="mr-3 h-8 w-8 items-center justify-center rounded-full bg-white">
                <Ionicons name={icon} size={15} color="#2a4d8f" />
            </View>

            <View className="flex-1">
                <Text className="text-[10px] font-semibold uppercase tracking-[1px] text-[#667ea7]">
                    {label}
                </Text>
                <Text className="mt-1 text-[14px] font-semibold text-[#112a56]">
                    {value}
                </Text>
            </View>
        </View>
    );
}
