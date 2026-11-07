import CategoryTabs from "@/components/shared/CategoryTabs";
import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import ShowCard from "@/components/shared/ShowCard";
import FeaturedSpeaker from "@/components/speakers/FeaturedSpeaker";
import Speaker from "@/components/speakers/Speaker";
import SearchField from "@/components/ui/SearchField";
import { useMemo, useState } from "react";
import {
    ScrollView,
    Text,
    View
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

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



const speakers: Speaker[] = [
    {
        id: "1",
        name: "Dr. Sarah Johnson",
        role: "Pediatric Nutrition Specialist",
        location: "United Kingdom",
        category: "Nutrition",
        initials: "SJ",
        accent: "#d9f3ff",
        isFeatured: true,
        topic: "Future of Pediatric Nutrition",
    },
    {
        id: "2",
        name: "Dr. Hassan Ali",
        role: "Clinical Research Director",
        location: "UAE",
        category: "Research",
        initials: "HA",
        accent: "#dfe9ff",
        topic: "Welcome & Introduction",
    },
    {
        id: "3",
        name: "Dr. Amed Khalid",
        role: "Global Health Consultant",
        location: "Canada",
        category: "Pediatric",
        initials: "AK",
        accent: "#dff6ea",
        topic: "Family Nutrition Strategy",
    },
    {
        id: "4",
        name: "Dr. Maya Rahman",
        role: "Pediatric Dietitian",
        location: "Singapore",
        category: "Nutrition",
        initials: "MR",
        accent: "#fbeec8",
        topic: "Nutrition for Growth",
    },
];


export default function SpeakersScreen() {
    const [activeTab, setActiveTab] = useState<SpeakerCategory>("All");

    const filteredSpeakers = useMemo(() => {
        if (activeTab === "All") return speakers;
        return speakers.filter((speaker) => speaker.category === activeTab);
    }, [activeTab]);

    const featuredSpeaker = speakers.find((speaker) => speaker.isFeatured) ?? speakers[0];

    return (
        <SafeAreaView className="flex-1 bg-[#091d3e]">
            <View className="flex-1 bg-[#0a1630] px-4 pb-6 pt-4">
                <SecondaryScreenHeader title="Speakers" rightIcon="star-outline" />

                <View className="mb-5 rounded-[26px] border border-white/10 bg-[#1b2f59]/80 p-4">
                    <Text className="text-[24px] font-bold text-white">
                        Global Medical Experts
                    </Text>
                    <Text className="mt-2 text-[12px] text-[#cfe1ff]">
                        Meet speakers from nutrition, research and healthcare
                    </Text>
                </View>
                <ShowCard title="Global Medical Experts" description=" Meet speakers from nutrition, research and healthcare"
                iconName="people-outline" iconColor="white" iconCoverColor="[#3c7ae7]" />

                <SearchField />
                <CategoryTabs activeTab={activeTab} onChange={setActiveTab} />

                <ScrollView showsVerticalScrollIndicator={false}>
                    {featuredSpeaker && (
                        <FeaturedSpeaker speaker={featuredSpeaker} />
                    )}

                    {filteredSpeakers
                        .filter((speaker) => speaker.id !== featuredSpeaker?.id)
                        .map((speaker) => (
                            <Speaker key={speaker.id} speaker={speaker} />
                        ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}