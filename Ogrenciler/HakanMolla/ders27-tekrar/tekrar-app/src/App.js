
import './App.css';

function App() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '74ce2f5724msh1e99219984ad861p14e2a5jsn85a0fac159b3',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };
  
  fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));




  return (
    <div className="App">





      <ul>
        <li>Test-1</li>
        <li>Test-1</li>
        <li>Test-1</li>
        <li>Test-1</li>
        <li>Test-1</li>
        <li>Test-1</li>

      </ul>
    </div>
  );
}

export default App;
