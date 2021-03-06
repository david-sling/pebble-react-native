import axios from "axios";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import config from "../../../config";
import styles from "../../../styles";
import socket from "../../../services/socket";

export default function ChatView({
  route: {
    params: { chat, participants },
  },
  tokenProps,
  userProps,
  setShowTabs,
}) {
  const { token } = tokenProps;

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const [inputLines, setInputLines] = useState(1);

  const messageList = useRef();

  useEffect(() => {
    getMessages();
    setShowTabs(false);
    return () => setShowTabs(true);
    // setTimeout(() => {
    //     scrollToBottom()
    // }, 5);
  }, []);

  useEffect(() => {
    let isMounted = true;
    socket.on(userProps.user._id, (data) => {
      // console.log(data)
      if (isMounted) getMessages();
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // useEffect(()=>{
  //     setTimeout(() => {
  //         // scrollToBottom()
  //     }, 200);
  // },[messages])

  // const scrollToBottom = () => {
  //     messageList._scrollView.scrollTo(0,{animating: true})
  //     // console.log('scroll')
  // }

  const getMessages = async () => {
    // console.log({token, chat})
    const result = await axios.post(
      `${config.SERVER_URL}/messages/get/${chat.item._id}`,
      { token }
    );
    // console.log({messages: result.data})
    // console.log(participants)
    setMessages(result.data);
    // scrollToBottom()
    // scrollToBottom()
  };

  const handleSend = async () => {
    if (message == "") return null;
    // console.log({message})
    //SEND TO SOCKET
    // console.log({token, message, chatID: chat._id})
    const data = await socket.emit("message", {
      token,
      message,
      chatID: chat.item._id,
    });
    // console.log(data)

    // scrollToBottom()
    setMessage("");
  };

  // const array = [ `1`,`2`,`3` ]

  return (
    <View style={{ flex: 1 }}>
      <Button title="Go to Bottom" />
      <View style={styles.messages}>
        {messages && (
          <FlatList
            inverted
            ref={messageList}
            data={messages}
            renderItem={(message) => (
              <View
                style={[
                  styles.message,
                  message.item.sender == userProps.user._id && styles.user,
                ]}
              >
                <Text
                  style={[
                    styles.sender,
                    message.item.sender == userProps.user._id && styles.self,
                  ]}
                >
                  {
                    participants.find(
                      (participant) => participant._id == message.item.sender
                    ).name
                  }
                </Text>
                <Text
                  style={styles.messageContent}
                >{`${message.item.message}`}</Text>
              </View>
            )}
            keyExtractor={(message) => message._id}
          />
        )}
      </View>
      <View style={styles.inputForm}>
        <View style={styles.messageInput}>
          <TextInput
            value={message}
            onChangeText={(text) => setMessage(text)}
            multiline
            numberOfLines={inputLines}
            onContentSizeChange={(event) => {
              const lines = Math.floor(
                event.nativeEvent.contentSize.height / 17
              );
              const max = 5;
              // console.log(lines)
              setInputLines(lines > max ? max : lines);
            }}
          />
        </View>
        <View style={styles.sendButton}>
          <TouchableOpacity style={styles.sendButtonInner} onPress={handleSend}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
