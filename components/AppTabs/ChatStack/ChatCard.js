import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import config from '../../../config'
import axios from 'axios'
import styles from '../../../styles'
import { Link } from 'react-router-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const {SERVER_URL}=config

export default function ChatCard({ navigation, userProps:{ user, setUser }, tokenProps:{ token }, chat }) {

    const [participants, setParticipants]=useState([])

    useEffect(()=>{
        getParticipants()
    },[token])

    const getParticipants = async () => {
        // const participantsID = chat.participants.filter((p)=>p!=user._id)
        // console.log(participantsID)
        const data = await axios.post(`${config.SERVER_URL}/users/id`, {users: chat.item.participants, token} )
        // console.log({user, participants: data.data})
        setParticipants(data.data)
    }

    const excludeUser = participants.filter( participant => participant._id!=user._id )

    return (
        // <Link to={`/user/chat/${chat._id}`} >
            <TouchableOpacity 
                style={styles.chatCard}
                onPress={ ()=>navigation.navigate('ChatView' , { chat, excludeUser, participants } ) }
            >
                {excludeUser.map(participant=>{
                    // const thisUser = 
                   return <Text key={participant._id} >{participant.name}</Text>
                })}
            </TouchableOpacity>
        // </Link>
    )
}
