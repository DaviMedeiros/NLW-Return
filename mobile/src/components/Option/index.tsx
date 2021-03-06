import React from "react";

import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageSourcePropType,
  Text,
} from "react-native";

import { styles } from "./styles";

interface OptionProps extends TouchableOpacityProps {
  title: string;
  image: ImageSourcePropType;
}

export function Option({ title, image, ...props }: OptionProps) {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Image 
        source={image} 
        style={styles.image} 
      />

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}