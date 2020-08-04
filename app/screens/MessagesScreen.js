import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "./Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/userImage.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/userImage.png"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/userImage.png"),
  },
  {
    id: 4,
    title: "T4",
    description: "D4",
    image: require("../assets/userImage.png"),
  },
  {
    id: 5,
    title: "T5",
    description: "D5",
    image: require("../assets/userImage.png"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Pressed", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 1,
              title: "T1",
              description: "D1",
              image: require("../assets/userImage.png"),
            },
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/userImage.png"),
            },
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/userImage.png"),
            },
            {
              id: 4,
              title: "T4",
              description: "D4",
              image: require("../assets/userImage.png"),
            },
            {
              id: 5,
              title: "T5",
              description: "D5",
              image: require("../assets/userImage.png"),
            },
          ])
        }
      />
    </Screen>
  );
}

export default MessagesScreen;
