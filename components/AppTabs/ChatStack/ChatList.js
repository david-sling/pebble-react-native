import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

//dependencies
import axios from 'axios'

//services
import config from '../../../config'
import ChatCard from './ChatCard'
import styles from '../../../styles'

//components
// import ChatCard from './ChatCard'

const {SERVER_URL}=config

export default function ChatList({userProps, tokenProps, navigation }) {

    const [ chatList, setChatList ] = useState([])

    useEffect(()=>{
        getChatList()
        // console.log(chatList)
    },[token])

    useEffect(()=>{
        // console.log({chatList})
    },[ChatList])
    
    const getChatList = async () => {
        try {
            const data = await axios.post(`${SERVER_URL}/chat`, {token})
            // console.log(data)
            setChatList(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const { user } = userProps
    const { token } = tokenProps

    if (!user) return

    return (
        <View>
            {/* <Text>{user.name}</Text> */}
            {/* <View >
                {chatList.map( chat=>(
                    <ChatCard userProps={userProps} tokenProps={tokenProps} chat={chat} key={chat._id} />
                ) )}
            </View> */}
            <FlatList 
                data={chatList}
                renderItem = {chat => <ChatCard userProps={userProps} tokenProps={tokenProps} chat={chat} key={chat._id} navigation={navigation} />}
                ItemSeparatorComponent = { ()=><View style={styles.chatSeperator} /> }
                keyExtractor={chat=>chat._id}
            />
        </View>
    )
}
