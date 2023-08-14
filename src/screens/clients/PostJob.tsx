import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/inputs/CustoInput";
import CustomTextarea from "../../components/inputs/CustomTextarea";
import CustomSelect from "../../components/inputs/CustomSelect";
import PrimaryButton from "../../components/PrimaryButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteListProps } from "../../../types";

import { SafeAreaView } from "react-native-safe-area-context";
import { CheckBox, TabView } from "@rneui/themed";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  navigation: StackNavigationProp<RouteListProps, "PostJob">;
};

const PostJob: React.FC<Props> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { width, height } = Dimensions.get("window");
  const [index, setIndex] = useState(0);
  const [ischecked, setIschecked] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handlePostJob = (data: any) => {
    setIsSuccess(!isSuccess);
    setTimeout(() => {
      setIsSuccess(!isSuccess);
    }, 3000);
    console.warn(data);
  };

  const goNextSlide = () => {
    const nextSlideIndex = index + 1;
    if (nextSlideIndex <= 2) {
      setIndex(nextSlideIndex);
    }
  };

  const goPreviousSlide = () => {
    const previousSlideIndex = index - 1;
    if (previousSlideIndex >= 0) {
      setIndex(previousSlideIndex);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {isSuccess && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#D1D5DB",
            backgroundColor: "#ECFDF5",
            padding: 10,
            margin: 10,
            borderRadius: 4,
          }}
        >
          <FontAwesome name="check-circle" size={24} color="green" />
          <Text style={{ fontSize: 16 }}>Job posted successfully</Text>
          <EvilIcons
            name="close"
            size={24}
            color="black"
            onPress={() => setIsSuccess(!isSuccess)}
          />
        </View>
      )}

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ width: width * 0.95, marginTop: 10 }}>
              <Text style={{ fontSize: 20, color: "#202430" }}>
                Publish your job listing free of charge!
              </Text>

              <View style={{ marginTop: 5 }}>
                <CustomSelect
                  name="service"
                  label="What service do you need?"
                  placeholder="Select a service"
                  control={control}
                  rules={{
                    required: "service category is required",
                  }}
                />
                <CustomTextarea
                  name="description"
                  label="Describe the service in details?"
                  placeholder="describe the service"
                  control={control}
                  rules={{
                    required: "description is required",
                    minLength: {
                      value: 6,
                      message: "description should be min of 6 characters",
                    },
                  }}
                />
                <CustomInput
                  name="skills"
                  label="Skills needed"
                  placeholder="enter skills needed exmaple: javascript, php, reactjs"
                  control={control}
                  rules={{
                    required: "skills is required",
                  }}
                />
                <CustomInput
                  name="requirements"
                  label="Add job requirments"
                  placeholder="enter requirements exmaple: 2years experience"
                  control={control}
                  rules={{
                    required: "requirement cannot be empty",
                  }}
                />
              </View>
            </View>
            <View style={{ marginBottom: 5, alignSelf: "center" }}>
              <PrimaryButton label="Next" isCallable={goNextSlide} />
            </View>
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ width: width * 0.95, marginTop: 10 }}>
              <Text
                style={{ fontSize: 20, color: "#202430" }}
                numberOfLines={1}
              >
                Provide additional details about the job
              </Text>

              <View style={{ marginTop: 5 }}>
                <CustomInput
                  name="budget"
                  label="What is your budget?"
                  placeholder="enter your budget for the job "
                  control={control}
                  rules={{
                    required: "budget is required",
                  }}
                />
                <CustomSelect
                  name="visibility"
                  label="visibility"
                  placeholder="how long do you ads to last"
                  control={control}
                  rules={{
                    required: "job visibility period",
                  }}
                />
                {/* <SelectedInput
                  name="visibility"
                  label="Job visibility period"
                  placeholder="how long do you ads to last"
                  control={control}
                  rules={{
                    required: "job visibility period",
                  }}
                /> */}
                <View style={{ flexDirection: "row" }}>
                  <CheckBox
                    checked={ischecked}
                    onPress={() => setIschecked(!ischecked)}
                    iconType="material-community"
                    checkedIcon="checkbox-outline"
                    uncheckedIcon={"checkbox-blank-outline"}
                    containerStyle={{
                      marginLeft: 0,
                      paddingLeft: 0,
                    }}
                    textStyle={{ fontSize: 40 }}
                  />
                  <TouchableOpacity
                    style={{ width: width * 0.95 }}
                    onPress={() => setIschecked(!ischecked)}
                  >
                    <Text
                      style={{ marginTop: 3, width: "80%" }}
                      numberOfLines={2}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non, corrupti inventore laborum facere sapiente est
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {ischecked && (
              <View style={{ marginBottom: 5, alignSelf: "center" }}>
                <PrimaryButton
                  label="Post Job"
                  isCallable={handleSubmit(handlePostJob)}
                />
              </View>
            )}
          </ScrollView>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default PostJob;
