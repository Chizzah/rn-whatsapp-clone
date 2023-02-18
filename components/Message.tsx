import { View, Text } from "react-native";
import React from "react";
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

type MessageProps = {
  message: MessageSchema;
};

export default function Message({ message }: MessageProps) {
  const { id, user, text, createdAt } = message;

  return (
    <View
      className={`my-1 mx-2 px-4 py-2  rounded-xl shadow ${
        user.id === "u1"
          ? "bg-brand-300 self-end ml-16"
          : "bg-gray-50 self-start mr-16"
      }`}
    >
      <Text className="text-xs">{text}</Text>
      <Text className="self-end text-xs text-gray-500">
        {dayjs(createdAt).format("HH:mm a")}
      </Text>
    </View>
  );
}
