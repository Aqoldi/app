import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { registerSchema } from "../../validators/userSchima";
import useLoginErrorStore from "../../stores/useLoginErrorStore";
import Input from "../../components/Input";
import icon from "../../assets/script/icon";
import Buttons from "../../components/Button";

export default function Register({ navigation }) {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const setErrors = useLoginErrorStore((state) => state.setErrors);
  const errors = useLoginErrorStore((state) => state.errors);

  const handleInputChange = (name, value) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignIn = async () => {
    try {
      registerSchema.parse(form);

      // If validation succeeds, clear errors
      setErrors({});

      // Handle successful sign-in response
      console.log("Sign-in successful:");
    } catch (error) {
      // If validation fails or API call fails, show error message
      console.error("Sign-in error:", error);
      if (error.errors) {
        const validationErrors = {};
        error.errors.map((err) => {
          if (err.path && err.message) {
            validationErrors[err.path[0]] = err.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };

  return (
    <SafeAreaView className="flex px-10 justify-center w-full h-full bg-[#111827]">
      <Text className="text-5xl font-bold text-white">
        Create {"\n"}your account.
      </Text>
      <View className="mt-3">
        <Input
          label="First Name"
          placeholder="First Name"
          icon={icon.user}
          value={form.first_name}
          onChangeText={(value) => handleInputChange("first_name", value)}
          error={errors.first_name}
        />
        <Input
          label="Last Name"
          placeholder="Last Name"
          icon={icon.user}
          value={form.last_name}
          onChangeText={(value) => handleInputChange("last_name", value)}
          error={errors.last_name}
        />
        <Input
          label="Email"
          placeholder="Email"
          icon={icon.email}
          value={form.email}
          onChangeText={(value) => handleInputChange("email", value)}
          error={errors.email}
        />
        <Input
          label="Password"
          placeholder="Password"
          icon={icon.lock}
          secret={true}
          value={form.password}
          onChangeText={(value) => handleInputChange("password", value)}
          error={errors.password}
        />
        <Buttons
          text="Register"
          bgColor="bg-white"
          textColor="[#111827]"
          //   icon={icon.signIn}
          onClick={() => handleSignIn()}
        />
        <View className="flex-row gap-1 mt-2 items-center justify-center">
          <Text className="text-gray-400 text-md font-semibold">
            Have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="text-white text-[17px] font-bold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
