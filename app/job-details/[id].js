import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useRouter, useSearchParams } from "expo-router";
import useFetch from "../../hook/useFetch";
import { COLORS } from "../../constants";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Text>JobDetails</Text>
    </SafeAreaView>
  );
};

export default JobDetails;
