import { View, Text } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/LoginScreen'

const App = () => {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems:'center'}}>
      <LoginScreen />
    </View>
  )
}

export default App