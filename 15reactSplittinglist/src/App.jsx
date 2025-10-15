import "./App.css";

function App() {
  const array = [1, 3, 5, 7, 8, 9, 6];

  const oldarray = Math.floor(array.length / 2);
  const first = array.slice(0, oldarray);
  const second = array.slice(oldarray);

  return (
    <>
      <div>
        {JSON.stringify(first)} {JSON.stringify(second)}
        {first
          .filter((num) => num === 5)
          .map((num) => (
            <h1 key={num}>
              {JSON.stringify(num + 1)} {typeof num}
            </h1>
          ))}
        {JSON.stringify(first)} {JSON.stringify(second)}
        {typeof JSON.stringify(first.filter((num) => num === 5))}
      </div>
    </>
  );
}

export default App;
