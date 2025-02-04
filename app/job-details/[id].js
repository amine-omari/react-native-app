import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import useFetch from "../../hook/useFetch";
import { COLORS } from "../../constants";
import { useSearchParams } from "expo-router/build/hooks";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
        }}
      ></Stack.Screen>
    </SafeAreaView>
  );
};

export default JobDetails;
