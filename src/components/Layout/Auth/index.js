import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import React from 'react';
import Logo from '../../Logo';

const index = ({ children }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.container}>
                <View>
                    <Logo />
                </View>
                <View style={styles.contentContainer}>
                    {children}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ccc',
    },
    container: {
        marginTop: 200
    },
    contentContainer: {
        marginTop: 60,
        backgroundColor: 'white',
        height: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 40
    }
})


export default index