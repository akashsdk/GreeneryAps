// screens/DemoScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DemoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Demo Screen</Text>
      <Button title="Skip" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
