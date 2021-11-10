import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import app from '../services/api'

const Senhas = () => {
  const navigation = useNavigation()
  const [senha, setSenha] = useState('')
  
  useEffect( () => {

  }, [])

  const getCep = async () =>{
    const result = await app.get('https://viacep.com.br/ws/65066350/json/')
    console.log(result)

  }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

      <View>
      <TextInput
            placeholder="Email"
            placeholderTextColor="#fff" 
            value={ senha }
            onChangeText={text => setSenha(text)}
            style={styles.input}
          />
      </View>
    </View>
  )
}

export default Senhas

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})