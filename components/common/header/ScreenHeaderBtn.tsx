import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./screenheader.style";

type TScreenHeaderBtn = {
  iconUrl: any;
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
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
