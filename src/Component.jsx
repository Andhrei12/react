function Pet({ name }) {
  return <h2>This is {name}</h2>;
}

function Home() {
  return (
    <>
      <h1>Welcome to my cozy home!</h1>
      <Pet name="Mochi" />
      <Pet name="Bubbles" />
    </>
  );
}

createRoot(document.getElementById('root')).render(<Home />);