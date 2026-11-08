import DaySelector from "@/components/agenda/DaySelector";
import SessionFilter from "@/components/agenda/SessionFilter";
import { toSessionCategory } from "@/components/lib/formatters";
import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import Session from "@/components/shared/Session";
import ShowCard from "@/components/shared/ShowCard";
import { UiSession } from "@/components/types";
import { listSessionsWithSpeaker } from "@/services/sessions/sessions.service";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SessionCategory = "All" | "Keynote" | "Nutrition" | "Research";


export default function AgendaScreen() {
    const [sessions, setSessions] = useState<UiSession[]>([]);
    const [selectedDay, setSelectedDay] = useState("day1");
    const [selectedCategory, setSelectedCategory] = useState<SessionCategory>("All");

    useEffect(() => {
        let alive = true;

        const load = async () => {
            try {
                const rows = await listSessionsWithSpeaker();

                const mapped: UiSession[] = rows.map((item) => ({
                    id: item.id,
                    time: item.time,
                    title: item.title,
                    speaker: item.speaker ?? "TBA",
                    category: toSessionCategory(item.type),
                }));

                if (alive) {
                    setSessions(mapped);
                }
            } catch (error) {
                console.error("Failed to load sessions:", error);
            }
        };

        void load();

        return () => {
            alive = false;
        };
    }, []);

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