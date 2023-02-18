import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";

import TopTabNavigation from "./TopTabNavigation";
import ChatScreen from "../screens/ChatScreen";
import ContactsScreen from "../screens/ContactsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#075e54",
        },
        headerShadowVisible: false,
        headerTitle: () => (
          <Text className="text-lg font-semibold text-gray-50">WhatsApp</Text>
        ),
        headerRight: () => (
          <View className="flex-row items-center justify-center space-x-4">
            <FontAwesome5 name="camera" size={20} color="white" />
            <FontAwesome5 name="search" size={20} color="white" />
            <FontAwesome5 name="ellipsis-v" size={20} color="white" />
          </View>
        ),
      }}
    >
      <Stack.Screen name="Home" component={TopTabNavigation} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
    </Stack.Navigator>
  );
}
