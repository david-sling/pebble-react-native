import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

//dependencies
import axios from "axios";

//services
import config from "../../../config";
import ChatCard from "./ChatCard";
import styles from "../../../styles";
import socket from "../../../services/socket";

//components
// import ChatCard from './ChatCard'

const { SERVER_URL } = config;

export default function ChatList({
  userProps,
  tokenProps,
  navigation,
  setOpenChat,
}) {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    let isMounted = true;
    socket.on(userProps.user._id, (data) => {
      // console.log(data)
      if (isMounted) getChatList();
    });
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    getChatList();
    setOpenChat(navigation);
    // console.log(chatList)
  }, [token]);

  useEffect(() => {
    // console.log({chatList})
  }, [ChatList]);

  const getChatList = async () => {
    // console.log(token)
    try {
      const data = await axios.post(`${SERVER_URL}/chat`, { token });
      //   console.log(data);
      setChatList(data.data);
    } catch (error) {
      console.log(error, "err");
    }
  };

  const { user } = userProps;
  const { token } = tokenProps;

  if (!user) return;

  return (
    <View>
      <Button title="Reload" onPress={getChatList} />
      {/* <Text>{user.name}</Text> */}
      {/* <View >
                {chatList.map( chat=>(
                    <ChatCard userProps={userProps} tokenProps={tokenProps} chat={chat} key={chat._id} />
                ) )}
            </View> */}
      <FlatList
        data={chatList}
        renderItem={(chat) => (
          <ChatCard
            userProps={userProps}
            tokenProps={tokenProps}
            chat={chat}
            key={chat._id}
            navigation={navigation}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.chatSeperator} />}
        keyExtractor={(chat) => chat._id}
      />
    </View>
  );
}
