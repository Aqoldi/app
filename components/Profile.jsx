import { Image } from "react-native";

export default function Profile({ image, big }) {
  return (
    <Image
      source={image}
      className={`${big}  rounded-full mx-2`}
      resizeMode="cover"
    />
  );
}
