import axios from "axios";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import config from "../../../config";
import styles from "../../../styles";

export default function Search({
  openChat,
  results,
  tokenProps: { token },
  userProps: { user },
  setSearch,
}) {
  const getParticipants = async () => {
    // const participantsID = chat.participants.filter((p)=>p!=user._id)
    // console.log(participantsID)
    const data = await axios.post(`${config.SERVER_URL}/users/id`, {
      users: chat.item.participants,
      token,
    });
    // console.log({user, participants: data.data})
    setParticipants(data.data);
  };

  const addDm = async (username) => {
    console.log("addDm()");
    console.log({
      token,
      participant: username,
    });
    const { data } = await axios.post(`${config.SERVER_URL}/chat/createdm`, {
      token,
      participant: username,
    });
    console.log(data);
    const chat = { item: data };
    const participants = await axios.post(`${config.SERVER_URL}/users/id`, {
      users: chat.item.participants,
      token,
    });
    const excludeUser = participants.data.filter((p) => p._id != user._id);
    console.log(participants.data);
    const body = {
      chat,
      excludeUser,
      participants: participants.data,
    };
    console.log(body);
    setSearch("");
    openChat?.navigate("ChatView", body);
  };
  return (
    <View style={styles.flex}>
      <FlatList
        data={results}
        renderItem={({ item }) => {
          console.log("item");
          return (
            <TouchableOpacity
              onPress={() => addDm(item.username)}
              style={styles.searchCard}
            >
              <View style={styles.searchLeft}>
                <Text style={styles.searchName}>{item.name}</Text>
                <Text style={styles.searchUsername}>@{item.username}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}
