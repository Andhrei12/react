import { useState } from 'react';

const buttonStyle = {
  margin: '0.5rem 0',
  padding: '0.5rem 1rem',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  width: '200px'
};

function App() {
  const [colorInput, setColorInput] = useState('');

  const handleInputChange = (e) => {
    setColorInput(e.target.value);
  };

  const handleButtonClick = () => {
    alert("Sorry, it can't change color...");
  };

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: '2rem',
      fontFamily: 'Arial',
      boxSizing: 'border-box'
    }}>
      <div style={{ marginBottom: '2rem' }}>
        <p>Hello, My name is Andhrei Llamoso</p>
        <p>I am 20 years old</p>
        <p>Hello World!</p>
        <p>The result of 5 + 5 is: 10</p>
        <p>Apple</p>
      </div>

      <h2>Type any Color you want (it cant change color...)</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <input
          type="text"
          placeholder="Enter Color"
          value={colorInput}
          onChange={handleInputChange}
          style={{ padding: '0.5rem', marginBottom: '1rem', width: '200px' }}
        />
        <button onClick={handleButtonClick} style={buttonStyle}>Change Color</button>
        <button style={buttonStyle}>Click me.</button>
        <button style={buttonStyle}>Press me.</button>
        <button style={{ ...buttonStyle, color: 'blue' }}>I'm a button</button>
      </div>
    </div>
  );
}

export default App;

