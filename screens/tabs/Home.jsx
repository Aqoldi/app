import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Profile from "../../components/Profile";
import image from "../../assets/script/image";
// import { SafeAreaView } from "react-native-safe-area-context";
import icon from "../../assets/script/icon";
import Breaking from "../../components/Breaking";
import Trending from "../../components/Trending";
import { useCallback, useState } from "react";

const currentDate = new Date();
const options = { weekday: "long", month: "long", day: "numeric" };
const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
  currentDate
);

export default function Home({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView className="h-full w-full bg-[#111827]">
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {refreshing && (
          <Text className="w-full text-center my-6 text-3xl text-white"></Text>
        )}
        <View className="flex-row items-center justify-between pl-2 pr-4 pt-2  mb-5">
          <View className="flex flex-row items-center">
            <Profile image={image.profile} big="h-[50px] w-[50px]" />
            <View className="flex ml-3">
              <Text className="text-xl font-bold text-white">John Doe</Text>
              <Text className="text-gray-400 text-[13px] font-medium">
                {formattedDate}
              </Text>
            </View>
          </View>
          <View className="flex-row">
            <TouchableOpacity className="p-1.5 mr-1 bg-gray-700 rounded-full">
              <Image source={icon.search} className="w-5 h-5" />
            </TouchableOpacity>
            <TouchableOpacity className="p-1.5  bg-gray-700 rounded-full">
              <Image source={icon.add} className="w-5 h-5" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Logos */}
        <ScrollView horizontal className="flex-row px-2 pr-4 mt-4">
          <Profile image={image.cnn} big="h-[60px] w-[60px]" />
          <Profile image={image.bbc} big="h-[60px] w-[60px]" />
          <Profile image={image.forbes} big="h-[60px] w-[60px]" />
          <Profile image={image.yahoo} big="h-[60px] w-[60px]" />
          <Profile image={image.apple} big="h-[60px] w-[60px]" />
          <Profile image={image.cnn} big="h-[60px] w-[60px]" />
          <Profile image={image.bbc} big="h-[60px] w-[60px]" />
          <Profile image={image.forbes} big="h-[60px] w-[60px]" />
          <Profile image={image.yahoo} big="h-[60px] w-[60px]" />
          <Profile image={image.apple} big="h-[60px] w-[60px]" />
        </ScrollView>

        {/* Braeking Blogs */}
        <View className="flex-row items-center justify-between  px-5 mt-10">
          <Text className="text-3xl font-bold text-gray-200">Breaking</Text>
          <TouchableOpacity className="flex-row items-center justify-center">
            <Text className="text-gray-400 font-medium">See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal className="flex-row px-2 pr-4 mt-4">
          <Breaking
            image={image.news1}
            title="Today, the former president faces legal battles in distant
                  courtrooms again."
            postImage={image.apple}
            postName="Apple"
            isVerified={true}
            postDate={formattedDate}
          />
          <Breaking
            image={image.news2}
            title="Today, the former president faces legal battles in distant
                  courtrooms again."
            postImage={image.yahoo}
            postName="Yahoo"
            isVerified={true}
            postDate={formattedDate}
          />
          <Breaking
            image={image.news1}
            title="Today, the former president faces legal battles in distant
                  courtrooms again."
            postImage={image.apple}
            postName="Apple"
            isVerified={true}
            postDate={formattedDate}
          />
          <Breaking
            image={image.news1}
            title="Today, the former president faces legal battles in distant
                  courtrooms again."
            postImage={image.apple}
            postName="Apple"
            isVerified={true}
            postDate={formattedDate}
          />
        </ScrollView>

        <View className="flex-row items-center justify-between  px-5 mt-10">
          <Text className="text-3xl font-bold text-gray-200">Trending</Text>
          <TouchableOpacity className="flex-row items-center justify-center">
            <Text className="text-gray-400 font-medium">See All</Text>
          </TouchableOpacity>
        </View>
        <View className="px-4">
          <Trending
            image={image.news1}
            title="Today, the former president faces legal battles in distant
                courtrooms again."
            postImage={image.apple}
            postName="Apple"
            isVerified={true}
            postDate={formattedDate}
            onClick={() => navigation.navigate("BlogDetails")}
          />
          <Trending
            image={image.news1}
            title="Today, the former president faces legal battles in distant
                courtrooms again."
            postImage={image.apple}
            postName="Apple"
            isVerified={true}
            postDate={formattedDate}
            onClick={() => navigation.navigate("BlogDetails")}
          />
          <Trending
            image={image.news1}
            title="Today, the former president faces legal battles in distant
                courtrooms again."
            postImage={image.apple}
            postName="Apple"
            isVerified={true}
            postDate={formattedDate}
            onClick={() => navigation.navigate("BlogDetails")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
