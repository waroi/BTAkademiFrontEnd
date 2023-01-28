import './App.css';

function App() {
  
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "043194262amshb122440d0a90c10p183b05jsna0a228e3be2d",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(
      "https://imdb8.p.rapidapi.com/actors/get-all-images?nconst=nm0001667",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

  return (
    <div className="App">
     <ul>
      <li>Test 1</li>
      <li>Test 2</li>
      <li>Test 3</li>
      <li>Test 4</li>
      <li>Test 5</li>
     </ul>
    </div>
  );
}

export default App;
