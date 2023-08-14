import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../../types";
import { StatusBar } from "expo-status-bar";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "Signup">;
};

const Verify: React.FC<Props> = ({ navigation }) => {
  const { width } = Dimensions.get("window");

  const [otpCode, setOTPCode] = useState<string>("");

  const maximumCodeLength = 6;

  const boxArray = new Array(maximumCodeLength).fill(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Verify Account",
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      // headerLeft: () => (
      //   <Pressable
      //     onPress={() => navigation.goBack()}
      //     style={{ marginLeft: 15 }}
      //   >
      //     <Ionicons name="arrow-back-circle-outline" size={24} color="gray" />
      //   </Pressable>
      // ),
    });
  }, []);

  const Boxes = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // width: width * 0.95,
          paddingHorizontal: 10,
        }}
      >
        {boxArray.map((_, index) => (
          <View
            style={{
              width: (width * 0.85) / maximumCodeLength,
              height: (width * 0.85) / maximumCodeLength,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              marginHorizontal: 2,
              borderColor:
                index === otpCode.length ? "rgb(220, 38, 38)" : "#eee",
              backgroundColor: index === otpCode.length ? "pink" : "#eee",
            }}
            key={index}
          >
            <Text style={{ fontSize: 32 }}>{otpCode[index] || ""}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="dark" />
      <SafeAreaView
        style={{
          marginLeft: width * 0.025,
          marginRight: width * 0.025,
          marginTop: 15,
        }}
      >
        <Text style={{ fontSize: 20, color: "#374151" }}>
          We've sent a code to:
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",

            marginBottom: 6,
          }}
        >
          johnathan2346@gmail.com
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#374151",
            marginBottom: 6,
          }}
        >
          Please enter the 6 digit code to verify your account.
        </Text>
      </SafeAreaView>
      <View style={{ marginTop: 24 }}>
        <TextInput
          placeholder="PIN"
          style={{
            backgroundColor: "#f3f4f6",
            paddingVertical: 16,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#f3f4f6",
            fontSize: 24,
            paddingLeft: 16,
            width: "100%",
            position: "absolute",
            top: 0,
            opacity: 0,
            zIndex: 50,
          }}
          value={otpCode}
          onChangeText={setOTPCode}
          maxLength={maximumCodeLength}
          keyboardType="numeric"
          autoFocus
          onSubmitEditing={() => {
            if (otpCode.length === maximumCodeLength) {
              navigation.navigate("Login");
            }
          }}
        />
        <Boxes />
      </View>
    </View>
  );
};

export default Verify;
