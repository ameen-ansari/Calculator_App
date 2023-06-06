import {View, Image, TouchableOpacity , Alert} from 'react-native';
import settingIcon from '../../images/settings.png';
function Headers() {
  return (
    <View>
      <TouchableOpacity style={{width:24,height:24}} onPress={()=>{Alert.alert('coming soon')}}>
        <Image source={settingIcon} />
      </TouchableOpacity>
    </View>
  );
}

export default Headers;
