import { Stack } from "expo-router";
import { AppProvider } from "./AppContext";

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="routine" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>
  );
}
