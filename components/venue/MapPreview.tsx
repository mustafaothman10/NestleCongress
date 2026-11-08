import { View } from "react-native";

export default
    function MapPreview() {
    return (
        <View className="mb-5 overflow-hidden rounded-[22px] border border-white/10 bg-[#f3f6fb]">
            <View
                style={{
                    height: 170,
                    backgroundColor: "#edf3ff",
                    position: "relative",
                }}
            >
                <View
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "#edf3ff",
                        opacity: 1,
                    }}
                />

                <View
                    style={{
                        position: "absolute",
                        left: "28%",
                        top: "40%",
                        width: 14,
                        height: 14,
                        borderRadius: 999,
                        backgroundColor: "#f0c758",
                        borderWidth: 4,
                        borderColor: "#fff",
                        shadowColor: "#000",
                        shadowOpacity: 0.15,
                        shadowRadius: 8,
                        shadowOffset: { width: 0, height: 2 },
                    }}
                />
            </View>
        </View>
    );
}