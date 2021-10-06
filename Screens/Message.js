import React from 'react';
import {View, Text} from 'react-native';

let Message = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Message</Text>
    </View>
  );
};

export default Message;
