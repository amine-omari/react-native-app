import React from "react";
import { View, Text } from "react-native";

import styles from "./welcome.style";

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.userName}>Find you perfect job</Text>
      </View>
    </View>
  );
};

export default Welcome;
