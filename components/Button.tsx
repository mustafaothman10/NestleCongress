import { Pressable, PressableProps, Text, View } from "react-native";

export interface ButtonProps extends PressableProps {
    label: string;
    onPress?: () => void;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    variant?: "primary" | "secondary";
}

export default function Button({
    label,
    onPress,
    disabled = false,
    fullWidth = false,
    variant = "primary",
    accessibilityLabel,
    ...props
}: ButtonProps) {
    const isPrimary = variant === "primary";

    return (
        <Pressable
            onPress={disabled ? undefined : onPress}
            disabled={disabled}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel ?? label}
            className={`
        ${fullWidth ? "w-full" : ""}
        ${isPrimary ? "bg-[#e0c83d]" : "border border-[#e0c83d] bg-transparent"}
        rounded-full px-4 py-3
        ${disabled ? "opacity-60" : ""}
      `}
            style={({ pressed }) => ({
                opacity: pressed && !(disabled) ? 0.85 : 1,
                transform: [{ scale: pressed && !(disabled) ? 0.98 : 1 }],
            })}
            {...props}
        >
            <View className="items-center justify-center">
                <Text
                    className={`
            text-center font-bold text-[15px]
            ${isPrimary ? "text-[#091d3e]" : "text-[#e0c83d]"}
          `}
                >
                    {label}
                </Text>
            </View>
        </Pressable>
    );
}