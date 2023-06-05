import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/global';

export default function GetInputs() {
  return (
    <View style={[globalStyles.row, globalStyles.hEnd, globalStyles.vCenter]}>
      <TextInput
        style={[
          globalStyles.font32,
          globalStyles.white,
          {fontWeight: 'bold', marginRight: 35},
        ]}
        defaultValue="6 + 18"
        editable={false}
      />
      <TouchableOpacity>
        <Image source={require('../../images/clear.png')} />
      </TouchableOpacity>
    </View>
  );
}
