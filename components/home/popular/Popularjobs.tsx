import React from "react";
import { View, Text } from "react-native";

import styles from "./popularjobs.style";

const Popularjobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
      </View>
    </View>
  );
};

export default Popularjobs;
