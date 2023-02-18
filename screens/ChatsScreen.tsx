import { View, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import ChatListItem from "../components/ChatListItem";

import chats from "../data/chats.json";

export default function ChatsScreen({ navigation }) {
  return (
    <View className="relative">
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
      />
      <TouchableOpacity
        className="absolute p-4 rounded-full shadow-md right-4 bottom-4 bg-brand-500"
        onPress={() => navigation.navigate("Contacts")}
      >
        <FontAwesome5 name="comment-alt" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
}
