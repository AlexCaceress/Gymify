import { Stack } from "expo-router";
import { AppContext, useAppContext } from "./AppContext";
import { useContext } from "react";

export default function RootLayout() {

  const appContext = useAppContext();


  return (
    <AppContext.Provider value={appContext}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="routine" options={{ headerShown: false }} />
      </Stack>
    </AppContext.Provider>
  );
}
