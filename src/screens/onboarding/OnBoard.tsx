import {
  View,
  Text,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OnBoardImage from "../../components/OnBoardImage";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../../types";
import { StatusBar } from "expo-status-bar";
import { TabView } from "@rneui/base";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "Onboard">;
};

const OnBoard: React.FC<Props> = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");

  const [indexSlide, setIndexSlide] = useState(0);

  const goNextSlide = () => {
    setIndexSlide(indexSlide + 1);
  };
  const isBoarded = () => {
    navigation.replace("Login");
    AsyncStorage.setItem("onboard", "1");
  };

  const slides = [
    {
      id: "1",
      title: "Welcome to Prophix 1",
    },
    {
      id: "2",
      title: "Welcome to Prophix 2",
    },
    {
      id: "3",
      title: "Welcome to Prophix 3",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="light" />
      <OnBoardImage />
      <View style={{ flex: 1, marginTop: 80 }}>
        <TabView
          value={indexSlide}
          onChange={setIndexSlide}
          animationType="spring"
        >
          <TabView.Item
            style={{
              width: "100%",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                columnGap: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{ fontSize: 24, fontWeight: "800", textAlign: "auto" }}
                numberOfLines={2}
              >
                Welcome to Prophix 1
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  paddingHorizontal: 4,
                  lineHeight: 26,
                  textAlign: "center",
                }}
                numberOfLines={3}
              >
                "Need help with your task? Let's connect you with skilled
                service providers in your area."
              </Text>
            </View>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                columnGap: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{ fontSize: 24, fontWeight: "800", textAlign: "auto" }}
                numberOfLines={2}
              >
                Welcome to Prophix 2
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  paddingHorizontal: 4,
                  lineHeight: 26,
                  textAlign: "center",
                }}
                numberOfLines={3}
              >
                "Need help with your task? Let's connect you with skilled
                service providers in your area."
              </Text>
            </View>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                columnGap: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{ fontSize: 24, fontWeight: "800", textAlign: "auto" }}
                numberOfLines={2}
              >
                Welcome to Prophix 3
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  paddingHorizontal: 4,
                  lineHeight: 26,
                  textAlign: "center",
                }}
                numberOfLines={3}
              >
                "Need help with your task? Let's connect you with skilled
                service providers in your area."
              </Text>
            </View>
          </TabView.Item>
        </TabView>

        {indexSlide <= 2 ? (
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              {slides.map((_, index) => (
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 100,
                    backgroundColor:
                      indexSlide === index ? "#F0363B" : "#DFF1FF",
                  }}
                  key={index}
                ></View>
              ))}
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "flex-end",
                marginRight: 4,
                marginBottom: 20,
              }}
            >
              {indexSlide < 2 ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: "#F0363B",
                    width: 170,
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                    borderWidth: 1,
                    borderColor: "#F0363B",
                    paddingVertical: 10,
                  }}
                  onPress={goNextSlide}
                  activeOpacity={0.75}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Next
                  </Text>
                  <Ionicons name="arrow-forward" size={24} color="white" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{
                    backgroundColor: "#F0363B",
                    width: 170,
                    borderRadius: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                    borderWidth: 1,
                    borderColor: "#F0363B",
                    paddingVertical: 10,
                  }}
                  activeOpacity={0.75}
                  onPress={isBoarded}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    Get Started
                  </Text>
                  <Ionicons name="arrow-forward" size={24} color="white" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default OnBoard;
