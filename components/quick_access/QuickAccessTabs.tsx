import { Pressable, Text, View } from "react-native";

type QuickAccessTab = "All" | "Event" | "Interactive" | "Tools";


const tabs: QuickAccessTab[] = ["All", "Event", "Interactive", "Tools"];


export default function QuickAccessTabs({
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
