function Rocket() {
  const launch = (msg, e) => {
    alert(`${msg} — ${e.type} `);
  };

  return (
    <button onClick={(e) => launch("Liftoff!", e)}>
      Launch Rocket
    </button>
  );
}

createRoot(document.getElementById('root')).render(<Rocket />);