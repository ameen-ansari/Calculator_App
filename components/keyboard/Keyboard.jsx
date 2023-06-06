import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import globalStyles from '../../styles/global';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput } from '../../reduxStore/reducers';

function Keyboard() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const {width} = Dimensions.get('window');
  let sendInput = e => {
    dispatch(updateInput(e))
  }
  return (
    <View
      style={{
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
      }}>
      <Text
        onPress={() => sendInput('AC')}
        style={[globalStyles.btnStyle, {backgroundColor: '#F55203'}]}>
        AC
      </Text>
      <Text
        onPress={() => sendInput('%')}
        style={[globalStyles.btnStyle, {backgroundColor: '#1A1A1A'}]}>
        %
      </Text>
      <Text
        onPress={() => sendInput('/')}
        style={[globalStyles.btnStyle, {backgroundColor: '#1A1A1A'}]}>
        /
      </Text>
      <Text
        onPress={() => sendInput('x')}
        style={[globalStyles.btnStyle, {backgroundColor: '#1A1A1A'}]}>
        x
      </Text>
      <Text
        onPress={() => sendInput('7')}
        style={[globalStyles.btnStyle, {backgroundColor: '#28282A'}]}>
        7
      </Text>
      <Text
        onPress={() => sendInput('8')}
        style={[globalStyles.btnStyle, {backgroundColor: '#28282A'}]}>
        8
      </Text>
      <Text
        onPress={() => sendInput('9')}
        style={[globalStyles.btnStyle, {backgroundColor: '#28282A'}]}>
        9
      </Text>
      <Text
        onPress={() => sendInput('-')}
        style={[globalStyles.btnStyle, {backgroundColor: '#1A1A1A'}]}>
        -
      </Text>
      <Text
        onPress={() => sendInput('4')}
        style={[globalStyles.btnStyle, {backgroundColor: '#28282A'}]}>
        4
      </Text>
      <Text
        onPress={() => sendInput('5')}
        style={[globalStyles.btnStyle, {backgroundColor: '#28282A'}]}>
        5
      </Text>
      <Text
        onPress={() => sendInput('6')}
        style={[globalStyles.btnStyle, {backgroundColor: '#28282A'}]}>
        6
      </Text>
      <Text
        onPress={() => sendInput('+')}
        style={[globalStyles.btnStyle, {backgroundColor: '#1A1A1A'}]}>
        +
      </Text>
      <Text
        onPress={() => sendInput('1')}
        style={[globalStyles.btnStyle, {backgroundColor: '#28282A'}]}>
        1
      </Text>
      <Text
        onPress={() => sendInput('2')}
        style={[globalStyles.btnStyle, {backgroundColor: '#28282A'}]}>
        2
      </Text>
      <Text
        onPress={() => sendInput('3')}
        style={[globalStyles.btnStyle, {backgroundColor: '#28282A'}]}>
        3
      </Text>
      <Text
        onPress={() => sendInput('=')}
        style={[
          globalStyles.btnStyle,
          {
            backgroundColor: '#F55203',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
        ]}></Text>
      <Text
        onPress={() => sendInput('+/-')}
        style={[
          globalStyles.btnStyle,
          {
            backgroundColor: '#F55203',
          },
        ]}>
        +/-
      </Text>
      <Text
        onPress={() => sendInput('0')}
        style={[globalStyles.btnStyle, {backgroundColor: '#1A1A1A'}]}>
        0
      </Text>
      <Text
        onPress={() => sendInput('.')}
        style={[globalStyles.btnStyle, {backgroundColor: '#1A1A1A'}]}>
        .
      </Text>
      <Text
        onPress={() => sendInput('=')}
        style={[
          globalStyles.btnStyle,
          {
            backgroundColor: '#F55203',
            marginTop: 0,
            height: 85,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        ]}>
        =
      </Text>
    </View>
  );
}

export default Keyboard;
