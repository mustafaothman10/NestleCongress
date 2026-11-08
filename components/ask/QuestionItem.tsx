import { Pressable, Text, View } from "react-native";

type QuestionItem = {
    id: string;
    category: "Nutrition" | "Research" | "General" | "CI";
    title: string;
    author: string;
    replies: number;
    status: "Answered" | "Popular" | "Recent";
    isHighlighted?: boolean;
};

export default function QuestionItem({
    item,
}: {
    item: QuestionItem;
}) {
    return (
        <View
            className={`mb-3 rounded-[18px] border p-3 ${item.isHighlighted
                ? "border-[#dfe8f9] bg-[#f8fbff]"
                : "border-[#e3eaf8] bg-[#f6f9ff]"
                }`}
        >
            <View className="mb-2 flex-row items-center">
                <View className="mr-2 h-2.5 w-2.5 rounded-full bg-[#3b7ae8]" />
                <Text className="text-[11px] font-bold uppercase tracking-[1px] text-[#5f7aa6]">
                    {item.category}
                </Text>
            </View>

            <Text className="text-[14px] font-bold text-[#10264e]">
                {item.title}
            </Text>

            <View className="mt-3 flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <Text className="text-[11px] font-semibold text-[#5d7497]">
                        {item.author}
                    </Text>
                </View>

                <Pressable className="flex-row items-center">
                    <Text className="text-[11px] font-semibold text-[#4b6ea8]">
                        Reply
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}