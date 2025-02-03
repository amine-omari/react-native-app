import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "../constants";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreeHeaderBtn icon={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreeHeaderBtn icon={icons.profile} dimension="100%" />
          ),
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
