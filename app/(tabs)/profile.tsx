import CountCard from "@/components/profile/CountCard";
import Profile from "@/components/profile/profile";
import InfoRow from "@/components/shared/InfoRow";
import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#091d3e]">
      <View className="flex-1 bg-[#0a1630] px-4 pb-6 pt-4">
        <SecondaryScreenHeader title="My Profile" rightIcon="settings-outline" />
        <Profile />

        <View className="mt-5 rounded-[20px] border border-white/10 bg-[#f5f8ff] p-4">
          <InfoRow icon="mail-outline" label="Email" value="huda@example.com" />
          <InfoRow icon="call-outline" label="Phone" value="+971 56 283 4212" />
          <InfoRow icon="location-outline" label="Location" value="Dubai, UAE" />
        </View>

        <View className="mt-5 flex-row items-stretch justify-between gap-3">
          <CountCard icon="calendar-outline" label="Sessions" value="12" />
          <CountCard icon="bookmark-outline" label="Saved" value="05" />
          <CountCard icon="medal-outline" label="Certificates" value="03" />
        </View>

      </View>
    </SafeAreaView>
  );
}