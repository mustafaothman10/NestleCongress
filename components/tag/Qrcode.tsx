import { View } from "react-native";

export default function Qrcode() {
    return (
        <View className="mt-2 items-center justify-center rounded-[18px] border border-[#dfe9f8] bg-[#f5f8ff] p-4">
            <View className="flex-row flex-wrap justify-center" style={{ width: 120 }}>
                {Array.from({ length: 16 }).map((_, index) => (
                    <View
                        key={index}
                        style={{
                            width: 8,
                            height: 8,
                            margin: 2,
                            backgroundColor: index % 2 === 0 ? "#10264e" : "#ffffff",
                            borderRadius: 2,
                        }}
                    />
                ))}
            </View>
        </View>
    );
}
