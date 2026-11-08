import { ThemeProvider as NavThemeProvider, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import '../global.css';

import { useColorScheme } from '@/lib/useColorScheme';
import { initDatabase } from '@/services/database/connection';
import { seedDatabaseIfEmpty } from '@/services/seed/seed';
import { NAV_THEME } from '@/theme';
import { useEffect } from 'react';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export default function RootLayout() {
  const { colorScheme, isDarkColorScheme } = useColorScheme();

  useEffect(() => {
    initDatabase()
      .then(() => seedDatabaseIfEmpty())
      .then(() => console.log('DB ready'))
      .catch((err) => console.error('DB init failed:', err));
  }, []);

  return (
    <>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`}
        style={isDarkColorScheme ? 'light' : 'dark'}
      />

      <NavThemeProvider value={NAV_THEME[colorScheme]}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(quick_access)" options={{ headerShown: false }} />
        </Stack>
      </NavThemeProvider>
    </>
  );
}