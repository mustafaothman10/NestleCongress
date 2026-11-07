import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import Address from "@/components/venue/Address";
import FacilityPill from "@/components/venue/FacilityPill";
import Location from "@/components/venue/Location";
import MapPreview from "@/components/venue/MapPreview";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";





export default function VenueScreen() {
    return (
        <SafeAreaView className="flex-1 bg-[#091d3e]">
            <View className="flex-1 bg-[#0a1630] px-4 pb-6 pt-4">
                <SecondaryScreenHeader title="Venue" rightIcon="location-outline" />

                <Location />
                <Address />
                <MapPreview />

                <View className="rounded-[22px] border border-white/10 bg-[#f3f6fb] p-4">
                    <Text className="mb-3 text-[19px] font-bold text-[#10264e]">
                        Venue Facilities
                    </Text>

                    <View className="flex-row flex-wrap justify-between">
                        <FacilityPill icon="wifi-outline" label="Free Wi‑Fi" />
                        <FacilityPill icon="car-outline" label="Parking" />
                        <FacilityPill icon="restaurant-outline" label="Catering" />
                        <FacilityPill icon="accessibility-outline" label="Accessible" />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}