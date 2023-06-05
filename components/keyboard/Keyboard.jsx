import {View, Text, Dimensions, StyleSheet} from 'react-native';
import globalStyles from '../../styles/global';

function Keyboard() {
  const {width} = Dimensions.get('window');
  return (
    <View
      style={[
        globalStyles.row,
        {
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        },
      ]}>
      {/* <Text style={[style.btnStyle, {backgroundColor: '#F55203'}]}>AC</Text>
      <Text style={[style.btnStyle, {backgroundColor: '#1A1A1A'}]}>%</Text>
      <Text style={[style.btnStyle, {backgroundColor: '#1A1A1A'}]}>/</Text>
      <Text style={[style.btnStyle, {backgroundColor: '#1A1A1A'}]}>x</Text> */}
    </View>
  );
}

const style = StyleSheet.create({
  btnStyle: {
    width: '22%',
    height: 77,
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    color: '#FFFFFF',
    fontSize: 32,
    lineHeight: 38,
    fontFamily: 700,
  },
});

export default Keyboard;
