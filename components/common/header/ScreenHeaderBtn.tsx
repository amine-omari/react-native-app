import React from "react";
import { Image, TouchableOpacity } from "react-native";

type TScreenHeaderBtn = {
  iconUrl: string;
  dimension: string;
  handlePress: any;
};

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: TScreenHeaderBtn) => {
  return (
    <TouchableOpacity>
      <Image src={iconUrl} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
