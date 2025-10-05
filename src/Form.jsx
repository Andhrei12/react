import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function AgeForm() {
  const [age, setAge] = useState("");

  function handleChange(e) {
    setAge(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (age >= 18) {
      alert("You are an adult");
    } else {
      alert("You are a minor");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your age:
        <input
          type="number"
          value={age}
          onChange={handleChange}
          min="0"
        />
      </label>
      <input type="submit" value="Check" />
    </form>
  );
}

createRoot(document.getElementById('root')).render(
  <AgeForm />
);
