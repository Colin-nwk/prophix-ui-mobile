import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RouteListProps } from "../../types/index";
import React, { useEffect, useState } from "react";
import OnBoard from "../screens/onboarding/OnBoard";
import Signup from "../screens/auth/Signup";
import Login from "../screens/auth/Login";
import Verify from "../screens/auth/Verify";

const AuthStack = () => {
  const [firstTimer, setFirstTimer] = useState<boolean | null>(null);

  useEffect(() => {
    checkBoardedBefore();
    AsyncStorage.clear();
  }, [firstTimer]);

  const checkBoardedBefore = async () => {
    let boarded = await AsyncStorage.getItem("onboard");

    if (boarded === "1") {
      setFirstTimer(false);
    } else {
      setFirstTimer(true);
    }
  };

  const Auth = createStackNavigator<RouteListProps>();

  // Render the appropriate stack based on the firstTime value
  return (
    <Auth.Navigator initialRouteName="Onboard">
      {/* <Auth.Navigator initialRouteName={firstTimer ? "Onboard" : "Login"}> */}
      <Auth.Screen
        name="Onboard"
        component={OnBoard}
        options={{ headerShown: false }}
      />

      {/* Common screens for both cases */}
      <Auth.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: "" }}
      />
      <Auth.Screen name="Signup" component={Signup} />
      <Auth.Screen
        name="Verify"
        component={Verify}
        // options={{ headerShown: false }}
        options={{ headerTitle: "Verify Your Account" }}
      />

      {/* Conditional screen */}
      {/* {firstTimer ? (
        <Auth.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      ) : (
        <Auth.Screen name="Login" component={Login} options={{}} />
      )} */}
    </Auth.Navigator>
  );
};

export default AuthStack;
