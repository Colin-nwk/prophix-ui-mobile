import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../../types";
import { StatusBar } from "expo-status-bar";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "MyActivity">;
};

const MyActivity: React.FC<Props> = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingHorizontal: 5 }}>
      <StatusBar style="dark" />
      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
          paddingVertical: 15,
          paddingHorizontal: 10,
        }}
        activeOpacity={0.75}
        onPress={() => navigation.navigate("JobsPosted")}
      >
        <Text style={{ fontSize: 18 }}>My Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
          paddingVertical: 15,
          paddingHorizontal: 10,
        }}
        activeOpacity={0.75}
        onPress={() => navigation.navigate("JobsPosted")}
      >
        <Text style={{ fontSize: 18 }}>My Requests Sent</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
          paddingVertical: 15,
          paddingHorizontal: 10,
        }}
        activeOpacity={0.75}
        onPress={() => navigation.navigate("JobsPosted")}
      >
        <Text style={{ fontSize: 18 }}>My Ongoing Jobs</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
          paddingVertical: 15,
          paddingHorizontal: 10,
        }}
        activeOpacity={0.75}
        onPress={() => navigation.navigate("JobsPosted")}
      >
        <Text style={{ fontSize: 18 }}>My Completed Jobs</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#eee",
          paddingVertical: 15,
          paddingHorizontal: 10,
        }}
        activeOpacity={0.75}
        onPress={() => navigation.navigate("JobsPosted")}
      >
        <Text style={{ fontSize: 18 }}>My Canceled Jobs</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyActivity;
