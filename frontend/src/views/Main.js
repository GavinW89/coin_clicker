import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useHistory } from "react-router-dom"
import quarter from "../images/quarter.png"
import "../style/style.css"
axios.defaults.withCredentials = true;

const Main = () => {
    const [coins, setCoins] = useState(0)
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/user/findone', {withCredentials:true})
            .then(res => {
                console.log(`User Established`)
                console.log(res)
                setCoins(res.data.results.coins)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    useEffect(() => {
        console.log(`Coins: ${coins}`)
    },[])

    const updateCoins = () => {
        console.log('update coins')
        axios.put('http://localhost:8000/api/user/setcoins', {'coins': coins})
                .then(res => {
                    console.log('updated coins')
                })
                .catch(err => {
                    console.log(err)
                })
        }

    const handleIncrement = () => {
        document.getElementById('quarterImg').className='quarterAni'
        setCoins(coins + 1)
        updateCoins()
    }

    const openShop = () => {
        console.log("OPEN SHOP")

    }

    return(
        <div>
            <Link to="/shop"><button onClick={openShop}>Shop</button></Link>
            <h1>{coins}</h1>
            <img src={quarter} alt="React Logo" onClick={handleIncrement} className="quarter" id="quarterImg"/>
        </div>
    )
}

export default Main;