import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

const LoginScreen = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
      placeholder="Digite seu email"
      style={styles.input}
      value={email}
      onChangeText={setEmail}
      />

      <TextInput
      placeholder='Digite sua senha'
      style={styles.input}
      secureTextEntry
      value={senha}
      onChangeText={setSenha}
      />

      <Button title='Entrar' />

      { /* Botão GitHub */}
      <TouchableOpacity style={[ styles.socialButtons, { backgroundColor: '#333'}]}>
        <Text style={styles.SocialText}>Entrar com GitHub</Text>
        <FontAwesome nome='github' size={20} color='#fff' style={styles.icon} />
      </TouchableOpacity>

      { /* Botão GitHub */}

     <TouchableOpacity style={[ styles.socialButtons, { backgroundColor: '#DB4437'}]}>
        <Text style={styles.SocialText}>Entrar com Google</Text>
        <FontAwesome nome='google' size={20} color='#fff' style={styles.icon} />
      </TouchableOpacity>


    </View>
  )
}

 const styles = StyleSheet.create({

    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }, 
    input: { width: '100%', borderBottomWidth: 1, marginBottom: 20, padding: 8 },
    orText: { marginVertical: 20, fontSize: 16, color: '#555'}, 
    socialButtons: { flexDirection: 'row', alignItems:'center', paddingVertical:12, width:'100%', marginVertical: 5, borderRadius: 5, justifyContent:'center'},
    icon: { marginRight: 10},
    SocialText: { color: '#fff', fontSize: 16, fontWeight:'bold'}
 })

export default LoginScreen