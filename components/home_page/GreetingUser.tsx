import { Text, View } from "react-native";

export default function GreetingUser({ name }: { name: string }) {
    return (
        <View className="mt-[18px]">
            <Text className="text-[28px] font-bold leading-[33px] tracking-[-0.7px] text-white">
                Welcome Back,{"\n"}
                {name} <Text className="text-[26px]">👋</Text>
            </Text>
        </View>
    );
}