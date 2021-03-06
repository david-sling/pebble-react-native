import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import axios from "axios";
import config from "../../config";
import UserBar from "../UserBar";
import ChatStack from "./ChatStack";
import SearchStack from "./SearchStack";
import { MaterialIcons } from "@expo/vector-icons";

export default function AppTabs({ tokenActions }) {
  const [user, setUser] = useState({});
  const [openChat, setOpenChat] = useState(null);
  const [showTabs, setShowTabs] = useState(true);

  useEffect(() => {
    getUser();
    // openChat?.navigate("ChatView");
  }, []);

  useEffect(() => {
    // openChat?.navigate("ChatView", { user, excludeUser:  });
  }, [openChat]);

  const getUser = async () => {
    const result = await axios.post(`${config.SERVER_URL}/users/details`, {
      token: tokenActions.token,
    });
    console.log(result.data);
    setUser(result.data);
  };

  const Tabs = createBottomTabNavigator(undefined, {
    animationEnabled: true,
  });
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarVisible: showTabs,
      }}
    >
      <Tabs.Screen
        name="Chats"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="chat"
              size={24}
              color={focused ? "#FFC700" : "grey"}
            />
          ),
        }}
      >
        {(props) => (
          <ChatStack
            {...props}
            userProps={{ user, setUser }}
            tokenProps={tokenActions}
            openChatProps={{ openChat, setOpenChat }}
            setShowTabs={setShowTabs}
          />
        )}
      </Tabs.Screen>
      <Tabs.Screen
        name="Search"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="search"
              size={24}
              color={focused ? "#FFC700" : "grey"}
            />
          ),
        }}
      >
        {(props) => (
          <SearchStack
            {...props}
            userProps={{ user, setUser }}
            tokenProps={tokenActions}
            openChat={openChat}
          />
        )}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
