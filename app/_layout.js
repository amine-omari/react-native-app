import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontLoaded] = useFonts({
    DBBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DBMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DBRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  return <Stack />;
};

export default Layout;
