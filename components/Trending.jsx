import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import icon from "../assets/script/icon";
import Profile from "./Profile";
import FollowButton from "./FollowButton";

export default function Trending({
  image,
  title,
  isVerified,
  postName,
  postDate,
  postImage,
  isFollowing,
  onClick,
}) {
  return (
    <View className="flex w-full bg-gray-700 rounded-2xl my-2 p-3 px-3 pt-5 ">
      <View className="flex-row items-center justify-between mb-2">
        <View className="flex-row">
          <Profile image={postImage} big="h-[40px] w-[40px]" />
          <View className="gap-1">
            <View className="flex-row items-center">
              <Text className="text-gray-300 font-bold">{postName}</Text>
              {isVerified && (
                <Image
                  source={icon.verified}
                  className="w-4 h-4 ml-1.5 relative top-0.5"
                />
              )}
            </View>
            <Text className="text-gray-400">{postDate}</Text>
          </View>
        </View>
        <FollowButton isFollowing={isFollowing} bgDark={true} />
      </View>
      <TouchableOpacity onPress={onClick}>
        <Text
          className="text-white font-semibold text-[17px] mt-1.5 mb-1 leading-tight"
          numberOfLines={2}
        >
          {title}
        </Text>
        <Image source={image} className="w-full h-32 rounded-xl" />
      </TouchableOpacity>
    </View>
  );
}
