import { View, Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Tab, TabView } from "@rneui/themed";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../../types";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "JobsPosted">;
};

const showAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

const JobPosted: React.FC<Props> = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "black",
          height: 3,
        }}
        variant="default"
        dense
      >
        <Tab.Item
          title="Open"
          titleStyle={{ fontSize: 18, paddingVertical: 8 }}
        />
        <Tab.Item
          title="Archived"
          // titleStyle={{ fontSize: 18 }}
          titleStyle={{ fontSize: 18, paddingVertical: 8 }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#D1D5DB",
                paddingHorizontal: 10,
                paddingVertical: 15,
                marginHorizontal: 15,
                marginTop: 10,
                borderRadius: 5,
              }}
              activeOpacity={0.75}
              onPress={() => navigation.navigate("Offers")}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, color: "#374151" }}>
                  Plumbing Services
                </Text>
                <Text style={{ fontSize: 14, color: "#3B82F6" }}>
                  Offers (5)
                </Text>
              </View>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>
                February 20, 2023
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#D1D5DB",
                paddingHorizontal: 10,
                paddingVertical: 15,
                marginHorizontal: 15,
                marginTop: 10,
                borderRadius: 5,
              }}
              activeOpacity={0.75}
              onPress={showAlert}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, color: "#374151" }}>
                  Cleaning Services
                </Text>
                <Text style={{ fontSize: 14, color: "#3B82F6" }}>
                  Offers (5)
                </Text>
              </View>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>
                February 20, 2023
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#D1D5DB",
                paddingHorizontal: 10,
                paddingVertical: 15,
                marginHorizontal: 15,
                marginTop: 10,
                borderRadius: 5,
              }}
              activeOpacity={0.75}
              // onPress={() => navigation.navigate("JobsPosted")}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, color: "#374151" }}>
                  Plumbing Services
                </Text>
              </View>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>
                February 20, 2023
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#D1D5DB",
                paddingHorizontal: 10,
                paddingVertical: 15,
                marginHorizontal: 15,
                marginTop: 10,
                borderRadius: 5,
              }}
              activeOpacity={0.75}
              // onPress={() => navigation.navigate("JobsPosted")}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, color: "#374151" }}>
                  Cleaning Services
                </Text>
              </View>
              <Text style={{ fontSize: 12, color: "#6B7280" }}>
                February 20, 2023
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default JobPosted;
