import { Pressable, Text, View } from "react-native";

type DaySelectorProps = {
    selectedDay: string;
    onSelect: (dayId: string) => void;
};

type DayOption = {
    id: string;
    label: string;
    date: string;
};

const dayOptions: DayOption[] = [
    { id: "day1", label: "Day 1", date: "May 22" },
    { id: "day2", label: "Day 2", date: "May 23" },
];

export default function DaySelector({ selectedDay, onSelect }: DaySelectorProps) {
    return (
        <View className="mb-5 flex-row rounded-[22px] bg-[#1d2d55]/80 p-2">
            {dayOptions.map((day) => {
                const active = day.id === selectedDay;
                return (
                    <Pressable
                        key={day.id}
                        onPress={() => onSelect(day.id)}
                        className={`flex-1 items-center rounded-[16px] px-4 py-3 ${active ? "bg-[#f0d15d]" : "bg-transparent"
                            }`}
                    >
                        <Text
                            className={`text-[14px] font-bold ${active ? "text-[#10264e]" : "text-[#dfeaff]"
                                }`}
                        >
                            {day.label}
                        </Text>

                        <Text
                            className={`mt-1 text-[11px] ${active ? "text-[#10264e]" : "text-[#a5badf]"
                                }`}
                        >
                            {day.date}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}
