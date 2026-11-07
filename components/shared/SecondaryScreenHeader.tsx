import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

type IconName = keyof typeof Ionicons.glyphMap;

export interface SecondaryScreenHeaderProps {
  title: string;
  rightIcon?: IconName;
  onRightIconPress?: () => void;
  onBackPress?: () => void;
  showBackButton?: boolean;
  rightIconColor?: string;
  rightIconSize?: number;
}

export default function SecondaryScreenHeader({
  title,
  rightIcon = "grid-outline",
  onRightIconPress,
  onBackPress,
  showBackButton = true,
  rightIconColor = "#ffffff",
  rightIconSize = 18,
}: SecondaryScreenHeaderProps) {
  const handleBackPress = onBackPress ?? (() => router.back());

  return (
    <View className="mb-4 flex-row items-center justify-between">
      {showBackButton ? (
        <Pressable onPress={handleBackPress} accessibilityRole="button" hitSlop={10}>
          <Ionicons name="chevron-back" size={24} color="#f7fbff" />
        </Pressable>
      ) : (
        <View className="w-6" />
      )}

      <Text className="flex-1 ml-5 text-[24px] font-bold text-white">
        {title}
      </Text>

      <Pressable
        onPress={onRightIconPress}
        accessibilityRole="button"
        hitSlop={10}
        className="h-9 w-9 items-center justify-center rounded-xl bg-white/10"
      >
        <Ionicons name={rightIcon} size={rightIconSize} color={rightIconColor} />
      </Pressable>
    </View>
  );
}