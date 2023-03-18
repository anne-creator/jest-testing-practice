import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1'); //g is for multiple times, \B([A-Z])\means a upper case letter between the word,
}

function App() {
  return <h1>test single function</h1>;
}

export default App;
