import {
  View,
  Text,
  Pressable,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

import { EvilIcons } from "@expo/vector-icons";
import { RouteListProps } from "../../../types";
import { StatusBar } from "expo-status-bar";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "Home">;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     title: "",
  //     headerStyle: {
  //       backgroundColor: "#fff",
  //       borderBottomColor: "transparent",
  //       shadowColor: "transparent",
  //     },
  //     headerRight: () => (
  //       <TouchableOpacity
  //         onPress={() => console.warn("hello")}
  //         style={{ marginRight: 15 }}
  //       >
  //         <EvilIcons name="bell" size={30} color="black" />
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar style="dark" />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            overflow: "hidden",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#FFECEF",
              height: 80,
              borderRadius: 10,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: width * 0.45,
              padding: 16,
              borderWidth: 1,
              borderColor: "#FFECEF",
              opacity: 1,
            }}
            onPress={() => navigation.navigate("MyActivity")}
          >
            <Image
              source={require("../../../assets/images/work.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text
              style={{
                fontSize: 18,
                textTransform: "capitalize",
                marginTop: 6,
              }}
            >
              My job activity
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#DFF1FF",
              height: 80,
              borderRadius: 10,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: width * 0.45,
              padding: 16,
              borderWidth: 1,
              borderColor: "#DFF1FF",
              opacity: 1,
            }}
            onPress={() => navigation.navigate("Services")}
          >
            <Image
              source={require("../../../assets/images/search.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text
              style={{
                fontSize: 18,
                textTransform: "capitalize",
                marginTop: 6,
              }}
            >
              Find a service
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            overflow: "hidden",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#DFF1FF",
              height: 80,
              borderRadius: 10,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: width * 0.45,
              padding: 16,
              borderWidth: 1,
              borderColor: "#DFF1FF",
              opacity: 1,
            }}
            onPress={() => navigation.navigate("PostJob")}
          >
            <Image
              source={require("../../../assets/images/add.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text
              style={{
                fontSize: 18,
                textTransform: "capitalize",
                marginTop: 6,
              }}
            >
              Post a job
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#f3f4f6",
              height: 80,
              borderRadius: 10,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: width * 0.45,
              padding: 16,
              borderWidth: 1,
              borderColor: "#f3f4f6",
              opacity: 1,
            }}
          >
            <Image
              source={require("../../../assets/images/more.png")}
              style={{ width: 24, height: 24 }}
            />
            <Text
              style={{
                fontSize: 18,
                textTransform: "capitalize",
                marginTop: 6,
              }}
            >
              Add quick link
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;
