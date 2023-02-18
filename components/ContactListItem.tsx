import { View, Text, Image, Pressable } from "react-native";

type ContactListItemProps = {
  user: UserSchema;
};

export default function ContactListItem({ user }: ContactListItemProps) {
  const { image, name, status } = user;
  return (
    <Pressable
      className="flex-row items-center h-20 px-4 space-x-4 bg-gray-50"
      onPress={() => {}}
    >
      <Image
        source={{
          uri: image,
        }}
        className="w-10 h-10 rounded-full"
      />
      <View>
        <View>
          <Text className="text-semibold">{name}</Text>
          <Text className="text-xs text-gray-500" numberOfLines={1}>
            {status ? status : "Available"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
