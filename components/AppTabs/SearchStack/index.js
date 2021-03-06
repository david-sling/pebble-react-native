import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "./Search";
import axios from "axios";
import config from "../../../config";

export default function index({ openChat, userProps, tokenProps }) {
  const Stack = createStackNavigator();

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    getResults();
  }, [search]);

  const getResults = async () => {
    if (search == "") return null;
    const { data } = await axios.get(
      `${config.SERVER_URL}/users/all/${search}`
    );
    setResults(data);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        options={{
          headerTitle: () => (
            <View>
              <TextInput
                placeholder="Search"
                value={search}
                onChangeText={(text) => setSearch(text)}
              />
            </View>
          ),
        }}
      >
        {(props) => (
          <Search
            {...props}
            userProps={userProps}
            tokenProps={tokenProps}
            results={results}
            openChat={openChat}
            setSearch={setSearch}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
