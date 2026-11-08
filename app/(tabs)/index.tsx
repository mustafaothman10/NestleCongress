import GreetingUser from "@/components/home_page/GreetingUser";
import QuickAccessItem from "@/components/home_page/QuickAccessItem";
import Session from "@/components/shared/Session";
import Button from "@/components/ui/Button";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const overviewStats = [
  { label: "Sessions", value: "12", tone: "bg-[#7cd5a8]/15", icon: "calendar" },
  { label: "Speakers", value: "08", tone: "bg-[#8db7ff]/15", icon: "people" },
  { label: "Polls", value: "04", tone: "bg-[#f7cb7d]/15", icon: "bar-chart" },
  { label: "Q&A", value: "23", tone: "bg-[#f7a7d6]/15", icon: "chatbubble" },
] as const;

const quickAccessItems = [
  { label: "Agenda", icon: "calendar-outline", color: "#dfeeff", href: "/agenda" },
  { label: "Speakers", icon: "people-outline", color: "#dfeeff", href: "/speakers" },
  { label: "Name Tag", icon: "id-card-outline", color: "#dfeeff", href: "/tag" },
  { label: "Venue", icon: "location-outline", color: "#dfeeff", href: "/venue" },
  { label: "Voting", icon: "bar-chart-outline", color: "#dfeeff", href: "/voting" },
  { label: "Ask Q&A", icon: "help-circle-outline", color: "#dfeeff", href: "/ask" },
  { label: "Resources", icon: "document-text-outline", color: "#dfeeff", href: "/resources" },
  { label: "Exhibitors", icon: "briefcase-outline", color: "#dfeeff", href: "/exhibitors" },
] as const;

const upcomingSessions = [
  {
    id: 1,
    title: "Nutrition & Health",
    time: "09:30 AM",
    speaker: "Dr. Amina Reza",
    accent: "#7cd5a8",
  },
  {
    id: 2,
    title: "Precision Medicine",
    time: "11:00 AM",
    speaker: "Dr. Ethan Cole",
    accent: "#8db7ff",
  },
] as const;

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#091d3e]">
      <View className="flex-1 items-center justify-center bg-[#091d3e]">
        <View className="h-full w-full max-w-[430px] overflow-hidden rounded-[32px] bg-[#091d3e]">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 18,
              paddingTop: 10,
              paddingBottom: 28,
            }}
          >
            <View className="mt-1 flex-row items-center justify-between">
              <Text className="text-[11px] font-bold tracking-[0.8px] text-[#dbe9ff] opacity-90">
                NESTLÉ MEDICAL CONGRESS
              </Text>

              <Pressable className="h-[30px] w-[30px] items-center justify-center rounded-full bg-white/10">
                <Ionicons name="notifications-outline" size={22} color="#eaf4ff" />
              </Pressable>
            </View>
            <GreetingUser name="Dr. Testing" />

            <View className="mt-[18px] flex-row items-center rounded-[18px] border border-white/10 bg-white/8 px-3 py-3">
              <Ionicons name="search-outline" size={18} color="#b7d3f5" />
              <TextInput
                placeholder="Search sessions, speakers, topics..."
                placeholderTextColor="#b7d3f5"
                className="ml-2 mr-2 flex-1 text-[14px] text-[#edf6ff]"
              />
              <Feather name="sliders" size={18} color="#b7d3f5" />
            </View>

            <Pressable className="relative mt-5 overflow-hidden rounded-[22px] bg-[#163a63]/80 px-4 pb-[18px] pt-4">
              <View className="self-start border border-[#e0c83d] px-2 py-1 rounded-full">
                <Text className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#e0c83d] opacity-90">
                  Featured Event
                </Text>
              </View>
              <Text className="mt-2 max-w-[230px] text-[26px] font-bold leading-[30px] text-[#f4f9ff]">
                The Next Era of{"\n"}Nutrition & Health
              </Text>

              <Text className="mt-2 text-[12px] text-[#dfeeff] opacity-80">
                May 22 - 23, 2026 · Dubai, UAE
              </Text>

              <View className="absolute bottom-4 right-4 h-[54px] w-[54px] items-center justify-center rounded-full bg-[#d8f7dd]/20">
                <Ionicons name="leaf-outline" size={20} color="#d8f7dd" />
              </View>
            </Pressable>

            <View className="mt-6 rounded-[22px] border border-white/10 bg-[#102a52]/80 p-4">
              <View className="mb-3 flex-row items-center justify-between">
                <Text className="text-[15px] font-bold text-[#f4f9ff]">
                  Overview
                </Text>
                <Text className="text-[11px] font-semibold text-[#b0c9f1]">
                  Today
                </Text>
              </View>

              <View className="flex-row flex-wrap justify-between">
                {overviewStats.map((item) => (
                  <View
                    key={item.label}
                    className={`mb-3 w-[48%] rounded-[16px] border border-white/5 p-3 ${item.tone}`}
                  >
                    <View className="mb-2 flex-row items-center justify-between">
                      <Ionicons
                        name={item.icon as any}
                        size={16}
                        color="#edf6ff"
                      />
                      <Text className="text-[10px] font-semibold text-[#dbe9ff]">
                        {item.label}
                      </Text>
                    </View>

                    <Text className="text-[24px] font-bold text-[#f4f9ff]">
                      {item.value}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            <View className="mt-6 mb-3 flex-row items-center justify-between">
              <Text className="text-[18px] font-bold text-[#f3f9ff]">
                Quick Access
              </Text>
              <Button
                label="View All"
                variant="text"
                onPress={() => router.push("/(quick_access)" as any)} />
            </View>

            <View className="flex-row flex-wrap justify-between">
              {quickAccessItems.map((item) => (
                <QuickAccessItem key={item.label} item={item} width={24} onPress={() => router.push(item.href as any)} />
              ))}
            </View>

            <View className="mt-2 mb-3 flex-row items-center justify-between">
              <Text className="text-[18px] font-bold text-[#f3f9ff]">
                Upcoming Sessions
              </Text>
              <Button
                label="View All"
                variant="text"
              />
            </View>

            <View className="space-y-3">
              {upcomingSessions.map((session) => (
                <Session key={session.id} session={session} />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}