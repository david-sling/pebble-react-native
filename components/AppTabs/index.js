import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';
import config from '../../config';
import UserBar from '../UserBar';
import ChatStack from './ChatStack'
import SearchStack from './SearchStack'

export default function AppTabs({tokenActions}){

    const [ user, setUser ] = useState({})

    useEffect(()=>{
        getUser()
    },[])

    const getUser = async () => {
        const result = await axios.post(`${config.SERVER_URL}/users/details`, {token: tokenActions.token})
        console.log(result.data)
        setUser(result.data)
    }

    const Tabs = createBottomTabNavigator()
    return(
        <Tabs.Navigator>
            <Tabs.Screen name='Chats' >
                {props=> <ChatStack {...props} userProps={{user,setUser}} tokenProps={tokenActions} /> }
            </Tabs.Screen>
            <Tabs.Screen name='Search' >
                {props=> <SearchStack {...props} userProps={{user,setUser}} tokenProps={tokenActions} /> }
            </Tabs.Screen>
        </Tabs.Navigator>
    )
}