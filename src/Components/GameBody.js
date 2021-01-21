import React, {useState, useEffect} from 'react'

export default function GameBody(props) {
    const [moneyEvent, setMoneyEvent] = useState({})

    // Purchase function that take the event of the purchase button and assigns the proper name
    const purchase = (event) => {
        let name = event.target.name
        console.log(props[name].price)
        
        if (props[name] !== undefined) {
            if (props[name].price > props.playerMoney){
                alert('ERROR: Unable to purchase: inadequate funds!')
            }else{
                if (!props[name].quantity) {
                    props[name].quantity = 1
                    props.setPlayerMoney(props.playerMoney - props[name].price)
                }
                else {
                    props[name].quantity += 1
                    props.setPlayerMoney(props.playerMoney - props[name].price)
                }
            }
        }
    }

    // Generates money for the user when this is fired
    const generateMoney = (event) => {
        if (props[event.target.name].quantity === 0) {
            alert('ERROR: you must purchase this revenue stream before generating money from it')
        } else {
            console.log()
            props.setPlayerMoney(props.playerMoney + (props[event.target.name].yield))
        }
        
    }


    const hireManager = (event) => {
        props[event.target.name].manager = true
        console.log(props[event.target.name].manager)
        props.setPlayerMoney(props.playerMoney - (props[event.target.name].price * 10))
    }
    

    return (
        <div className='gameBody'>
            <div className='wrapper'>
                <div className='leftBody'>
                    <div className='gameContainer'>
                        <h4>Lemonade Stand: ${props.lemonade.price.toLocaleString()}</h4>
                        <label>Buy! 
                            <input
                                name='lemonade'
                                onClick={purchase}
                                type='button'
                                value={`x${props.lemonade.quantity}`}
                            />
                        </label>

                        <label>Generate! 
                            <input
                                name='lemonade'
                                onClick={generateMoney}
                                type='button'
                                value={`+ $${props.lemonade.yield}`}
                            />
                        </label>
                    </div>
                    <div className='gameContainer'>
                        <h4>Newspaper Stand: ${props.newspaper.price.toLocaleString()}</h4>
                        <label>Buy
                            <input
                                name='newspaper'
                                onClick={purchase}
                                type='button'
                                value={`x${props.newspaper.quantity}`}
                            />
                        </label>

                        <label>Generate! 
                            <input
                                name='newspaper'
                                onClick={generateMoney}
                                type='button'
                                value={`+ $${props.newspaper.yield}`}
                            />
                        </label>
                    </div>

                    <div className='gameContainer'>
                    <h4>Car Dealership: ${props.carDealer.price.toLocaleString()}</h4>
                        <label>Buy
                            <input
                                name='carDealer'
                                onClick={purchase}
                                type='button'
                                value={`x${props.carDealer.quantity}`}
                            />
                        </label>

                        <label>Generate! 
                            <input
                                name='carDealer'
                                onClick={generateMoney}
                                type='button'
                                value={`+ $${props.carDealer.yield}`}
                            />
                        </label>
                    </div>

                    <div className='gameContainer'>
                        <h4>Oil Rig: ${props.oilRig.price.toLocaleString()}</h4>
                        <label>Buy
                            <input
                                name='oilRig'
                                onClick={purchase}
                                type='button'
                                value={`x${props.oilRig.quantity}`}
                            />
                        </label>

                        <label>Generate! 
                            <input
                                name='oilRig'
                                onClick={generateMoney}
                                type='button'
                                value={`+ $${props.oilRig.yield}`}
                            />
                        </label>
                    </div>

                </div>
                <div className='rightBody'>
                    <h3>Managers</h3>
                    <label>Hire A Lemonade Stand Manager
                        <input
                            name='lemonade'
                            type='button'
                            value={`$${props.lemonade.price * 10}`}
                            onClick={hireManager}
                        />
                    </label>
                    <label>Hire A Newspaper Stand Manager
                        <input
                            name='newspaper'
                            type='button'
                            value={`$${props.lemonade.price * 10}`}
                            onClick={hireManager}
                        />
                    </label>
                    <label>Hire A Car Dealership Manager
                        <input
                            name='carDealer'
                            type='button'
                            value={`$${props.lemonade.price * 10}`}
                            onClick={hireManager}
                        />
                    </label>
                    <label>Hire An Oil Rig Manager
                        <input
                            name='oilRig'
                            type='button'
                            value={`$${props.lemonade.price * 10}`}
                            onClick={hireManager}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}
