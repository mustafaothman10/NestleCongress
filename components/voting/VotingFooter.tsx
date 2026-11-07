import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export default
    function VotingFooter({
        currentIndex,
        total,
        onPrevious,
        onNext,
        canGoNext,
    }: {
        currentIndex: number;
        total: number;
        onPrevious: () => void;
        onNext: () => void;
        canGoNext: boolean;
    }) {
    return (
        <View className="mt-5 flex-row items-center justify-between">
            <Pressable
                onPress={onPrevious}
                disabled={currentIndex === 0}
                className={`h-12 w-12 items-center justify-center rounded-full border ${currentIndex === 0
                    ? "border-[#9fb1d5] bg-[#edf2ff]"
                    : "border-[#dfe9f8] bg-white"
                    }`}
            >
                <Ionicons
                    name="chevron-back"
                    size={20}
                    color={currentIndex === 0 ? "#99aacc" : "#10264e"}
                />
            </Pressable>

            <Pressable
                onPress={onNext}
                disabled={!canGoNext}
                className={`mx-3 flex-1 items-center justify-center rounded-full py-3 ${canGoNext ? "bg-[#3a7ae8]" : "bg-[#a8bde9]"
                    }`}
            >
                <Text className="text-[16px] font-bold text-white">
                    {currentIndex === total - 1 ? "Finish" : "Next Poll"}
                </Text>
            </Pressable>

            <Pressable
                onPress={onNext}
                disabled={!canGoNext}
                className={`h-12 w-12 items-center justify-center rounded-full border ${canGoNext ? "border-[#dfe9f8] bg-white" : "border-[#dfe9f8] bg-[#edf2ff]"
                    }`}
            >
                <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={canGoNext ? "#10264e" : "#99aacc"}
                />
            </Pressable>
        </View>
    );
}
