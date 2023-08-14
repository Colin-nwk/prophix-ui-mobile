import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";

import { Controller, Control, FieldErrors } from "react-hook-form";

interface CustomInputProps {
  rules?: Record<string, any>;
  control: Control;
  name: string;
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

const { width } = Dimensions.get("window");
const CustomTextarea: React.FC<CustomInputProps> = ({
  rules = {},
  control,
  name,
  placeholder,
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
            <View style={{ marginBottom: 14, width: width * 0.94 }}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}
              >
                {label}
              </Text>
              <TextInput
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                placeholder={placeholder}
                style={{
                  backgroundColor: "#efef",
                  paddingVertical: 10,
                  borderRadius: 8,
                  alignItems: "flex-start",
                  borderWidth: 1,
                  fontSize: 18,
                  paddingHorizontal: 16,
                  justifyContent: "flex-start",
                  borderColor: error ? "rgb(220, 38, 38)" : "#efef",
                }}
                numberOfLines={3}
                multiline
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

export default CustomTextarea;
