import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

interface PrimaryButtonProps {
  label: string;
  isCallable?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, isCallable }) => {
  const { width } = Dimensions.get("window");
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "rgb(220, 38, 38)", // Replace with your primary color
          paddingVertical: 10,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          borderColor: "rgb(220, 38, 38)", // Replace with your primary color
          borderWidth: 1,
          width: width * 0.94,
          alignSelf: "center",
        }}
        activeOpacity={0.75}
        onPress={isCallable}
      >
        <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
