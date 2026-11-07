
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900 px-6">
      <View className=" items-center justify-center rounded-4xl bgyello-600 p-3">
        <Text className="text-2xl font-bold text-white-600">
          Nestle Medical Congress
        </Text>
      </View>
      <Text className="mt-2 text-[20px] text-gray-500">
        NESTLE
      </Text>
      <Text className="mt-2 text-[20px] text-gray-500">
        CONGRESS
      </Text>
    </View>
  );
}
