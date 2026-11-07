import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function SearchField() {
    return (
        <View className="mb-4 flex-row items-center rounded-full border border-white/10 bg-white/10 px-4 py-3">
            <Ionicons name="search-outline" size={18} color="#dfeeff" />
            <TextInput
                placeholder="Search quick access"
                placeholderTextColor="#a9bfdc"
                className="ml-3 flex-1 text-[13px] text-white"
            />
        </View>
    );
}