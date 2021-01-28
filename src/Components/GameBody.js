import React, {useState, useEffect} from 'react'

export default function GameBody(props, { setPlayerMoney, playerMoney }) {

    // Purchase function that take the event of the purchase button and assigns the proper name
    const purchase = (event) => {
        let name = event.target.name
        let quantity = props[name].quantity
        console.log(quantity)
        
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
                    console.log('here')
                }
            }
        }
    }

    // Generates money for the user when this is fired
    const generateMoney = (event) => {
        

        

        if (props[event.target.name].quantity === 0) {
            alert('ERROR: you must purchase this revenue stream before generating money from it')
        } else {
            let money = props.playerMoney
            let val = (props[event.target.name].yield + (props[event.target.name].quantity * props[event.target.name].upgradeFactor))
            console.log(val)
            props.setPlayerMoney(money += val)
        }
        
    }
    const fireCoolDown = () => {

    }


    // Had to hard code these functions
    // Money and Value variables allow for the += notation to work
    const autoGenerateLemonade = () => {
        console.log('lem')
        let money = props.playerMoney
        let value = (props.lemonade.yield + (props.lemonade.upgradeFactor * props.lemonade.quantity))
        props.setPlayerMoney(money += value)
        console.log()
    } 
    const autoGenerateNewspaper = () => {
        console.log('news')
        let money = props.playerMoney
        let value = (props.newspaper.yield + (props.newspaper.upgradeFactor * props.newspaper.quantity))
        props.setPlayerMoney(money += value)
        
    } 
    const autoGenerateCarDealer = () => {
        let money = props.playerMoney
        let value = (props.carDealer.yield + (props.carDealer.upgradeFactor * props.carDealer.quantity))
        props.setPlayerMoney(money += value)
        
    } 
    const autoGenerateOilRig = () => {
        let money = props.playerMoney
        let value = (props.oilRig.yield + (props.oilRig.upgradeFactor * props.oilRig.quantity))
        props.setPlayerMoney(money += value)
        
    } 

    
    // charges the user and then flips the bool value in the object to true 
    const hireManager = (event) => {
        if (event.target.name === 'lemonade') {
            props.setPlayerMoney(props.playerMoney - (props.lemonade.price * 10))
            props.setLemonade({ ...props.lemonade, manager: true })
        } 
        else if (event.target.name === 'newspaper') {
            props.setPlayerMoney(props.playerMoney - (props.newspaper.price * 10))
            props.setNewspaper({ ...props.newspaper, manager: true })
        }
        else if (event.target.name === 'carDealer') {
            props.setPlayerMoney(props.playerMoney - (props.carDealer.price * 10))
            props.setCarDealer({ ...props.carDealer, manager: true })
        }
        else if (event.target.name === 'oilRig') {
            props.setPlayerMoney(props.playerMoney - (props.oilRig.price * 10))
            props.setOilRig({ ...props.oilRig, manager: true })
        }
        
    }


    useEffect(() => {
        const timer = setTimeout(() => {
            props.lemonade.manager && autoGenerateLemonade()
        }, props.lemonade.cooldown);
        return () => clearTimeout(timer);
    });

    useEffect(() => {
        const timer2 = setTimeout(() => {
            props.newspaper.manager && autoGenerateNewspaper()
        }, props.newspaper.cooldown);
        return () => clearTimeout(timer2);
    });
    useEffect(() => {
        const timer = setTimeout(() => {
          props.carDealer.manager && autoGenerateCarDealer()
        }, props.carDealer.cooldown);
        return () => clearTimeout(timer);
    });
    useEffect(() => {
        const timer = setTimeout(() => {
          props.oilRig.manager && autoGenerateOilRig()
        }, props.oilRig.cooldown);
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
                                value={`+ $${props.lemonade.yield + (props.lemonade.quantity * props.lemonade.upgradeFactor)}`}
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
                                value={`+ $${props.newspaper.yield+ (props.newspaper.quantity * props.newspaper.upgradeFactor)}`}
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
                                value={`+ $${props.carDealer.yield + (props.carDealer.quantity * props.carDealer.upgradeFactor)}`}
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
                                value={`+ $${props.oilRig.yield + (props.oilRig.quantity * props.oilRig.upgradeFactor)}`}
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
                            value={`$${props.oilRig.price * 10}`}            
                            onClick={hireManager}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}
