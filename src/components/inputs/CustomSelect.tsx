import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";

import { Picker } from "@react-native-picker/picker";
interface CustomInputProps {
  rules?: Record<string, any>;
  control: Control;
  name: string;
  label: string;
  placeholder: string;
}

const CustomSelect: React.FC<CustomInputProps> = ({
  rules = {},
  control,
  name,
  placeholder,
  label,
}) => {
  const { width } = Dimensions.get("window");

  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({
          field: { value, onBlur, onChange },
          fieldState: { error },
        }) => (
          <View style={{ alignSelf: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{label}</Text>

            <Picker
              selectedValue={value}
              onValueChange={onChange}
              // mode="dropdown"
              style={{
                borderRadius: 6,
                width: width * 0.95,
                borderColor: error ? "rgb(220, 38, 38)" : "rgb(243, 244, 246)",
                backgroundColor: "rgb(243, 244, 246)",
              }}
            >
              <Picker.Item label={placeholder} value="" enabled={false} />
              <Picker.Item
                label="Java"
                value="java"
                style={{ fontSize: 18 }}
                color="blue"
              />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="php" value="php" />
            </Picker>
            {error && (
              <Text
                style={{
                  color: "rgb(220, 38, 38)",
                  fontSize: 12,
                  textAlign: "left",
                }}
              >
                {error.message || "error"}
              </Text>
            )}
          </View>
        )}
      />
    </>
  );
};

export default CustomSelect;
