import { FlatList } from "react-native";
import ContactListItem from "../components/ContactListItem";

import chats from "../data/chats.json";

export default function ContactsScreen() {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ContactListItem user={item.user} />}
    />
  );
}
