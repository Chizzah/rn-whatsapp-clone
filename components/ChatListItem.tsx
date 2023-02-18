import { View, Text, Image, Pressable } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";

const handleTime = (createdAt: string) => {
  let messageTime: string;

  const time = dayjs(createdAt);
  const today = dayjs();
  const yesterday = today.subtract(1, "day");

  if (time.isBefore(yesterday)) {
    messageTime = dayjs(time).format("YYYY/MM/DD");
  }
  if (time === yesterday) {
    messageTime = "yesterday";
  }

  if (time === today) {
    messageTime = dayjs(time).format("HH:mm a");
  }

  return messageTime;
};

type ChatListItemProps = {
  chat: ChatSchema;
};

export default function ChatListItem({ chat }: ChatListItemProps) {
  const router = useRoute();
  const navigation = useNavigation();

  const { id, user, lastMessage } = chat;
  return (
    <Pressable
      className="flex-row items-center h-20 mx-4 space-x-2 bg-gray-50"
      onPress={() => navigation.navigate("Chat", { id, name: user.name })}
    >
      <Image
        source={{
          uri: user.image,
        }}
        className="w-12 h-12 rounded-full"
      />
      <View className="flex-1">
        <View className="flex-row mb-1">
          <Text className="flex-1 font-bold " numberOfLines={1}>
            {user.name}
          </Text>
          <Text className="text-xs text-gray-500">
            {handleTime(lastMessage.createdAt)}
          </Text>
        </View>
        <Text className="text-xs text-gray-500" numberOfLines={1}>
          {lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
}
