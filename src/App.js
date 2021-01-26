import React, {useState} from 'react'
import './App.css';

//Component Imports
import Header from './Components/Header'
import GameBody from './Components/GameBody'

function App() {
  const [playerMoney, setPlayerMoney] = useState(10000)
  const [lemonade, setLemonade] = useState({
    quantity: 0,
    price: 100,
    yield: 10,
    cooldown: 2000,
    manager: false, 
    upgradeFactor: 1
  })
  const [newspaper, setNewspaper] = useState({
    quantity: 0,
    price: 500,
    yield: 50,
    cooldown: 2500,
    manager: false, 
    upgradeFactor: 5
  })
  const [carDealer, setCarDealer] = useState({
    quantity: 0,
    price: 10000,
    yield: 1000,
    cooldown: 10000,
    manager: false, 
    upgradeFactor: 100
  })
  const [oilRig, setOilRig] = useState({
    quantity: 0,
    price: 1000000,
    yield: 10000,
    cooldown: 60000,
    manager: false,
    upgradeFactor: 1000
  })


  return (
    <div className="App">
      <Header
        playerMoney={playerMoney}
    
      />
      <div className='body'>
        <GameBody
          lemonade={lemonade}
          setLemonade={setLemonade}
          newspaper={newspaper}
          setNewspaper={setNewspaper}
          carDealer={carDealer}
          setCarDealer={setCarDealer}
          oilRig={oilRig}
          setOilRig={setOilRig}
          playerMoney={playerMoney}
          setPlayerMoney={setPlayerMoney}
        />
      </div>
    </div>
  );
}

export default App;
