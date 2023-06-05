import {ScrollView} from 'react-native';
import Headers from './components/headers/Headers';
import ShowOutput from './components/showOutput/ShowOutput';
import GetInputs from './components/getInputs/GetInputs';
import Keyboard from './components/keyboard/Keyboard';

function App() {
  return (
    <ScrollView
      style={{
        backgroundColor: '#000000',
        padding: 30,
      }}>
      <Headers />
      <ShowOutput />
      <GetInputs />
      <Keyboard />
    </ScrollView>
  );
}

export default App;
