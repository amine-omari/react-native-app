import React from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";

import styles from "./popularjobs.style";

const Popularjobs = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
      </View>
    </View>
  );
};

export default Popularjobs;
