import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DBBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DBMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DBRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(() => {
    // Hide the splash screen when fonts are loaded
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack />;
};

export default Layout;
