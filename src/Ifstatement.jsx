import { createRoot } from 'react-dom/client';

function Weather() {
  const temp = 30;
  return (
    <h1>{temp > 25 ? "It's Hotg" : "It's Cold"}</h1>
  );
}

createRoot(document.getElementById('root')).render(
  <Weather />
);
