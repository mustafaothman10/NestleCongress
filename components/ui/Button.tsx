import { Pressable, PressableProps, Text, View } from "react-native";

export interface ButtonProps extends PressableProps {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "text";
}

export default function Button({
  label,
  onPress,
  disabled = false,
  loading = false,
  fullWidth = false,
  variant = "primary",
  accessibilityLabel,
  ...props
}: ButtonProps) {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isText = variant === "text";

  return (
    <Pressable
      onPress={disabled || loading ? undefined : onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      className={`
        ${fullWidth ? "w-full" : ""}
        ${isPrimary ? "rounded-full bg-[#e0c83d] px-4 py-3" : ""}
        ${isSecondary ? "rounded-full border border-[#e0c83d] bg-transparent px-4 py-3" : ""}
        ${isText ? "rounded-none bg-transparent px-0 py-0" : ""}
        ${disabled || loading ? "opacity-60" : ""}
      `}
      style={({ pressed }) => ({
        opacity: pressed && !(disabled || loading) ? 0.85 : 1,
        transform: [{ scale: pressed && !(disabled || loading) ? 0.98 : 1 }],
      })}
      {...props}
    >
      <View className="items-center justify-center">
        <Text
          className={`
            text-center
            ${isText ? "text-[12px] font-semibold text-[#b0c9f1]" : ""}
            ${isPrimary ? "text-[15px] font-bold text-[#091d3e]" : ""}
            ${isSecondary ? "text-[15px] font-bold text-[#e0c83d]" : ""}
          `}
        >
          {loading ? "Loading..." : label}
        </Text>
      </View>
    </Pressable>
  );
}