import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "@rneui/themed";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { Controller, Control, FieldErrors } from "react-hook-form";

interface CustomRadioProps {
  rules?: Record<string, any>;
  control: Control;
  name: string;
  label: string;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  rules = {},
  control,
  name,
  label,
}) => {
  const { width } = Dimensions.get("window");
  const [ischecked, setIschecked] = useState(true);

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: -8 }}>
        {label}
      </Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <View style={{ flexDirection: "row" }}>
            <View>
              <CheckBox
                checked={ischecked}
                onPress={() => setIschecked(!ischecked)}
                disabled={false}
                iconType="material-community"
                checkedIcon="checkbox-marked-outline"
                uncheckedIcon="checkbox-blank-outline"
                containerStyle={{ marginLeft: 0, paddingLeft: 0 }}
                textStyle={{ fontSize: 40 }}
              />
            </View>
            <TouchableOpacity
              style={{ width: width * 0.95 }}
              onPress={() => setIschecked(!ischecked)}
            >
              <Text
                style={{
                  marginTop: 6,
                  width: "80%", // Adjust as needed
                  fontSize: 18,
                }}
                numberOfLines={2}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                corrupti inventore laborum facere sapiente est laboriosam illo
                iusto eius error veniam id voluptates in nostrum nihil adipisci
                architecto? Eaque, consequuntur.
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default CustomRadio;
