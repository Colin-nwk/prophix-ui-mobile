import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RouteListProps } from "../../types";

import BottomStack from "./BottomStack";
// import Profile from "../screens/general/";
import MainStack from "./MainStack";

const DrawerStack = () => {
  const Drawer = createDrawerNavigator<RouteListProps>();
  return (
    <>
      {/* <Drawer.Navigator initialRouteName="Stack"> */}
      <Drawer.Navigator>
        <Drawer.Screen
          name="Bottom"
          component={BottomStack}
          options={{
            drawerLabel: "Home",
            headerTitle: "Home",
            headerShown: false,
          }}
          // options={{ headerShown: false, drawerLabel: "Home" }}
        />

        {/* <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        /> */}
        {/* <Drawer.Screen
          name="Stack"
          component={MainStack}
          options={{ headerShown: false }}
        /> */}
      </Drawer.Navigator>
    </>
  );
};

export default DrawerStack;
