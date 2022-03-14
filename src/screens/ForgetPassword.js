import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, StyleSheet, View } from 'react-native';

// Component 
import Layout from '../components/Layout/Auth';
import {
  TextInput,
  Button
} from 'react-native-paper';

const ForgetPassword = ({ navigation }) => {


  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Layout>
      <View>
        <Text style={styles.head}>Reset Password</Text>
        <View style={{ marginTop: 40 }}>
          <View style={{ marginBottom: 8 }}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  label="Email"
                />
              )}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: "Email Address is required"
                }
              }}
            />

          </View>
          <View style={{ marginTop: 6 }}>
            <Button
              mode="contained"
              style={{ paddingVertical: 6, backgroundColor: "#e38901" }}
              onPress={() => console.log('Pressed')}>
              Reset Password
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

export default ForgetPassword