import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./screenheader.style";

type TScreenHeaderBtn = {
  iconUrl: string;
  dimension: string;
  handlePress?: any;
};

const ScreenHeaderBtn = ({
  iconUrl,
  dimension,
  handlePress,
}: TScreenHeaderBtn) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        src={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
