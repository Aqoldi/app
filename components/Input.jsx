import { Image, Text, TextInput, View } from "react-native";

export default function Input({
  label,
  placeholder,
  icon,
  secret,
  value,
  onChangeText,
  error,
}) {
  return (
    <View className="gap-2 mb-2">
      <Text className="text-lg font-bold text-white pl-1">{label}</Text>
      <View className="flex-row">
        <TextInput
          className={`w-full text-white font-medium bg-gray-900 border ${
            error ? "border-rose-500" : "border-[#497991]"
          } focus:border-2  px-4 pl-10 focus:border-white h-11 rounded-xl text-lg`}
          placeholder={placeholder}
          keyboardType={label == "Email" ? "email-address" : "default"}
          placeholderTextColor="white"
          secureTextEntry={secret}
          value={value}
          onChangeText={onChangeText}
        />
        <Image
          source={icon}
          className="w-7 h-7 absolute top-2 left-2"
          resizeMode="contain"
        />
      </View>
      {error && (
        <Text className="text-rose-500 pl-1 text-[12px] relative bottom-1">
          {error}
        </Text>
      )}
    </View>
  );
}
