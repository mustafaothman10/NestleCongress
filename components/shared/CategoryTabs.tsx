import { Pressable, Text, View } from "react-native";



const speakerCategories: SpeakerCategory[] = [
    "All",
    "Nutrition",
    "Research",
    "Pediatric",
];

type SpeakerCategory = "All" | "Nutrition" | "Research" | "Pediatric";


export default function CategoryTabs({
    activeTab,
    onChange,
}: {
    activeTab: SpeakerCategory;
    onChange: (tab: SpeakerCategory) => void;
}) {
    return (
        <View className="mb-5 flex-row flex-wrap">
            {speakerCategories.map((tab) => {
                const active = activeTab === tab;
                return (
                    <Pressable
                        key={tab}
                        onPress={() => onChange(tab)}
                        className={`mr-2 mb-2 rounded-full px-3 py-2 ${active ? "bg-[#3b7ae8]" : "bg-white/5"
                            }`}
                    >
                        <Text
                            className={`text-[11px] font-semibold ${active ? "text-white" : "text-[#bfd5f8]"
                                }`}
                        >
                            {tab}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}