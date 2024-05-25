import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./popularjobs.style";
import { COLORS } from "@/constants";

const Popularjobs = () => {
  const isLoading = false;
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
