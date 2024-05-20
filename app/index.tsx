import { COLORS } from "@/constants";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{ headerStyle: { backgroundColor: COLORS.lightWhite } }}
      />
    </SafeAreaView>
  );
};

export default Home;
