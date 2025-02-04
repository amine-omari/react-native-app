import React from "react";
import { View, Text } from "react-native";

import styles from "./company.style";

const Company = (companyLogo, jobTitle, companyName, Location) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}></View>
    </View>
  );
};

export default Company;
