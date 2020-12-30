import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Favorite = () => {
    return (
        <View style={styles.container}>
            <Text>Hello from selected facorite</Text>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
