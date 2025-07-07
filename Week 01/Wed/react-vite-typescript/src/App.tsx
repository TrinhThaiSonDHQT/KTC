import './App.css';
import ButtonType1 from './components/ButtonType1/ButtonType1';
import ButtonType2 from './components/ButtonType2/ButtonType2';
import ButtonType31 from './components/ButtonType3/ButtonType31/ButtonType31';
import ButtonType32 from './components/ButtonType3/ButtonType32/ButtonType32';
import PropsButtonType1 from './props/PropsButtonType1';
import PropsButtonType2 from './props/PropsButtonType2';
import PropsButtonType32 from './props/PropsButtonType32';

function App() {
  return (
    <div className="container">
      <div className="row">
        {Object.entries(PropsButtonType1).map(([key, props]) => (
          <ButtonType1 key={key} {...props} />
        ))}
      </div>
      <div className="row">
        {Object.entries(PropsButtonType2).map(([key, props]) => (
          <ButtonType2 key={key} {...props} />
        ))}
      </div>
      <div className="row">
        {Object.entries(PropsButtonType32).map(([key, props]) => (
          <ButtonType32 key={key} {...props} />
        ))}
      </div>
      <div className="row">
        <ButtonType31 />
      </div>
    </div>
  );
}

export default App;
