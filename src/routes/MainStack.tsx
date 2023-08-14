import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RouteListProps } from "../../types";
import DrawerStack from "./DrawerStack";
import PostJob from "../screens/clients/PostJob";
import MyActivity from "../screens/general/MyActivity";
import Services from "../screens/clients/Services";
import JobPosted from "../screens/clients/JobPosted";
import Offers from "../screens/clients/Offers";
import AnOffer from "../screens/clients/AnOffer";

const MainStack = () => {
  const Stack = createStackNavigator<RouteListProps>();
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Drawer"
        component={DrawerStack}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PostJob"
        component={PostJob}
        options={{ headerTitle: "Post Job" }}
      />
      <Stack.Screen
        name="MyActivity"
        component={MyActivity}
        options={{ headerTitle: "My Job Activity" }}
      />
      <Stack.Screen
        name="JobsPosted"
        component={JobPosted}
        options={{ headerTitle: "Jobs Posted" }}
      />
      <Stack.Screen
        name="Offers"
        component={Offers}
        options={{ headerTitle: "Offers" }}
      />
      <Stack.Screen
        name="AnOffer"
        component={AnOffer}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="Services"
        component={Services}
        options={{ headerTitle: "Services" }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
