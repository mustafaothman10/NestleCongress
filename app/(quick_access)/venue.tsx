import SecondaryScreenHeader from "@/components/shared/SecondaryScreenHeader";
import ShowCard from "@/components/shared/ShowCard";
import FacilityPill from "@/components/venue/FacilityPill";
import Location from "@/components/venue/Location";
import MapPreview from "@/components/venue/MapPreview";
import { listVenues, type Venue } from "@/services/avenues/avenues.service";
import { useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VenueScreen() {
    const [venue, setVenue] = useState<Venue | null>(null);

    useEffect(() => {
        const loadVenue = async () => {
            const rows = await listVenues();
            setVenue(rows[0] ?? null);
        };

        void loadVenue();
    }, []);

    const availableFacilities = useMemo(
        () =>
            [
                { key: "wifi", icon: "wifi-outline" as const, label: "Free Wi‑Fi", active: Boolean(venue?.wifi) },
                { key: "parking", icon: "car-outline" as const, label: "Parking", active: Boolean(venue?.parking) },
                { key: "catering", icon: "restaurant-outline" as const, label: "Catering", active: Boolean(venue?.catering) },
                { key: "accessible", icon: "accessibility-outline" as const, label: "Accessible", active: Boolean(venue?.accessible) },
            ].filter((facility) => facility.active),
        [venue]
    );

    return (
        <SafeAreaView className="flex-1 bg-[#091d3e]">
            <View className="flex-1 bg-[#0a1630] px-4 pb-6 pt-4">
                <SecondaryScreenHeader title="Venue" rightIcon="location-outline" />

                <Location
                    title={venue?.name ?? ""}
                    dateFrom={venue?.dateFrom ?? ""}
                    dateTo={venue?.dateTo ?? ""}
                />

                <ShowCard
                    title="Venue Information"
                    description={venue?.name ?? "Dubai World Trade Centr"}
                    iconName="location-outline"
                    iconColor="white"
                    iconCoverColor="[#3c7ae7]"
                />
                <MapPreview />

                <View className="rounded-[22px] border border-white/10 bg-[#f3f6fb] p-4">
                    <Text className="mb-3 text-[19px] font-bold text-[#10264e]">
                        Venue Facilities
                    </Text>

                    {availableFacilities.length > 0 ? (
                        <View className="flex-row flex-wrap justify-between">
                            {availableFacilities.map((facility) => (
                                <FacilityPill
                                    key={facility.key}
                                    icon={facility.icon}
                                    label={facility.label}
                                />
                            ))}
                        </View>
                    ) : (
                        <Text className="text-[14px] text-[#516b8d]">
                            No venue facilities are currently listed for this location.
                        </Text>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}