import { Text, View } from "react-native";
import VoteOptionRow from "./VoteOptionRow";

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

export default function VotesPanel({
    poll,
    selectedOptionId,
    onSelect,
}: {
    poll: Poll;
    selectedOptionId?: string;
    onSelect: (optionId: string) => void;
}) {
    return (
        <View className="rounded-[22px] border border-white/10 bg-[#f5f8ff] p-4">
            <View className="mb-3 flex-row items-center">
                <View className="mr-2 h-2.5 w-2.5 rounded-full bg-[#3a7ae8]" />
                <Text className="text-[11px] font-bold uppercase tracking-[1px] text-[#617ea5]">
                    Voted
                </Text>
                <Text className="ml-2 text-[11px] font-semibold text-[#617ea5]">
                    Audience Feedback
                </Text>
            </View>

            <Text className="text-[22px] font-bold text-[#10264e]">
                {poll.question}
            </Text>

            <Text className="mt-2 text-[12px] text-[#617ea5]">
                {poll.totalVotes} total votes
            </Text>

            <View className="mt-4">
                {poll.options.map((option) => (
                    <VoteOptionRow
                        key={option.id}
                        option={option}
                        selected={selectedOptionId === option.id}
                        onPress={() => onSelect(option.id)}
                    />
                ))}
            </View>
        </View>
    );
}
