
// SignUpScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const SignUp = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign Up Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default SignUp;
