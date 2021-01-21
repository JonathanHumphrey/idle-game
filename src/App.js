import React, {useState} from 'react'
import './App.css';

//Component Imports
import Header from './Components/Header'
import GameBody from './Components/GameBody'

function App() {
  const [name, setName] = useState('')
  const [playerMoney, setPlayerMoney] = useState(10000)
  const [lemonade, setLemonade] = useState({
    quantity: 0,
    price: 100,
    yield: 10,
    cooldown: .500,
    manager: false
  })
  const [newspaper, setNewspaper] = useState({
    quantity: 0,
    price: 500,
    yield: 50,
    cooldown: 2.5,
    manager: false
  })
  const [carDealer, setCarDealer] = useState({
    quantity: 0,
    price: 10000,
    yield: 1000,
    cooldown: 10,
    manager: false
  })
  const [oilRig, setOilRig] = useState({
    quantity: 0,
    price: 1000000,
    yield: 10000,
    cooldown: 60,
    manager: false
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
          name={name}
          setName={setName}
        />
      </div>
    </div>
  );
}

export default App;
