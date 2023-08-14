import {
  View,
  Text,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../../types";
import { Ionicons } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "AnOffer">;
};

const AnOffer: React.FC<Props> = ({ navigation }) => {
  const [hired, setHired] = useState<boolean>(false);

  const showAlert = () =>
    Alert.alert(
      "Confirmation",
      "By clicking 'Confirm', you agree to hire Joe for the task.",
      [
        {
          text: "Cancel",
          onPress: () => console.warn("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => setHired(true),
          style: "default",
        },
      ]
    );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 20,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: 80, height: 80, borderRadius: 40 }}>
              <Image
                source={require("../../../assets/images/tony.png")}
                style={{ width: 80, height: 80, borderRadius: 40 }}
              />
            </View>
            <View
              style={{
                marginLeft: 10,
                justifyContent: "center",
                alignItems: "flex-start",
                flex: 1,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    // color: "#374151",
                    marginRight: 8,
                  }}
                  numberOfLines={1}
                >
                  Joe Armstrong
                </Text>
                <Ionicons name="ios-shield-checkmark" size={24} color="green" />
              </View>
              <View style={{ width: "80%" }}>
                <Text
                  style={{ fontSize: 12, color: "#6B7280" }}
                  numberOfLines={3}
                >
                  Plumbing Services, Drain Cleaning, Fixture Ins...
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: hired ? "#D1D5DB" : "rgb(220, 38, 38)",
                paddingHorizontal: 15,
                paddingVertical: 10,
                width: 120,
                borderRadius: 5,
                alignItems: "center",
              }}
              activeOpacity={0.75}
              onPress={showAlert}
              disabled={hired}
            >
              <Text style={{ color: "white", fontSize: 16 }}>Hire</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                paddingHorizontal: 15,
                paddingVertical: 10,
                width: 120,
                borderRadius: 5,
                alignItems: "center",
              }}
              activeOpacity={0.75}
              onPress={() => navigation.navigate("Profile")}
            >
              <Text style={{ color: "white", fontSize: 16 }}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Divider style={{ width: "100%" }} />
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#374151",
              marginBottom: 12,
            }}
          >
            Proposal
          </Text>
          <Text style={{ fontSize: 16, color: "#374151" }}>
            I specialize in plumbing services and can help you with fixing your
            leaky faucet. With my expertise and attention to detail, I will
            ensure that the issue is resolved effectively and efficiently.
          </Text>
        </View>
        <Divider style={{ width: "100%" }} />
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#374151",
              marginBottom: 12,
            }}
          >
            Offer
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#374151",
              marginBottom: 8,
            }}
          >
            Services Included:
          </Text>
          <Text style={{ fontSize: 16, color: "#374151", marginBottom: 16 }}>
            I specialize in plumbing services and can help you with fixing your
            leaky faucet. With my expertise and attention to detail, I will
            ensure that the issue is resolved effectively and efficiently.
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#374151",
              marginBottom: 8,
            }}
          >
            Availability:
          </Text>
          <Text
            style={{ fontSize: 16, color: "#374151", marginBottom: 16 }}
            numberOfLines={3}
          >
            Available on weekdays from 8 AM to 6 PM.
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#374151",
              marginBottom: 8,
            }}
          >
            Flat Fee: NGN 5,000
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#374151",
              marginBottom: 8,
            }}
          >
            Estimated Time: 1 hour
          </Text>
        </View>
        <Divider style={{ width: "100%" }} />
      </ScrollView>
    </View>
  );
};

export default AnOffer;
