
import { Pressable, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900 px-6">
      <View className="w-full rounded-2xl bg-white p-6">
        <Text className="text-2xl font-bold text-blue-600">
          NativeWind is Working!
        </Text>

        <Text className="mt-2 text-base text-gray-500">
          Testing Tailwind CSS in React Native.
        </Text>

        <Pressable className="mt-5 rounded-xl bg-blue-600 p-4">
          <Text className="text-center font-bold text-white">
            Test Button
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
