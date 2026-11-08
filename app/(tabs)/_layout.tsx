import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';

import { useColorScheme } from '@/components/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#dbeafe',
        tabBarStyle: {
          backgroundColor: '#091d3e',
          borderTopColor: '#091d3e',

        },
        tabBarLabelStyle: {
          fontWeight: '600',
          fontSize: 12,
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <SymbolView
                name={{
                  ios: 'house.fill',
                  android: 'home',
                  web: 'home',
                }}
                tintColor={color}
                size={28}
              />
            ),
          }}
        />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: 'chevron.left.forwardslash.chevron.right',
                android: 'person',
                web: 'person',
              }}
              tintColor={color}
              size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}
