function Car() {
  const btnStyle = {
    backgroundColor: 'blue',
    color: 'white'
  };

  return (
    <button
      style={btnStyle}
      className="btn-primary"
      onClick={() => alert('Clicked!')}
    >
      Click me
    </button>
  );
}