import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ChatsScreen from "../screens/ChatsScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarContentContainerStyle: {
          backgroundColor: "#075e54",
        },
        tabBarInactiveTintColor: "#d1d5db",
        tabBarActiveTintColor: "#f9fafb",
        tabBarLabelStyle: {
          fontWeight: "600",
          textTransform: "capitalize",
        },
      }}
    >
      <Tab.Screen name="Community" component={NotFoundScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Calls" component={NotFoundScreen} />
    </Tab.Navigator>
  );
}
