import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Amine</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
