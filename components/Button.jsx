import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Buttons({ text, bgColor, textColor, icon, onClick }) {
  return (
    <TouchableOpacity
      onPress={onClick}
      className={`flex-row w-full ${bgColor} rounded-full text-center py-2 my-4 items-center justify-center`}
    >
      <View className="mr-4 flex-row items-center justify-center">
        {icon && (
          <Image source={icon} className="w-7 h-7 " resizeMode="contain" />
        )}
        <Text
          className={`text-${textColor} font-bold text-lg ${
            icon && "relative right-2 ml-4"
          }  `}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
