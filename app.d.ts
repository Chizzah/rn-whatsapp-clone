/// <reference types="nativewind/types" />

declare module '*.jpg';
declare module '*.png';

type RootStackParamList = {
  Home: undefined
  Chats: undefined
  Chat: {
    id: string, name: string
  };
  Contacts: undefined
};

type UserSchema = {
  id: string;
  name: string;
  image?: string;
  status?: string;
};

type LastMessageSchema = {
  id: string;
  text: string;
  createdAt: string;
};

type ChatSchema = {
  id: string;
  user: UserSchema;
  lastMessage: LastMessageSchema;
};

type MessageSchema = {
  id: string;
  text: string;
  createdAt: string;
  user: UserSchema;
}