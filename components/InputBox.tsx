import { useState } from "react";
import { View, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const handleEmoji = () => {
  console.warn("Emoji");
};
const handlePaperclip = () => {
  console.warn("Paperclip");
};
const handleCamera = () => {
  console.warn("Camera");
};
const handleMic = () => {
  console.warn("Mic");
};

export default function InputBox() {
  const [newMessage, setNewMessage] = useState("");

  return (
    <View className="flex-row items-center p-2 space-x-2">
      <View className="flex-row items-center flex-1 px-3 py-1 space-x-2 rounded-full bg-gray-50">
        {/* icon smiley */}
        <FontAwesome5
          name="smile"
          className="w-6 h-6"
          color="gray"
          onPress={handleEmoji}
        />
        {/* text input */}
        <TextInput
          className="flex-1 text-xs"
          placeholder="Message"
          value={newMessage}
          onChangeText={setNewMessage}
          onSubmitEditing={() => setNewMessage("")}
        />
        {/* icon attachment */}
        <FontAwesome5
          name="paperclip"
          className="w-6 h-6"
          color="gray"
          style={{ transform: [{ rotateY: "180deg" }] }}
          onPress={handlePaperclip}
        />
        {/* icon camera */}
        <FontAwesome5
          name="camera"
          className="w-6 h-6"
          color="gray"
          onPress={handleCamera}
        />
      </View>
      <View className="px-3 py-2.5 rounded-full bg-brand-500">
        {/* button with mic icon */}
        <FontAwesome5
          name="microphone"
          className="w-6 h-6"
          color="white"
          onPress={handleMic}
        />
      </View>
    </View>
  );
}
