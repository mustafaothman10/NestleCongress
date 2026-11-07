import DaySelector from "@/components/agenda/DaySelector";
import SessionFilter from "@/components/agenda/SessionFilter";
import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import Session from "@/components/shared/Session";
import ShowCard from "@/components/shared/ShowCard";
import { useState } from "react";
import {
    ScrollView,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


type SessionCategory = "All" | "Keynote" | "Nutrition" | "Research";

type SessionItem = {
    id: number;
    time: string;
    title: string;
    speaker: string;
    category: Exclude<SessionCategory, "All">;
    accent: string;
};

const sessions: SessionItem[] = [
    {
        id: 1,
        time: "08:30 AM",
        title: "Opening Ceremony",
        speaker: "Main Auditorium",
        category: "Keynote",
        accent: "#f2d87a",
    },
    {
        id: 2,
        time: "09:30 AM",
        title: "Welcome & Introduction",
        speaker: "Dr. Hassan Ali",
        category: "Keynote",
        accent: "#f2d87a",
    },
    {
        id: 3,
        time: "10:30 AM",
        title: "Future of Pediatric Nutrition",
        speaker: "Dr. Sarah Johnson",
        category: "Nutrition",
        accent: "#7dd3fc",
    },
];


export default function AgendaScreen() {
    const [selectedDay, setSelectedDay] = useState("day1");
    const [selectedCategory, setSelectedCategory] = useState<SessionCategory>("All");

    const filteredSessions =
        selectedCategory === "All"
            ? sessions
            : sessions.filter((item) => item.category === selectedCategory);

    return (
        <SafeAreaView className="flex-1 bg-[#0a1630]">
            <View className="flex-1 bg-[#0a1630] px-4 pb-6 pt-4">
                <SecondaryScreenHeader title="Congress Agenda" />

                <ShowCard title="Day 1 Schedule" description="Thursday, May 22, 2026"
                    iconName="calendar-outline" iconColor="white" iconCoverColor="[#f0d15d]" />

                <DaySelector selectedDay={selectedDay} onSelect={setSelectedDay} />

                <SessionFilter
                    selectedCategory={selectedCategory}
                    onSelect={setSelectedCategory}
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    {filteredSessions.map((session) => (
                        <Session key={session.id} session={session} />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}