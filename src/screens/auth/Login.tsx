import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../../types";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../context/AuthContext";

import { useForm } from "react-hook-form";
import CustomInput from "../../components/inputs/CustoInput";
import PrimaryButton from "../../components/PrimaryButton";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "Login">;
};

const Login: React.FC<Props> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { width } = Dimensions.get("window");
  const { handleLogin } = useAuth();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />

      <View
        style={{ justifyContent: "center", gap: 16, marginHorizontal: "3%" }}
      >
        <SafeAreaView style={{ justifyContent: "flex-start", marginBottom: 8 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome !</Text>
          <Text style={{ fontSize: 18, opacity: 0.7 }}>
            Log In to your account
          </Text>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: 16 }}>
            <CustomInput
              name="email"
              label="Email"
              placeholder="Enter Email"
              control={control}
              rules={{
                required: "Email is required",
              }}
            />
            <CustomInput
              name="password"
              label="Password"
              placeholder="Enter your password"
              control={control}
              rules={{
                required: "Password is required",
              }}
              secureTextEntry={true}
            />

            <View style={{ marginTop: 24 }}>
              <PrimaryButton
                label="Log In"
                isCallable={handleSubmit(handleLogin)}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              // marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 24 }}>or</Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                alignSelf: "center",
                paddingVertical: 10,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderColor: "rgba(0,0,0,0.25)",
                borderWidth: 1,
                width: "94%",
              }}
              activeOpacity={0.75}
              onPress={handleSubmit(handleLogin)}
            >
              <Image
                source={require("../../../assets/google-icon.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ opacity: 0.8, fontSize: 20, marginLeft: 10 }}>
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 12 }}>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={{ fontSize: 18, opacity: 0.8 }}>
                Don't have an account{" "}
                <Text style={{ textDecorationLine: "underline" }}>Signup</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
