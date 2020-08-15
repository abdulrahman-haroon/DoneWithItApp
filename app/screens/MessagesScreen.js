import React, { useState } from "react";
import { FlatList } from "react-native";
import { ListItem, ListItemDeleteAction, ListItemSeperator } from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
            showChevron={true}
            onPress={() => console.log("Pressed", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages(initialMessages)
        }
      />
    </Screen>
  );
}

export default MessagesScreen;
