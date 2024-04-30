import {
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FollowButton from "../../components/FollowButton";
import icon from "../../assets/script/icon";
import { useState } from "react";
import Profile from "../../components/Profile";
import image from "../../assets/script/image";
import Comment from "../../components/Comment";
import LottieView from "lottie-react-native";

const currentDate = new Date();
const options = { weekday: "long", month: "long", day: "numeric" };
const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
  currentDate
);

export default function BlogDetails({ navigation }) {
  const [save, setSave] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onOpen = async () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };
  return (
    <SafeAreaView>
      <>
        <ScrollView className="bg-[#111827] h-full">
          <View className="flex-row items-center justify-between p-4">
            <TouchableOpacity
              className="p-1.5 mr-1 bg-gray-700 rounded-full"
              onPress={() => navigation.goBack()}
            >
              <Image
                source={icon.back}
                className="w-5 h-5 relative right-[1px]"
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="p-1.5  bg-gray-700 rounded-full"
              onPress={() => setSave(!save)}
            >
              <Image
                source={save ? icon.saved : icon.save}
                className="w-5 h-5"
              />
            </TouchableOpacity>
          </View>
          <Text className="text-gray-400 text-[13px] px-4 mt-5">
            Category | 1 min read | 2 comments
          </Text>
          <Text className="text-white font-bold text-3xl px-4 my-2">
            Blog Details
          </Text>
          <View className="pl-2 pr-4 flex-row items-center justify-between mb-3">
            <View className="flex-row items-center">
              <Profile image={image.apple} big="h-[50px] w-[50px]" />
              <View className="flex ml-2">
                <View className="flex-row items-center">
                  <Text className="text-white font-bold">Apple</Text>
                  <Image
                    source={icon.verified}
                    className="w-4 h-4 ml-1.5 relative top-[1px]"
                  />
                </View>
                <Text className="text-gray-400 text-[13px]">@apple</Text>
              </View>
            </View>
            <FollowButton isFollow={true} bgDark={false} />
          </View>
          <View className="px-4">
            <Image
              source={image.news1}
              className="w-full h-48 rounded-xl"
              resizeMode="cover"
            />
          </View>
          <View className="px-4">
            <Text className="text-gray-400 font-semibold text-md my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </Text>
          </View>
          <View className="px-4">
            <Text className="text-gray-200 font-bold text-2xl my-3">
              Comments (20)
            </Text>
            <Comment
              image={image.cnn}
              name="Apple"
              time={formattedDate}
              comment="Comment"
              noLikes={10}
            />
            <Comment
              image={image.cnn}
              name="Apple"
              time={formattedDate}
              comment="Comment"
              noLikes={10}
            />
            <Comment
              image={image.cnn}
              name="Apple"
              time={formattedDate}
              comment="Comment"
              noLikes={10}
            />
            <Comment
              image={image.cnn}
              name="Apple"
              time={formattedDate}
              comment="Comment"
              noLikes={10}
            />
          </View>
        </ScrollView>
        <View className="bg-[#111827] flex-row py-6 px-4 absolute bottom-0 w-full">
          <View className="flex-row ">
            <TextInput
              className="w-[78vw] h-12 bg-gray-700 rounded-full px-4 pl-12 font-medium text-lg text-white"
              placeholder="Write a comment..."
              placeholderTextColor="gray"
              multiline
            />
            <TouchableOpacity
              onPress={onOpen}
              className="flex items-center justify-center bg-white rounded-full px-2 ml-2"
            >
              <Image source={icon.send} className="w-8 h-8" />
            </TouchableOpacity>
            <Image
              source={icon.comment}
              className="absolute w-6 h-6 left-4 top-3"
            />
          </View>
        </View>
      </>
      {modalVisible && (
        <View className="absolute top-0 bottom-0 left-0 right-0 bg-neutral-700 h-[100vh] w-[100%] opacity-80"></View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex items-center justify-center w-full h-full">
          <View className="w-[90%] h-[60%] bg-[#111827] rounded-3xl p-4">
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="flex items-center justify-center w-10 h-10 bg-gray-700 absolute top-5 right-5 rounded-full"
            >
              <Image source={icon.back} className="w-6 h-6" />
            </TouchableOpacity>
            <View className="items-center w-[100%] h-80">
              <LottieView
                className=" h-60 w-[90vw]"
                source={require("../../assets/animations/celebrate.json")}
                autoPlay
                loop
                resizeMode="cover"
              />
              <LottieView
                className=" h-44 w-44 absolute top-10 left-18"
                source={require("../../assets/animations/succes.json")}
                autoPlay
                loop
              />
            </View>
            <View className=" items-center relative bottom-10">
              <Text className="text-gray-50 font-bold text-3xl my-3 relative bottom-14">
                Congratulation!
              </Text>
              <Text className="text-gray-300 font-semibold text-md my-3">
                Back
              </Text>
              <Text
                className="bg-white text-xl text-[#111827] w-[70%] text-center rounded-full py-2 font-bold text-md my-3"
                onPress={() => setModalVisible(false)}
              >
                Back to Home
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
