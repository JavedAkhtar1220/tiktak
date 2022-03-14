import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
    return (
        <View>
            <Text style={styles.brand}>GB TECH</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    brand: {
        fontSize: 30,
        fontWeight: '800',
        letterSpacing: 2,
        textAlign: 'center'
    }
})

export default index