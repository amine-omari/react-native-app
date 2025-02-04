import { View, Text } from "react-native";
import React from "react";
import { useRouter, useSearchParams } from "expo-router";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  return (
    <View>
      <Text>JobDetails</Text>
    </View>
  );
};

export default JobDetails;
