import { getSpeakerCategory } from "@/components/lib";
import CategoryTabs from "@/components/shared/CategoryTabs";
import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import ShowCard from "@/components/shared/ShowCard";
import FeaturedSpeaker from "@/components/speakers/FeaturedSpeaker";
import Speaker from "@/components/speakers/Speaker";
import { Category, SpeakerProfile } from "@/components/types";
import SearchField from "@/components/ui/SearchField";
import { listSpeakers } from "@/services/speakers";
import { useEffect, useMemo, useState } from "react";
import {
    ScrollView,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const accentPalette = [
    "#d9f3ff",
    "#dfe9ff",
    "#dff6ea",
    "#fbeec8",
];

function buildInitials(name: string): string {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? "")
        .join("");
}



export default function SpeakersScreen() {
    const [activeTab, setActiveTab] = useState<Category>("All");
    const [speakers, setSpeakers] = useState<SpeakerProfile[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isActive = true;

        const loadSpeakers = async () => {
            try {
                const rows = await listSpeakers();

                if (!isActive) return;

                const mapped: SpeakerProfile[] = rows.map((speaker, index) => ({
                    id: String(speaker.id),
                    name: speaker.name,
                    role: speaker.description || "Medical expert",
                    location: speaker.country || "TBA",
                    category: getSpeakerCategory(speaker.description),
                    initials: buildInitials(speaker.name),
                    accent: accentPalette[index % accentPalette.length],
                    topic: speaker.description || "Medical expert",
                }));

                setSpeakers(mapped);
            } catch (error) {
                console.error("Failed to load speakers:", error);
                if (isActive) {
                    setSpeakers([]);
                }
            } finally {
                if (isActive) {
                    setLoading(false);
                }
            }
        };

        void loadSpeakers();

        return () => {
            isActive = false;
        };
    }, []);

    const filteredSpeakers = useMemo(() => {
        if (activeTab === "All") return speakers;
        return speakers.filter((speaker) => speaker.category === activeTab);
    }, [activeTab, speakers]);

    const featuredSpeaker =
        speakers.find((speaker) => speaker.name.toLowerCase().includes("sarah")) ??
        speakers[0];

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

                <ShowCard
                    title="Global Medical Experts"
                    description="Meet speakers from nutrition, research and healthcare"
                    iconName="people-outline"
                    iconColor="white"
                    iconCoverColor="[#3c7ae7]"
                />

                <SearchField />
                <CategoryTabs activeTab={activeTab} onChange={setActiveTab} />

                {loading ? (
                    <Text className="mt-4 text-center text-[12px] text-[#bfd5f8]">
                        Loading speakers...
                    </Text>
                ) : (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {featuredSpeaker && <FeaturedSpeaker speaker={featuredSpeaker} />}

                        {filteredSpeakers
                            .filter((speaker) => speaker.id !== featuredSpeaker?.id)
                            .map((speaker) => (
                                <Speaker key={speaker.id} speaker={speaker} />
                            ))}
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    );
}