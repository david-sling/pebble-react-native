import React from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from '../../../styles'

export default function Search({results}) {
    return (
        <View style={styles.flex} >
            <FlatList
                data={results}
                renderItem={ ({item}) => {
                    console.log({item})
                    return(
                        <View style={styles.searchCard} >
                            <View style={styles.searchLeft} >
                                <Text style={styles.searchName} >{item.name}</Text>
                                <Text style={styles.searchUsername} >@{item.username}</Text>
                            </View>
                        </View>
                    )}}
                keyExtractor={(item)=>item._id}
            />
        </View>
    )
}
