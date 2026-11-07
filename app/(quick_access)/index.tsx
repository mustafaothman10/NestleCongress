import QuickAccessItem from "@/components/home_page/QuickAccessItem";
import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import ShowCard from "@/components/shared/ShowCard";
import SearchField from "@/components/ui/SearchField";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Pressable,
    ScrollView,
    Text,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type QuickAccessTab = "All" | "Event" | "Interactive" | "Tools";

type QuickAccessItemData = {
    id: string;
    label: string;
    icon: keyof typeof Ionicons.glyphMap;
    color: string;
    meta?: string;
    category: QuickAccessTab | "All";
};

const tabs: QuickAccessTab[] = ["All", "Event", "Interactive", "Tools"];

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



function QuickAccessTabs({
    activeTab,
    onChange,
}: {
    activeTab: QuickAccessTab;
    onChange: (tab: QuickAccessTab) => void;
}) {
    return (
        <View className="mb-4 flex-row">
            {tabs.map((tab) => {
                const active = activeTab === tab;
                return (
                    <Pressable
                        key={tab}
                        onPress={() => onChange(tab)}
                        className={`mr-2 rounded-full px-3 py-2 ${active ? "bg-[#3c7ae7]" : "bg-transparent"
                            }`}
                    >
                        <Text
                            className={`text-[11px] font-semibold ${active ? "text-white" : "text-[#b8d0f2]"
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
                    iconName="sparkles-sharp" iconColor="red-600" />

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
                            <QuickAccessItem key={item.id} item={item} width={48}/>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}