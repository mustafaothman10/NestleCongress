import type MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type MaterialIcons from '@expo/vector-icons/MaterialIcons';
import type { SymbolViewProps } from 'expo-symbols';
import type { StyleProp, TextStyle } from 'react-native';

type MaterialCommunityIconsProps = React.ComponentProps<typeof MaterialCommunityIcons>;
type MaterialIconsProps = React.ComponentProps<typeof MaterialIcons>;

type Style = StyleProp<TextStyle> &
  SymbolViewProps['style'] &
  MaterialIconsProps['style'] &
  MaterialCommunityIconsProps['style'];

type IconName = string | SymbolViewProps['name'];

type IconProps = {
  name?: IconName;
  size?: number;
  color?: string;
  style?: Style;
  className?: string;
  materialCommunityIcon?: Partial<MaterialCommunityIconsProps>;
  materialIcon?: Partial<MaterialIconsProps>;
  sfSymbol?: Partial<SymbolViewProps>;
};

export type { IconProps };

