import { View, Text } from "react-native";
import React from "react";
import { useRouter, useSearchParams } from "expo-router";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  return (
    <View>
      <Text>JobDetails</Text>
    </View>
  );
};

export default JobDetails;
