import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Login';
import Register from './Register';

export default function AuthStack({tokenActions}) {
    const Stack = createStackNavigator()
    const {
        token,
        setToken
    } = tokenActions
    return (
            <Stack.Navigator>
                <Stack.Screen name="Login">
                    {props=><Login {...props} token={token} setToken={setToken} /> }
                </Stack.Screen>
                <Stack.Screen name="Register">
                    {props=><Register {...props} token={token} setToken={setToken} /> }
                </Stack.Screen>
            </Stack.Navigator>
    )
}
