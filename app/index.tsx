import { ScreenHeaderBtn } from "@/components";
import { COLORS, icons, images } from "@/constants";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
