import React, {useEffect} from 'react'

export default function GameBody(props) {

    // Purchase function that take the event of the purchase button and assigns the proper name
    const purchase = (event) => {
        let name = event.target.name
        console.log(props[name])
        
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
        console.log(props[event.target.name].cooldown)

        const coolDownTimer = setTimeout(() => {
            
        }, props[event.tagert.name].cooldown)

        if (props[event.target.name].quantity === 0) {
            alert('ERROR: you must purchase this revenue stream before generating money from it')
        } else {
            console.log(props.playerMoney)
            props.setPlayerMoney(props.playerMoney + (props[event.target.name].yield))
        }
        
    }
    const fireCoolDown = () => {

    }

    const autoGenerate = (moneyEvent) => {
        props.setPlayerMoney(props.playerMoney + (props.lemonade.yield))
        console.log(props.playerMoney)
    } 

    const hireManager = (event) => {
        props.setPlayerMoney(props.playerMoney - (props[event.target.name].price * 10))
        props.setLemonade({...props.lemonade,manager: true})
    }


    useEffect(() => {
        const timer = setTimeout(() => {
          props.lemonade.manager && autoGenerate()
        }, props.lemonade.cooldown);
        return () => clearTimeout(timer);
      });
    
    

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
                    <hr />
                    <p>Managers allow you to automate your production at the cost of an increased buy-in</p>
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
                            value={`$${props.newspaper.price * 10}`}
                            onClick={hireManager}
                        />
                    </label>
                    <label>Hire A Car Dealership Manager
                        <input
                            name='carDealer'
                            type='button'
                            value={`$${props.carDealer.price * 10}`}
                            onClick={hireManager}
                        />
                    </label>
                    <label>Hire An Oil Rig Manager
                        <input
                            name='oilRig'
                            type='button'
                            value={`$${props.carDealer.price * 10}`}
                            onClick={hireManager}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}
