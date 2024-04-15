


import React from 'react';
import { View, Text, Button } from 'react-native';

const LogIn = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default LogIn;
