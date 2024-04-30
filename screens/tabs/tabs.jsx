import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import { Image, Text, View } from "react-native";
import icon from "../../assets/script/icon";
import Shop from "./Shop";
import Job from "./Job";
import Discover from "./Discover";
import Saved from "./Saved";

const Tab = createBottomTabNavigator();

const TabIcon = ({ icon, color, name, focused, style, txt }) => {
  return (
    <View className="flex items-center justify-center gap-1.5">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className={style}
      />
      <Text
        className={`${focused ? "font-bold" : "font-medium"} text-xs ${txt}`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        // tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#7E7E7E",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 64,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icon.home}
              color={color}
              name="Home"
              focused={focused}
              style="w-7 h-7"
              txt="relative bottom-1"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          title: "Discover",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icon.discover}
              color={color}
              name="Discover"
              focused={focused}
              style="w-7 h-7"
              txt="relative bottom-1"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          title: "Shop",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icon.cart}
              color={color}
              name="Shop"
              focused={focused}
              style="w-8 h-8"
              txt="relative bottom-1.5"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Job"
        component={Job}
        options={{
          title: "Job",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icon.job}
              color={color}
              name="Job"
              focused={focused}
              style="w-7 h-7"
              txt="relative bottom-1"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icon.saved}
              color={color}
              name="Saved"
              focused={focused}
              style="w-7 h-7"
              txt="relative bottom-1"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
