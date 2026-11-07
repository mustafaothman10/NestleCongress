import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type SpeakerCategory = "All" | "Nutrition" | "Research" | "Pediatric";

type Speaker = {
    id: string;
    name: string;
    role: string;
    location: string;
    category: Exclude<SpeakerCategory, "All">;
    initials: string;
    accent: string;
    isFeatured?: boolean;
    topic: string;
};


export default
    function Speaker({ speaker }: { speaker: Speaker }) {
    return (
        <Pressable className="mb-3 flex-row items-center rounded-[18px] border border-white/10 bg-[#f4f5f9] p-3">
            <View
                className="border-2 border-[#9bb9e8] mr-3 h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: speaker.accent }}
            >
                <Text className="text-[14px] font-bold text-[#10264e]">
                    {speaker.initials}
                </Text>
            </View>

            <View className="flex-1">
                <Text className="text-[11px] font-bold uppercase tracking-[1px] text-[#7b8fac]">
                    {speaker.category}
                </Text>
                <Text className="mt-1 text-[17px] font-bold text-[#10264e]">
                    {speaker.name}
                </Text>
                <Text className="text-[12px] text-[#5d7398]">{speaker.role}</Text>
                <View className="mt-2 flex-row items-center">
                    <Ionicons name="location-outline" size={12} color="#5d7398" />
                    <Text className="ml-1 text-[11px] text-[#5d7398]">
                        {speaker.location}
                    </Text>
                </View>
                <Text className="self-start rounded-lg bg-[#a5badf] mt-4 text-[10px] font-semibold text-[#10315f] jus
                                    item-center px-2 py-1">
                    {speaker.topic}
                </Text>
            </View>

            <Pressable className="h-9 w-9 items-center justify-center rounded-full border border-[#dfe9f8] bg-white">
                <Ionicons name="star-outline" size={16} color="#10264e" />
            </Pressable>
        </Pressable>
    );
}
