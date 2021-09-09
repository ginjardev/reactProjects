import React, {useState, useEffect} from 'react'
import './house.css'
import House from './House'
import Balance from './Balance'
import Loader from './Loader'
import axios from 'axios'

const HouseApp = () => {
    const [balance, setBalance] = useState(1000000)
    const [loading, setLoading] = useState(true)
    const [pillar, setPillar] = useState(0)

    useEffect(
        ()=> {
            axios.get('http://localhost:5000/pillar').
            then((response)=>{
                let pillarPrice = response.data.price
                let pillarAmount = balance / pillarPrice
                setPillar(pillarAmount)
            }).
            catch((error)=>console.error(error)).
            finally(()=> setLoading(false))
        }, [balance]
    )

    return (
        <div>
            <Balance setBalance={setBalance} balance={balance} />
            {loading? <Loader/> : <House pillar ={pillar} />}
        </div>
    )
}

export default HouseApp
