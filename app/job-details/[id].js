import { View, Text } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router/build/hooks";

const JobDetails = () => {
  const params = useSearchParams();
  return (
    <View>
      <Text>JobDetails</Text>
    </View>
  );
};

export default JobDetails;
