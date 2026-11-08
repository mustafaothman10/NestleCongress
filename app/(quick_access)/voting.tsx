import ShowCard from "@/components/shared/ShowCard";
import VotesPanel from "@/components/voting/VotesPanel";
import VotingFooter from "@/components/voting/VotingFooter";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PollOption = {
    id: string;
    label: string;
    percentage: number;
    votes: number;
};

type Poll = {
    id: string;
    question: string;
    totalVotes: number;
    options: PollOption[];
};

const initialPolls: Poll[] = [
    {
        id: "session-feedback",
        question: "How would you rate the current session?",
        totalVotes: 101,
        options: [
            { id: "excellent", label: "Excellent", percentage: 54, votes: 55 },
            { id: "very-good", label: "Very Good", percentage: 31, votes: 31 },
            { id: "good", label: "Good", percentage: 10, votes: 10 },
            { id: "average", label: "Average", percentage: 5, votes: 5 },
        ],
    },
    {
        id: "speaker-quality",
        question: "How valuable was the speaker content?",
        totalVotes: 87,
        options: [
            { id: "very-useful", label: "Very Useful", percentage: 42, votes: 36 },
            { id: "useful", label: "Useful", percentage: 33, votes: 29 },
            { id: "neutral", label: "Neutral", percentage: 16, votes: 14 },
            { id: "limited", label: "Limited", percentage: 9, votes: 8 },
        ],
    },
    {
        id: "overall-experience",
        question: "How would you rate the event experience overall?",
        totalVotes: 94,
        options: [
            { id: "amazing", label: "Amazing", percentage: 46, votes: 43 },
            { id: "great", label: "Great", percentage: 29, votes: 27 },
            { id: "good", label: "Good", percentage: 18, votes: 17 },
            { id: "okay", label: "Okay", percentage: 7, votes: 7 },
        ],
    },
];



function VotingHeader() {
    return (
        <View className="mb-5 flex-row items-center justify-between">
            <Pressable
                onPress={() => router.back()}
                className="h-9 w-9 items-center justify-center"
            >
                <Ionicons name="chevron-back" size={24} color="#edf6ff" />
            </Pressable>

            <Text className="flex-1 text-center text-[28px] font-bold text-white">
                Live Voting
            </Text>

            <Pressable className="h-9 w-9 items-center justify-center rounded-xl bg-[#1f3d73]">
                <Ionicons name="notifications-outline" size={18} color="#edf6ff" />
            </Pressable>
        </View>
    );
}


export default function VotingScreen() {
    const [polls, setPolls] = useState(initialPolls);
    const [currentPollIndex, setCurrentPollIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

    const currentPoll = polls[currentPollIndex];
    const selectedOptionId = selectedOptions[currentPoll.id];

    const canGoNext = Boolean(selectedOptionId);

    const updateSelectedOption = (optionId: string) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [currentPoll.id]: optionId,
        }));
    };

    const goToPreviousPoll = () => {
        setCurrentPollIndex((prev) => Math.max(0, prev - 1));
    };

    const goToNextPoll = () => {
        if (!canGoNext) return;

        if (currentPollIndex < polls.length - 1) {
            setCurrentPollIndex((prev) => prev + 1);
        } else {
            router.back();
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-[#091d3e]">
            <View className="flex-1 bg-[#0a1630] px-4 pb-6 pt-4">
                <VotingHeader />
                <ShowCard title="Audience Interaction" description="Swipe polls, choose answers, and submit your vote"
                    iconName="bar-chart-outline" iconColor="white" iconCoverColor="[#f0d15d]" />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <VotesPanel
                        poll={currentPoll}
                        selectedOptionId={selectedOptionId}
                        onSelect={updateSelectedOption}
                    />
                </ScrollView>

                <VotingFooter
                    currentIndex={currentPollIndex}
                    total={polls.length}
                    onPrevious={goToPreviousPoll}
                    onNext={goToNextPoll}
                    canGoNext={canGoNext}
                />
            </View>
        </SafeAreaView>
    );
}