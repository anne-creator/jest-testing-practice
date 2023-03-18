import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  //newButtonColor is changed based on the state of the button color
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const newButtonTextColor = disabled ? 'white' : 'black';

  useEffect(() => {
    const button = document.querySelector('button');
    button.style.color = newButtonTextColor;
  }, [disabled]);

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'grey' : buttonColor }} //change the button color to buttonColor
        onClick={() => setButtonColor(newButtonColor)} //change the newButtonColor when click
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onClick={() => setDisabled(!disabled)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
