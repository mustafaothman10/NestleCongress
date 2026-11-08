import ResourceRow from "@/components/resources/ResourceRow";
import ResourceTabs from "@/components/resources/ResourcesTabs";
import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import ShowCard from "@/components/shared/ShowCard";
import SearchField from "@/components/ui/SearchField";
import { useMemo, useState } from "react";
import {
    ScrollView,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


type ResourceType = "All" | "PDF" | "Slides" | "Videos" | "Save";

type ResourceItem = {
    id: string;
    title: string;
    description: string;
    size: string;
    type: Exclude<ResourceType, "All">;
    accent: string;
};


const resources: ResourceItem[] = [
    {
        id: "1",
        title: "Congress Scientific Program...",
        description: "Complete schedule and session details",
        size: "4.2 MB",
        type: "PDF",
        accent: "#ff6b6b",
    },
    {
        id: "2",
        title: "Pediatric Nutrition Guide...",
        description: "Clinical reference material",
        size: "2.8 MB",
        type: "PDF",
        accent: "#ff6b6b",
    },
    {
        id: "3",
        title: "Keynote Presentation Sli...",
        description: "The Next Era of Nutrition & Health",
        size: "6.6 MB",
        type: "Slides",
        accent: "#4d9ef7",
    },
    {
        id: "4",
        title: "Nutrition Webinar Summary",
        description: "Recording and key takeaways",
        size: "18.9 MB",
        type: "Videos",
        accent: "#7ac8b9",
    },
];




export default function ResourcesScreen() {
    const [activeTab, setActiveTab] = useState<ResourceType>("All");

    const filteredResources = useMemo(() => {
        if (activeTab === "All") return resources;
        return resources.filter((item) => item.type === activeTab);
    }, [activeTab]);

    return (
        <SafeAreaView className="flex-1 bg-[#091d3e]">
            <View className="flex-1 bg-[#0a1630] px-4 pb-6 pt-4">
                <SecondaryScreenHeader title="Resources" rightIcon="download-outline" />

                <ShowCard title="Congress Library" description="Access presentations, documents and media files"
                    iconColor="" iconName="library-outline" iconCoverColor="" />
                <SearchField />

                <ResourceTabs activeTab={activeTab} onChange={setActiveTab} />

                <ScrollView showsVerticalScrollIndicator={false}>
                    {filteredResources.map((item) => (
                        <ResourceRow key={item.id} item={item} />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}