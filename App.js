import { useState } from 'react';

function App() {
  const [city, setCity] = useState("")

  const searchForecastWeather = () => {
    fetch(`
    http://api.weatherapi.com/v1/current.json?key=603715d60fe446bb9a6185125212110=${city}
    `)
  }

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }
  return (
  
      <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <a className="navbar-brand" href="#search">
              EBAC Weather
            </a>
          </nav>
          <main className="container" id="search">
            <div className="jumbotron">
              <h1>Verifique a previsão do tempo da cidade escolhida</h1>
              <p className="row mb-4">
                Digite a cidade de interesse ne campo abaixo e clique em "Pesquisar" logo após
              </p>

              <div className="row mb-4">
                <div>
                <input type="text" className="form-control" value={city} onChange={handleCityChange} />
                </div>

                <button className="btn btn-lg btn-primary" onClick={searchForecastWeather}>Pesquisar</button>
              </div>
            </div>
          </main>
      </div>
   
  );
}

export default App;
