import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";

import { Controller, Control } from "react-hook-form";

interface CustomInputProps {
  rules?: Record<string, any>;
  control: Control;
  name: string;
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

const { width } = Dimensions.get("window");
const CustomInput: React.FC<CustomInputProps> = ({
  rules = {},
  control,
  name,
  placeholder,
  secureTextEntry,
  label,
}) => {
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
          <>
            <View style={{ marginBottom: 10, width: width * 0.94 }}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 6 }}
              >
                {label}
              </Text>
              <TextInput
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={{
                  backgroundColor: "#efef",
                  paddingVertical: 10,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  fontSize: 18,
                  paddingHorizontal: 16,
                  borderColor: error ? "rgb(220, 38, 38)" : "#efef",
                }}
              />

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
          </>
        )}
      />
    </>
  );
};

export default CustomInput;
