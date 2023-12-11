import './App.css';
import {Planets} from './Planets'

function App() {
  const planets = [
    {
      name: 'Mars',
      isGasPlanet: false
    },
    {
      name: 'Earth',
      isGasPlanet: false
    },
    {
      name: 'Jupiter',
      isGasPlanet: true
    },
    {
      name: 'Venus',
      isGasPlanet: false
    },
    {
      name: 'Neptune',
      isGasPlanet: true
    },
    {
      name: 'Uranus',
      isGasPlanet: true
    },
  ];

  return (
    <div className="App">
      {
      planets.map((planet) => {
        const {name, isGasPlanet} = planet;

        return <Planets name={name} isGasPlanet={isGasPlanet} />
      })
      }
    </div>
  );

};

export default App;
