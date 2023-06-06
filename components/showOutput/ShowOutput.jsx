import {View, Text, Image, TouchableOpacity ,Alert} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/global';
import {useSelector} from 'react-redux';

function ShowOutput() {
  const store = useSelector(store => store.reducers);
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
        {store.value.output}
      </Text>
      <TouchableOpacity onPress={()=>{Alert.alert('coming soon')}}>
        <Image
          style={{marginRight: 14}}
          source={require('../../images/more.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ShowOutput;
