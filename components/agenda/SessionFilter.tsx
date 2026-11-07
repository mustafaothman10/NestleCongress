import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type SessionCategory = "All" | "Keynote" | "Nutrition" | "Research";

const categories: SessionCategory[] = ["All", "Keynote", "Nutrition", "Research"];

type SessionFilterProps = {
    selectedCategory: SessionCategory;
    onSelect: (category: SessionCategory) => void;
};

export default function SessionFilter({
    selectedCategory,
    onSelect,
}: SessionFilterProps) {
    return (
        <View className="mb-4 flex-row items-center justify-between">
            <View className="flex-row flex-wrap">
                {categories.map((category) => {
                    const active = category === selectedCategory;
                    return (
                        <Pressable
                            key={category}
                            onPress={() => onSelect(category)}
                            className={`mr-2 mb-2 rounded-full px-3 py-2 ${active ? "bg-[#3877ed]" : "bg-white/5"
                                }`}
                        >
                            <Text
                                className={`text-[11px] font-semibold ${active ? "text-white" : "text-[#bfd5f8]"
                                    }`}
                            >
                                {category}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>

            <Pressable className="ml-2 flex-row items-center rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <Ionicons name="reload-outline" size={14} color="#dfeaff" />
                <Text className="ml-1 text-[11px] font-medium text-[#dfeaff]">
                    Reset
                </Text>
            </Pressable>
        </View>
    );
}
