import { Pressable, Text, View } from "react-native";

type ResourceType = "All" | "PDF" | "Slides" | "Videos" | "Save";

const resourceTabs: ResourceType[] = ["All", "PDF", "Slides", "Videos", "Save"];

export default

    function ResourceTabs({
        activeTab,
        onChange,
    }: {
        activeTab: ResourceType;
        onChange: (tab: ResourceType) => void;
    }) {
    return (
        <View className="mb-4 flex-row flex-wrap">
            {resourceTabs.map((tab) => {
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