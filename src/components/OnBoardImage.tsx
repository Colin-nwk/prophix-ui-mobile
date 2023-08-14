import { View, Image, Dimensions } from "react-native";
import React from "react";

const OnBoardImage = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/boarding.png")}
          style={{
            width: width,
            height: height * 0.7,
            objectFit: "fill",
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          //     backgroundColor: "red",
        }}
      >
        <Image
          source={require("../../assets/logoWhite.png")}
          style={{ objectFit: "contain", position: "absolute", bottom: 40 }}
          //     className="h-fit w-fit object-contain z-20 absolute -top-28"
          // style={{ width: width }}
        />
      </View>
    </>
  );
};

export default OnBoardImage;
