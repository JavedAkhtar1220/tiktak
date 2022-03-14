import React, { useState } from 'react';

import Layout from '../components/Layout/Auth';
import { Text, StyleSheet, View } from 'react-native';
import { TextInput, Button, IconButton, Colors, BottomNavigation } from 'react-native-paper';
import EntIcon from 'react-native-vector-icons/Feather';


const Register = ({ navigation }) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <View>
        <Text style={styles.head}>Register</Text>
        <View style={{ marginTop: 40 }}>
          <View style={{ marginBottom: 8 }}>
            <TextInput
              mode="outlined"
              label="Email"
            />
          </View>
          <View style={{ marginBottom: 8 }}>
            <TextInput
              mode="outlined"
              label="Username"
            />
          </View>
          <View style={{ marginBottom: 8, position: 'relative' }}>

            <View style={styles.inputButton}>
              {showPassword ? <Button
                mode="outlined"
                style={{ borderWidth: 0 }}
                onPress={() => setShowPassword(!showPassword)}
              >
                <EntIcon name="eye-off" color={"black"} style={{ fontSize: 25 }} />
              </Button> : <Button
                mode="outlined"
                style={{ borderWidth: 0 }}
                onPress={() => setShowPassword(!showPassword)}
              >
                <EntIcon name="eye" color={"black"} style={{ fontSize: 25 }} />
              </Button>}

            </View>
            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry={showPassword}
            />
          </View>
          <View style={{ marginBottom: 8, position: 'relative' }}>

            <View style={styles.inputButton}>
              {showPassword ? <Button
                mode="outlined"
                style={{ borderWidth: 0 }}
                onPress={() => setShowPassword(!showPassword)}
              >
                <EntIcon name="eye-off" color={"black"} style={{ fontSize: 25 }} />
              </Button> : <Button
                mode="outlined"
                style={{ borderWidth: 0 }}
                onPress={() => setShowPassword(!showPassword)}
              >
                <EntIcon name="eye" color={"black"} style={{ fontSize: 25 }} />
              </Button>}

            </View>
            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry={showPassword}
            />
          </View>
          <View style={{ marginTop: 6 }}>
            <Button
              mode="contained"
              style={{ paddingVertical: 6, backgroundColor: "#e38901" }}
              onPress={() => console.log('Pressed')}>
              Sign up
            </Button>
          </View>

          <View style={styles.bottomSec}>
            <Text style={{ color: "#8c8c8c" }}>Already have an account?</Text>
            <Button mode="text" color='black' style={{ marginLeft: -8 }} onPress={() => navigation.navigate('Login')}>
              Signin
            </Button>
          </View>
        </View>
      </View>
    </Layout >

  )
}

const styles = StyleSheet.create({
  head: {
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center'
  },
  inputButton: {
    position: 'absolute',
    top: "20%",
    right: "0%",
    zIndex: 9999
  },
  bottomSec: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  }
})

export default Register;