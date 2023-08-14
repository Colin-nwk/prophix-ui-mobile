import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../../types";
import { Tab, TabView } from "@rneui/base";
import CustomInput from "../../components/inputs/CustoInput";
import { useForm } from "react-hook-form";
import PrimaryButton from "../../components/PrimaryButton";
import CustomSelect from "../../components/inputs/CustomSelect";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "Signup">;
};

const Signup: React.FC<Props> = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Sign up",
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      // headerLeft: () => (
      //   <Pressable
      //     onPress={() => navigation.goBack()}
      //     style={{ marginLeft: 15 }}
      //   >
      //     <Ionicons name="arrow-back-circle-outline" size={24} color="gray" />
      //   </Pressable>
      // ),
    });
  }, []);

  const handleRegister = (data: any) => {
    console.warn(data);
  };

  const {
    register: user,
    control: userControl,
    handleSubmit: handleUser,
    formState: { errors: errorUser },
  } = useForm();
  // { mode: "onBlur" }
  const {
    register: worker,
    control: controlWorker,
    handleSubmit: handleWorker,
    formState: { errors: errorsWorker },
  } = useForm();
  // { mode: "onBlur" }
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
          title="As User"
          titleStyle={{ fontSize: 18, paddingVertical: 8 }}
        />
        <Tab.Item
          title="As Worker"
          // titleStyle={{ fontSize: 18 }}
          titleStyle={{ fontSize: 18, paddingVertical: 8 }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width: "100%",
              marginHorizontal: "auto",
              paddingHorizontal: 10,
            }}
            key={1}
          >
            <CustomInput
              name="firstname"
              label="First Name"
              placeholder="Enter your First Name"
              control={userControl}
              rules={{
                required: "First Name is required",
              }}
            />
            <CustomInput
              name="lastname"
              label="Last Name"
              placeholder="Enter your Last Name"
              control={userControl}
              rules={{
                required: "Last Name is required",
              }}
            />
            <CustomInput
              name="phone"
              label="Phone No"
              placeholder="Enter your Phone Number"
              control={userControl}
              rules={{
                required: "Your Phone is required",
              }}
            />
            <CustomInput
              name="email"
              label="Email"
              placeholder="Enter Email"
              control={userControl}
              rules={{
                required: "Email is required",
              }}
            />
            <CustomInput
              name="password"
              label="Password"
              placeholder="Enter your password"
              control={userControl}
              rules={{
                required: "Password is required",
              }}
              secureTextEntry={true}
            />
            <View style={{ marginTop: 10, marginBottom: 5 }}>
              <PrimaryButton
                label="Submit"
                isCallable={handleUser(handleRegister)}
              />
            </View>
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            key={2}
            contentContainerStyle={{
              width: "100%",
              marginHorizontal: "auto",
              paddingHorizontal: 10,
            }}
          >
            <CustomInput
              name="firstname"
              label="First Name"
              placeholder="Enter your First Name"
              control={controlWorker}
              rules={{
                required: "First Name is required",
              }}
            />
            <CustomInput
              name="lastname"
              label="Last Name"
              placeholder="Enter your Last Name"
              control={controlWorker}
              rules={{
                required: "Last Name is required",
              }}
            />
            <CustomInput
              name="phone"
              label="Phone No"
              placeholder="Enter your Phone Number"
              control={controlWorker}
              rules={{
                required: "Your Phone is required",
              }}
            />
            <CustomSelect
              name="service"
              label="What service do you render"
              placeholder="Select a service"
              control={controlWorker}
              rules={{
                required: "service category is required",
              }}
            />
            <CustomSelect
              name="state"
              label="State your operate in"
              placeholder="Select a State"
              control={controlWorker}
              rules={{
                required: "Location is required",
              }}
            />

            <CustomInput
              name="email"
              label="Email"
              placeholder="Enter Email"
              control={controlWorker}
              rules={{
                required: "Email is required",
              }}
            />
            <CustomInput
              name="password"
              label="Password"
              placeholder="Enter your password"
              control={controlWorker}
              rules={{
                required: "Password is required",
              }}
              secureTextEntry={true}
            />

            <View style={{ marginTop: 10, marginBottom: 5 }}>
              <PrimaryButton
                label="Submit"
                isCallable={handleWorker(handleRegister)}
              />
            </View>
          </ScrollView>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default Signup;
