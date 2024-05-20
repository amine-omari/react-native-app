import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
