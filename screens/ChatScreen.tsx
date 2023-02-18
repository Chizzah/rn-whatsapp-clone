import {
  ImageBackground,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Message from "../components/Message";
import InputBox from "../components/InputBox";

import messages from "../data/messages.json";

import bg from "../assets/images/BG.png";

export default function ChatScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <ImageBackground className="flex-1" source={bg}>
        <FlatList
          className="px-4 mt-1"
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
