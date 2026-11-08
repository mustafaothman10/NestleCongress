import InfoRow from "@/components/shared/InfoRow";
import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import Qrcode from "@/components/tag/Qrcode";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function NameTagScreen() {
    return (
        <SafeAreaView className="flex-1 bg-[#091d3e]">
            <View className="flex-1 bg-[#0a1630] px-4 pb-6 pt-4">

                <SecondaryScreenHeader title="My Name Tag" rightIcon="qr-code-outline" />

                <View className="rounded-[24px] border border-white/10 bg-[#f4f8ff] p-4">
                    <Text className="text-center text-[15px] font-bold tracking-[1.5px] text-[#13305d]">
                        NESTLÉ MEDICAL
                    </Text>
                    <Text className="text-center text-[13px] font-semibold tracking-[1.2px] text-[#13305d]">
                        CONGRESS 2026
                    </Text>

                    <View className="mt-4 items-center">
                        <View className="h-24 w-24 items-center justify-center rounded-full border-[4px] border-[#dfe9f8] bg-[#f0f4ff]">
                            <Text className="text-[32px] font-bold text-[#112a56]">HL</Text>
                        </View>
                    </View>

                    <Text className="mt-4 text-center text-[22px] font-bold text-[#10264e]">
                        Huda Latheef
                    </Text>

                    <View className="mt-1 flex-row items-center justify-center">
                        <Text className="text-center text-[12px] text-[#5b6d8f]">
                            Flutter Developer · Attendee
                        </Text>
                        <Ionicons
                            name="checkmark-circle"
                            size={14}
                            color="#4ea5ff"
                            style={{ marginLeft: 6 }}
                        />
                    </View>

                    <View className="mt-5">
                        <InfoRow
                            icon="id-card-outline"
                            label="Badge ID"
                            value="NMC-2026-001"
                        />
                        <InfoRow
                            icon="location-outline"
                            label="Location"
                            value="Dubai, UAE"
                        />
                        <InfoRow
                            icon="calendar-outline"
                            label="Congress Date"
                            value="22 - 23 May 2026"
                        />
                    </View>

                    <View className="mt-3 items-center">
                        <Qrcode />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}