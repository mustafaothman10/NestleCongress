import QuickAccessItem from "@/components/home_page/QuickAccessItem";
import QuickAccessTabs from "@/components/quick_access/QuickAccessTabs";
import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import ShowCard from "@/components/shared/ShowCard";
import { QuickAccessItemData, QuickAccessTab } from "@/components/types";
import SearchField from "@/components/ui/SearchField";
import React from "react";
import {
    ScrollView,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const quickAccessItems: QuickAccessItemData[] = [
    {
        id: "agenda",
        label: "Agenda",
        icon: "calendar-outline",
        color: "#7dd3fc",
        meta: "Event",
        category: "Event",
    },
    {
        id: "speakers",
        label: "Speakers",
        icon: "people-outline",
        color: "#7dd3fc",
        meta: "Interactive",
        category: "Interactive",
    },
    {
        id: "name-tag",
        label: "Name Tag",
        icon: "document-text-outline",
        color: "#7dd3fc",
        meta: "Tools",
        category: "Tools",
    },
    {
        id: "venue",
        label: "Venue",
        icon: "location-outline",
        color: "#7dd3fc",
        meta: "Event",
        category: "Event",
    },
    {
        id: "schedule",
        label: "Schedule",
        icon: "time-outline",
        color: "#7dd3fc",
        meta: "Interactive",
        category: "Interactive",
    },
    {
        id: "directory",
        label: "Directory",
        icon: "book-outline",
        color: "#7dd3fc",
        meta: "Tools",
        category: "Tools",
    },
];



export default function QuickAccessScreen() {
    const [activeTab, setActiveTab] = React.useState<QuickAccessTab>("All");

    const filteredItems =
        activeTab === "All"
            ? quickAccessItems
            : quickAccessItems.filter((item) => item.category === activeTab);

    return (
        <SafeAreaView className="flex-1 bg-[#091d3e]">
            <View className="flex-1 bg-[#0a1630] px-4 pb-6 pt-10">
                <SecondaryScreenHeader title="Quick Access" />

                <ShowCard title=" Explore Congress Tools" description="Everything you need for the full event experience"
                    iconName="sparkles-sharp" iconColor="white" iconCoverColor="[#3c7ae7]" />

                <SearchField />
                <QuickAccessTabs activeTab={activeTab} onChange={setActiveTab} />

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    className="flex-1"
                    contentContainerStyle={{
                        paddingHorizontal: 18,
                        paddingTop: 10,
                        paddingBottom: 28,
                    }}
                >  <View className="flex-row flex-wrap justify-between">

                        {filteredItems.map((item) => (
                            <QuickAccessItem key={item.id} item={item} width={24} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}