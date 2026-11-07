import { Pressable, PressableProps, Text, View } from "react-native";

export interface IUpcomingSession {
  id?: number;
  title?: string;
  speaker?: string;
  time?: string;
  accent?: string;
  status?: "upcoming" | "live" | "starting-soon";
  location?: string;
}

export interface IUpcomingSessionProps extends PressableProps {
  session: IUpcomingSession;
  onPress?: () => void;
  compact?: boolean;
  showLocation?: boolean;
}

export default function UpcomingSession({
  session,
  onPress,
  compact = false,
  showLocation = false,
  accessibilityLabel,
  ...props
}: IUpcomingSessionProps) {
  const statusLabel =
    session.status === "live"
      ? "Live"
      : session.status === "starting-soon"
        ? "Starting Soon"
        : "Upcoming";

  const accentColor =
    session.accent && session.accent.trim() !== "" ? session.accent : "#7dd3fc";

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={
        accessibilityLabel ??
        `${session.title} by ${session.speaker} at ${session.time}`
      }
      hitSlop={8}
      className={`mb-4 rounded-[18px] border border-white/10 bg-[#102a52]/80 ${compact ? "p-2.5" : "p-3"
        }`}
      style={({ pressed }) => ({
        opacity: pressed ? 0.85 : 1,
        transform: [{ scale: pressed ? 0.985 : 1 }],
      })}
      {...props}
    >
      <View className="mb-2 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View
            className="mr-2 h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <Text className="text-[11px] font-medium text-[#dbe9ff]">
            {session.time}
          </Text>
        </View>

        <Text className="text-[9px] font-semibold uppercase tracking-[1.1px] text-[#9bb9e8]">
          {statusLabel}
        </Text>
      </View>

      <Text
        className={`font-bold text-[#f4f9ff] ${compact ? "text-[14px]" : "text-[16px]"
          }`}
      >
        {session.title}
      </Text>

      <Text className="mt-1 text-[12px] text-[#bfd5f8]">
        {session.speaker}
      </Text>

      {showLocation && session.location ? (
        <Text className="mt-1 text-[11px] text-[#9bb9e8]">
          {session.location}
        </Text>
      ) : null}
    </Pressable>
  );
}