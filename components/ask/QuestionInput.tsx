import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type QuestionCategory = "General" | "Nutrition" | "Research" | "CI";

const questionCategories: QuestionCategory[] = [
    "General",
    "Nutrition",
    "Research",
    "CI",
];

export default function QuestionInput() {
    const [selectedCategory, setSelectedCategory] =
        useState<QuestionCategory>("General");

    return (
        <View className="mb-5 rounded-[22px] border border-white/10 bg-[#f7f9ff] p-4">
            <Text className="mb-3 text-[18px] font-bold text-[#10264e]">
                Write your question
            </Text>

            <View className="rounded-[16px] border border-[#dfe8f9] bg-white px-3 py-3">
                <TextInput
                    placeholder="Type your question for the speaker..."
                    placeholderTextColor="#8aa0c7"
                    className="text-[14px] text-[#10264e]"
                />
            </View>

            <View className="mt-4 flex-row flex-wrap">
                {questionCategories.map((category) => {
                    const active = category === selectedCategory;

                    return (
                        <Pressable
                            key={category}
                            onPress={() => setSelectedCategory(category)}
                            className={`mr-2 mb-2 rounded-full px-3 py-2 ${active ? "bg-[#3b7ae8]" : "bg-[#edf3ff]"
                                }`}
                        >
                            <Text
                                className={`text-[11px] font-semibold ${active ? "text-white" : "text-[#3f5f96]"
                                    }`}
                            >
                                {category}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>

            <Pressable className="mt-3 rounded-full bg-[#3b7ae8] px-4 py-3">
                <Text className="text-center text-[15px] font-bold text-white">
                    Submit Question
                </Text>
            </Pressable>
        </View>
    );
}
