import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function FollowButton({ isFollow, bgDark }) {
  const [isFollowing, setIsFollowing] = useState(isFollow);
  return (
    <TouchableOpacity
      onPress={() => setIsFollowing(!isFollowing)}
      className={`flex-row items-center justify-center ${
        bgDark ? "bg-[#111827] text-white" : "bg-white text-[#111827]"
      } px-5 py-1.5 rounded-full`}
    >
      <Text
        className={`${
          bgDark ? "text-gray-300" : "text-[#111827]"
        } font-medium text-[14px]`}
      >
        {isFollowing ? "Following" : "Follow"}
      </Text>
    </TouchableOpacity>
  );
}
