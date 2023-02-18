import { View, Text, Image } from "react-native";

export default function NotFoundScreen() {
  return (
    <View className="items-center justify-center flex-1">
      <Text className="mb-8 text-lg font-medium text-gray-400">
        Page Not Found!
      </Text>
      <Image
        className="w-[80%]"
        style={{ aspectRatio: 5 / 2 }}
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/capybara+copy.png",
        }}
      />
    </View>
  );
}
