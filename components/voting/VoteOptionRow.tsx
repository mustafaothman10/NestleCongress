import { Pressable, Text, View } from "react-native";

type PollOption = {
    id: string;
    label: string;
    percentage: number;
    votes: number;
};

function votingBar(value: number, color: string) {
    return {
        width: `${value}%`,
        height: "100%",
        backgroundColor: color,
        borderRadius: 999,
    };
}

export default function VoteOptionRow({
    option,
    selected,
    onPress,
}: {
    option: PollOption;
    selected: boolean;
    onPress: () => void;
}) {
    const barColor = selected ? "#f1b740" : "#7ea8ff";

    return (
        <Pressable
            onPress={onPress}
            className={`mb-3 rounded-[16px] border px-3 py-3 ${selected
                ? "border-[#f0b94d] bg-[#fff6df]"
                : "border-[#dfe8f9] bg-[#f7f9ff]"
                }`}
        >
            <View className="mb-2 flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <View
                        className={`mr-2 h-4 w-4 rounded-full border ${selected
                            ? "border-[#d19a22] bg-[#d19a22]"
                            : "border-[#8ea4c9] bg-white"
                            }`}
                    />
                    <Text
                        className={`text-[14px] font-semibold ${selected ? "text-[#10264e]" : "text-[#1a2e5f]"
                            }`}
                    >
                        {option.label}
                    </Text>
                </View>

                <Text className="text-[12px] font-bold text-[#1c355d]">
                    {option.percentage}%
                </Text>
            </View>

            <View className="mt-2 h-2.5 overflow-hidden rounded-full bg-[#e7edf8]">
                <View style={votingBar(option.percentage, barColor)} />
            </View>

            <Text className="mt-2 text-[11px] text-[#5f7697]">
                {option.votes} votes
            </Text>
        </Pressable>
    );
}

