import QuickAccessItem from "@/components/home_page/QuickAccessItem";
import QuickAccessTabs from "@/components/quick_access/QuickAccessTabs";
import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import ShowCard from "@/components/shared/ShowCard";
import { QuickAccessTab } from "@/components/types";
import SearchField from "@/components/ui/SearchField";
import { router } from "expo-router";
import React from "react";
import {
    ScrollView,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const quickAccessItems = [
    { id: 1, label: "Agenda", icon: "calendar-outline", color: "#dfeeff", category: "Event", href: "/agenda" },
    { id: 2, label: "Speakers", icon: "people-outline", color: "#dfeeff", category: "Interactive", href: "/speakers" },
    { id: 3, label: "Name Tag", icon: "id-card-outline", color: "#dfeeff", category: "Tools", href: "/tag" },
    { id: 4, label: "Venue", icon: "location-outline", color: "#dfeeff", category: "Event", href: "/venue" },
    { id: 5, label: "Voting", icon: "bar-chart-outline", color: "#dfeeff", category: "Interactive", href: "/voting" },
    { id: 6, label: "Ask Q&A", icon: "help-circle-outline", color: "#dfeeff", category: "Interactive", href: "/ask" },
    { id: 7, label: "Resources", icon: "document-text-outline", color: "#dfeeff", category: "Tools", href: "/resources" },
    { id: 8, label: "Exhibitors", icon: "briefcase-outline", color: "#dfeeff", category: "Tools", href: "/exhibitors" },
] as const;


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
                            <QuickAccessItem key={item.id} item={item} width={24} onPress={() => router.push(item.href as any)} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}