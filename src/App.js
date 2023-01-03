
import './App.css';
import KeyCode from './components/KeyCode';
import CountRepetedWord from './components/CountRepetedWord';
import FlipImageWithArrowKey from './components/FlipImageWithArrowKey';
import SliderDesign from './components/SliderDesign';

function App() {
  return (
    <div className="App" >
     <SliderDesign/>
      <KeyCode/>
      <CountRepetedWord/>
      <FlipImageWithArrowKey/>
      

    </div>
  );
}

export default App;
