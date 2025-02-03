import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES } from "../constants";
import { Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

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
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />

          <Popularjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
