import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/global';

function ShowOutput() {
  return (
    <View
      style={[
        globalStyles.row,
        {justifyContent: 'flex-end', alignItems: 'center', marginTop: 100},
      ]}>
      <Text
        style={[
          globalStyles.white,
          globalStyles.bold,
          {fontSize: 68, marginRight: 44},
        ]}>
        24
      </Text>
      <TouchableOpacity>
        <Image
          style={{marginRight: 14}}
          source={require('../../images/more.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ShowOutput;
