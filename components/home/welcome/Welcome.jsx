import React from "react";
import { View, Text } from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
};

export default Welcome;
