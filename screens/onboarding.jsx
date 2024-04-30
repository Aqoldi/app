import LottieView from "lottie-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

export default function OnboardingScreen({ navigation }) {
  const Dot = ({ selected }) => {
    return (
      <View>
        <Text
          className={`h-3 rounded-full bg-gray-300 relative right-2 ${
            selected ? "w-8 bg-white" : "w-3"
          } mr-2`}
        ></Text>
      </View>
    );
  };

  const Done = ({ ...props }) => {
    return (
      <TouchableOpacity {...props} onPress={() => navigation.navigate("Login")}>
        <Text className="text-black bg-white rounded-l-full px-5 py-3 text-lg font-bold">
          Get started
        </Text>
      </TouchableOpacity>
    );
  };

  const Skip = ({ ...props }) => {
    return (
      <TouchableOpacity {...props} onPress={() => navigation.navigate("Tabs")}>
        <Text className="text-white rounded-full ml-5 px-3 py-2 text-lg font-bold">
          Skip
        </Text>
      </TouchableOpacity>
    );
  };

  const Next = ({ ...props }) => {
    return (
      <TouchableOpacity {...props}>
        <Text className="text-black bg-white rounded-full mr-5 px-7 py-3 text-lg font-bold">
          Next
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Onboarding
      bottomBarHighlight={false}
      transitionAnimationDuration={700}
      bottomBarHeight={150}
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      DotComponent={Dot}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: "#003C43",
          image: (
            <View className=" w-60 h-60 items-center justify-center relative top-10">
              <LottieView
                className="h-40 w-44"
                source={require("../assets/animations/man.json")}
                autoPlay
                loop
              />
              {/* <Text>Hello</Text> */}
            </View>
          ),
          title: (
            <View className="w-full px-10 items-center justify-center">
              <Text className="text-5xl font-bold text-white">
                Experience Seamless Navigation with Our User-Centric App!
              </Text>
            </View>
          ),
          subtitle: (
            <View className="w-full px-10 items-center justify-center mt-5">
              <Text className="text-[14px] text-white font-semibold">
                Prepare to embark on a delightful journey with our app,
                meticulously crafted to prioritize your needs. Experience the
                perfect blend of intuitive design and powerful functionality,
                ensuring every interaction is smooth and hassle-free. Say
                goodbye to complexity and hello to simplicity as you navigate
                effortlessly through our feature-rich platform. Let's make your
                digital experience exceptional, one step at a time!
              </Text>
            </View>
          ),
        },
        {
          backgroundColor: "#0C2D57",
          image: (
            <View className=" w-72 h-60 items-center justify-center relative right-3 top-10">
              <LottieView
                className="h-60 w-72"
                source={require("../assets/animations/easy.json")}
                autoPlay
                loop
              />
            </View>
            // Experience the ease of navigation with our app's user-centric design. Effortlessly discover features crafted for simplicity. Let's make your journey smooth and stress-free!
          ),
          title: (
            <View className="w-full px-10  justify-center">
              <Text className="text-5xl font-bold text-white">
                Step Into Simplicity: Explore Our Intuitively Designed App!
              </Text>
            </View>
          ),
          subtitle: (
            <View className="w-full px-10 items-center justify-center mt-5">
              <Text className="text-[14px] text-white font-semibold">
                Experience the ease of navigation with our app's user-centric
                design. Effortlessly discover features crafted for simplicity.
                Let's make your journey smooth and stress-free!
              </Text>
            </View>
          ),
        },
        {
          backgroundColor: "#332941",
          image: (
            <View className=" w-60 h-60 items-center justify-center relative top-10">
              <LottieView
                className="h-60 w-64"
                source={require("../assets/animations/shop.json")}
                autoPlay
                loop
              />
            </View>
            // Experience the ease of navigation with our app's user-centric design. Effortlessly discover features crafted for simplicity. Let's make your journey smooth and stress-free!
          ),
          title: (
            <View className="w-full px-10  justify-center">
              <Text className="text-5xl font-bold text-white">
                Get in Touch with Sellers Instantly!
              </Text>
            </View>
          ),
          subtitle: (
            <View className="w-full px-9 items-center justify-center mt-5">
              <Text className="text-[14px] text-white font-semibold">
                Forge connections with sellers effortlessly through our
                platform. Have inquiries? Need more details? Our streamlined
                communication feature enables quick and direct contact with
                sellers. Enhance your shopping experience by engaging directly
                and making informed decisions. Your satisfaction is our goal!
              </Text>
            </View>
          ),
        },
      ]}
    />
  );
}
