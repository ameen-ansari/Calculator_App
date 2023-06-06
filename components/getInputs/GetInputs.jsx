import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import globalStyles from '../../styles/global';
import {useDispatch, useSelector} from 'react-redux';
import { decreaseInput } from '../../reduxStore/reducers';

export default function GetInputs() {
  const store = useSelector(store => store.slice);
  let dispatch = useDispatch();
  let reduceInput = () => {
    dispatch(decreaseInput())
  }
  return (
    <View style={[globalStyles.row, globalStyles.hEnd, globalStyles.vCenter]}>
      <TextInput
        style={[
          globalStyles.font32,
          globalStyles.white,
          {fontWeight: 'bold', marginRight: 35 ,
        overflow:'scroll'
        },
        ]}
        value={store.input}
        selectTextOnFocus={false}
        // editable={false}
      />
      <TouchableOpacity onPress={reduceInput}>
        <Image source={require('../../images/clear.png')} />
      </TouchableOpacity>
    </View>
  );
}
