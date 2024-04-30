import { Image, Text, View } from "react-native";
import icon from "../assets/script/icon";
import Profile from "./Profile";

export default function Breaking({
  image,
  title,
  postImage,
  postName,
  postDate,
  isVerified,
}) {
  return (
    <View className="flex w-60 bg-gray-700 rounded-2xl mx-2 p-2 ">
      <Image
        source={image}
        className="w-full h-32 rounded-xl"
        resizeMode="cover"
      />
      <Text
        className="text-white font-semibold text-[17px] mt-1.5 mb-1 leading-tight"
        numberOfLines={2}
      >
        {title}
      </Text>

      <View className="flex-row items-center justify-between mt-2 mb-2">
        <View className="flex-row items-center">
          <Profile image={postImage} big="h-[30px] w-[30px]" />
          <Text className="text-gray-400 font-bold">{postName}</Text>
          {isVerified && (
            <Image
              source={icon.verified}
              className="w-4 h-4 ml-1.5 relative top-0.5"
            />
          )}
        </View>
        <Text className="text-gray-400 text-[12px] font-medium">
          {postDate}
        </Text>
      </View>
    </View>
  );
}
