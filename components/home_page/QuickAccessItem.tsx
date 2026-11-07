import { Ionicons } from "@expo/vector-icons";
import { Pressable, PressableProps, Text } from "react-native";

type QuickAccessItemData = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
};

type QuickAccessItemProps = {
  item: QuickAccessItemData;
  onPress?: PressableProps["onPress"];
  disabled?: boolean;
  iconSize?: number;
  width?:number;
};

export default function QuickAccessItem({
  item,
  onPress,
  disabled = false,
  iconSize = 22,
  width=24
}: QuickAccessItemProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={item.label}
      hitSlop={8}
      style={({ pressed }) => ({
        opacity: pressed || disabled ? 0.7 : 1,
      })}
      
      className={`
        mb-4 w-[${width}%] items-center justify-center rounded-[18px]
        border border-white/10 bg-white/5 p-3
        ${disabled ? "opacity-40" : ""}
      `}
    >
      <Ionicons name={item.icon} size={iconSize} color={item.color} />
      <Text className="mt-1 text-[11px] font-semibold text-[#edf6ff]">
        {item.label}
      </Text>
    </Pressable>
  );
}