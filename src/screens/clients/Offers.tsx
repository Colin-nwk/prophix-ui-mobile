import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../../types";
import { Ionicons } from "@expo/vector-icons";
import { Rating } from "@kolking/react-native-rating";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "Offers">;
};

const Offers: React.FC<Props> = ({ navigation }) => {
  const [ratingNumber, setRatingNuber] = useState<number>(5);

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
        <TouchableOpacity
          style={{
            borderColor: "#E5E7EB",
            borderWidth: 1,
            padding: 10,
            marginTop: 10,
            borderRadius: 5,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          activeOpacity={0.75}
          onPress={() => navigation.navigate("AnOffer")}
        >
          <View style={{ width: 80, height: 80, borderRadius: 40 }}>
            <Image
              source={require("../../../assets/images/tony.jpg")}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
          </View>
          <View
            style={{
              marginLeft: 10,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#374151",
                  marginRight: 8,
                }}
                numberOfLines={1}
              >
                Joe Armstrong
              </Text>
              <Ionicons name="ios-shield-checkmark" size={24} color="green" />
            </View>
            <Text style={{ fontSize: 12, color: "#6B7280" }}>
              Jobs completed (320)
            </Text>
            <Rating size={20} rating={ratingNumber} maxRating={5} disabled />
            <Text>Rated {ratingNumber} out of 5</Text>
            <View style={{ width: "80%" }}>
              <Text
                style={{ fontSize: 12, color: "#6B7280" }}
                numberOfLines={1}
              >
                Plumbing Services, Drain Cleaning, Fixture Ins...
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: "#E5E7EB",
            borderWidth: 1,
            padding: 10,
            marginTop: 10,
            borderRadius: 5,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          activeOpacity={0.75}
          onPress={() => navigation.navigate("AnOffer")}
        >
          <View style={{ width: 80, height: 80, borderRadius: 40 }}>
            <Image
              source={require("../../../assets/images/tony.png")}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
          </View>
          <View
            style={{
              marginLeft: 10,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#374151",
                  marginRight: 8,
                }}
                numberOfLines={1}
              >
                Steven Gilbert
              </Text>
              <Ionicons name="ios-shield-checkmark" size={24} color="green" />
            </View>
            <Text style={{ fontSize: 12, color: "#6B7280" }}>
              Jobs completed (120)
            </Text>
            <Rating size={20} rating={ratingNumber} maxRating={5} disabled />
            <Text>Rated {ratingNumber} out of 5</Text>
            <View style={{ width: "80%" }}>
              <Text
                style={{ fontSize: 12, color: "#6B7280" }}
                numberOfLines={1}
              >
                Plumbing Services, Drain Cleaning, Fixture Ins...
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Offers;
