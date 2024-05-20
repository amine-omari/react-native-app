import { COLORS } from "@/constants";
import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text } from "react-native";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
