import React, {useState} from 'react'
import './App.css';

//Component Imports
import Header from './Components/Header'
import GameBody from './Components/GameBody'

function App() {

  //Initializes the player's money, default start is $100
  const [playerMoney, setPlayerMoney] = useState(100000)
  
  //Listed Here are all the shops available to the user
  // The upgrade factor allows for linear progression, the more the user buys of one shop, the higher the yield is
  const [lemonade, setLemonade] = useState({
    quantity: 0,
    price: 100,
    yield: 10,
    cooldown: 500,
    manager: false, 
    upgradeFactor: 5
  })
  const [newspaper, setNewspaper] = useState({
    quantity: 0,
    price: 500,
    yield: 50,
    cooldown: 2500,
    manager: false, 
    upgradeFactor: 25
  })
  const [carDealer, setCarDealer] = useState({
    quantity: 0,
    price: 10000,
    yield: 1000,
    cooldown: 5000,
    manager: false, 
    upgradeFactor: 500
  })
  const [oilRig, setOilRig] = useState({
    quantity: 0,
    price: 1000000,
    yield: 10000,
    cooldown: 30000,
    manager: false,
    upgradeFactor: 50000
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
