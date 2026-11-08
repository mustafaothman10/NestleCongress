import QuestionInput from "@/components/ask/QuestionInput";
import QuestionItem from "@/components/ask/QuestionItem";
import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import ShowCard from "@/components/shared/ShowCard";
import { useMemo, useState } from "react";
import {
    Pressable,
    ScrollView,
    Text,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type QuestionTab = "Popular" | "Recent" | "Answered";

type QuestionItem = {
    id: string;
    category: "Nutrition" | "Research" | "General" | "CI";
    title: string;
    author: string;
    replies: number;
    status: "Answered" | "Popular" | "Recent";
    isHighlighted?: boolean;
};

const questionTabs: QuestionTab[] = ["Popular", "Recent", "Answered"];

const questions: QuestionItem[] = [
    {
        id: "1",
        category: "Nutrition",
        title:
            "How can pediatric nutrition plans be personalized for children with different growth patterns?",
        author: "Dr. Ahmed",
        replies: 24,
        status: "Popular",
        isHighlighted: true,
    },
    {
        id: "2",
        category: "Research",
        title:
            "What are the latest findings on micronutrient deficiency in adolescent care?",
        author: "Dr. Lina",
        replies: 17,
        status: "Recent",
    },
    {
        id: "3",
        category: "General",
        title: "How do you recommend integrating family-based nutrition habits into care plans?",
        author: "Dr. Nora",
        replies: 11,
        status: "Answered",
    },
];


function QuestionTabs({
    activeTab,
    onChange,
}: {
    activeTab: QuestionTab;
    onChange: (tab: QuestionTab) => void;
}) {
    return (
        <View className="mb-4 flex-row">
            {questionTabs.map((tab) => {
                const active = tab === activeTab;

                return (
                    <Pressable
                        key={tab}
                        onPress={() => onChange(tab)}
                        className={`mr-2 rounded-full px-3 py-2 ${active ? "bg-[#dfeaff]" : "bg-transparent"
                            }`}
                    >
                        <Text
                            className={`text-[11px] font-semibold ${active ? "text-[#11305d]" : "text-[#516d98]"
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


export default function AskScreen() {
    const [activeTab, setActiveTab] = useState<QuestionTab>("Popular");

    const filteredQuestions = useMemo(() => {
        if (activeTab === "Popular") {
            return questions.filter((q) => q.status === "Popular");
        }

        if (activeTab === "Recent") {
            return questions.filter((q) => q.status === "Recent");
        }

        return questions.filter((q) => q.status === "Answered");
    }, [activeTab]);

    return (
        <SafeAreaView className="flex-1 bg-[#091d3e]">
            <View className="flex-1 bg-[#0a1630] px-4 pb-6 pt-4">
                <SecondaryScreenHeader title="Ask Q&A" rightIcon="grid-outline" />
                <ShowCard title="Ask the Experts" description="Submit your questions and vote to discussions"
                    iconColor="white" iconCoverColor="[#3c7ae7]" iconName="help-circle-outline" />
                <QuestionInput />

                <QuestionTabs activeTab={activeTab} onChange={setActiveTab} />

                <ScrollView showsVerticalScrollIndicator={false}>
                    {filteredQuestions.map((question) => (
                        <QuestionItem key={question.id} item={question} />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}