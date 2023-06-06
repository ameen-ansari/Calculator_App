import {
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import globalStyles from '../../styles/global';
import {useSelector, useDispatch} from 'react-redux';
import {updateInput} from '../../reduxStore/reducers';

function Keyboard() {
  const store = useSelector(store => store.reducers);
  const dispatch = useDispatch();
  let sendInput = e => {
    dispatch(updateInput(e));
  };
  return (
    <ScrollView style={style.parent}>
      <View style={style.parent2}>
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
          onPress={() => sendInput('ans')}
          style={[
            globalStyles.btnStyle,
            {
              backgroundColor: '#F55203',
            },
          ]}>
          Ans
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
    </ScrollView>
  );
}

let style = StyleSheet.create({
  parent: {
    marginTop: 10,
    marginBottom: 50,
  },
  parent2: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default Keyboard;
