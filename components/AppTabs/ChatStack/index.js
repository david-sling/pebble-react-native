import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ChatList from './ChatList'
import { Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../../styles';
import ChatView from './ChatView';

export default function AuthStack({userProps, tokenProps}) {
    const Stack = createStackNavigator()
    
    return (
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#FFC700', } }} >
                <Stack.Screen name="ChatList" options={ { 
                    title: 'pebble', 
                    headerRight: ()=>
                        <TouchableOpacity 
                            style={styles.logout} 
                            onPress = {() => {tokenProps.setToken('')}}
                        >
                            <Text>Log Out</Text>
                        </TouchableOpacity>
                } } >
                    {props=><ChatList {...props} userProps={userProps} tokenProps={tokenProps} /> }
                </Stack.Screen>
                <Stack.Screen name="ChatView" options={ ({route})=>( { 
                    title: route.params.excludeUser[0].name, 
                    headerStyle: { backgroundColor: '#fff', }
                }) } >
                    {props=><ChatView {...props} userProps={userProps} tokenProps={tokenProps} /> }
                </Stack.Screen>
            </Stack.Navigator>
    )
}
