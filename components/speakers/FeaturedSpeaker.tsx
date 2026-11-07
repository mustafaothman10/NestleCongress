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

export default function FeaturedSpeaker({ speaker }: { speaker: Speaker }) {
    return (
        <View className="mb-5 rounded-[22px] border-[#f0d15d] border-2 bg-[#f4f5f9] p-3">
            <View className="flex-row items-center">
                <View
                    className=" mr-3 h-12 w-12 items-center justify-center rounded-full border-2 border-[#f0d15d]"
                    style={{ backgroundColor: speaker.accent }}
                >
                    <Text className="text-[16px] font-bold text-[#142c57]">
                        {speaker.initials}
                    </Text>
                </View>

                <View className="flex-1">
                    <Text className="text-[11px] font-bold uppercase tracking-[1px] text-[#f0d15d]">
                        Featured Speaker
                    </Text>
                    <Text className="mt-1 text-[20px] font-bold text-[#10264e]">
                        {speaker.name}
                    </Text>
                    <Text className="text-[12px] text-[#5d7398]">
                        {speaker.role}
                    </Text>
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
                    <Ionicons name="star" size={16} color="#10264e" />
                </Pressable>
            </View>


        </View>
    );
}

