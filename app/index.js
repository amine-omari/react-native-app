import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { COLORS } from "../constants";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Text></Text>
    </SafeAreaView>
  );
};

export default Home;
