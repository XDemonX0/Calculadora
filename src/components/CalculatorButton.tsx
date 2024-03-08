import React from "react";
import { Pressable, Text } from "react-native";
import { colors } from "../config/theme/appTheme";
import { styles } from "../config/theme/appTheme";
import { buttonProps } from "../presentation/interfaces/IProps";

export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    doubleSize = false,
    blackText = false,
    onPress,
  }: buttonProps) => {
    return (
      <Pressable
        onPress={() => onPress()}
        style={({pressed}) => ({
          ...styles.button,
          backgroundColor: color,
          width: (doubleSize) ? 180 : 80,
          opacity: (pressed) ? 0.8 : 1,
        })}
      >
        <Text style={{
          ...styles.buttonText,
          color: (blackText) ? 'black' : 'white'
        }}>{ label }</Text>
      </Pressable>
     );
  };
  