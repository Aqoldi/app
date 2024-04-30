import { Image, Text, TouchableOpacity, View } from "react-native";
import Profile from "./Profile";
import icon from "../assets/script/icon";
import { useState } from "react";

export default function Comment({ image, name, comment, time, noLikes }) {
  const [like, setLike] = useState(false);
  return (
    <View className="mb-3">
      <View className="flex-row items-center">
        <Profile image={image} big="h-[40px] w-[40px]" />
        <View className="flex ml-1">
          <View className="flex-row items-center relative bottom-0.5">
            <Text className="text-white text-[16px] font-bold">{name}</Text>
            <Image
              source={icon.verified}
              className="w-4 h-4 ml-1.5 relative top-[1px]"
            />
          </View>
          <Text className="text-gray-400 text-[13px]">{time}</Text>
        </View>
      </View>
      <View className="ml-[15vw]">
        <Text className="text-gray-500 text-[14px] font-medium w-full">
          {comment}
        </Text>
        <View>
          <TouchableOpacity
            onPress={() => setLike(!like)}
            className="flex-row items-center mt-1"
          >
            <Image
              source={like ? icon.heartfull : icon.heart}
              className="w-4 h-4 mr-1.5"
            />
            <Text className="text-gray-400 text-[13px] w-full">
              <Text className="text-gray-400 text-[15px] ">{noLikes} </Text>{" "}
              Likes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
