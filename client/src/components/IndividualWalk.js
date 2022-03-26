
import Dashboard from '../pages/Dashboard'
import { useState, useEffect } from 'react'

export default function IndividualWalk({walk, user, handleLogout}) { 
    const [tab, setTab] = useState(false)
    function walkClickTester(){
        setTab(!tab)
    }
        if(tab === true){
            return(
                <>
                    <h1 onClick={walkClickTester} align="center">Walk css needed</h1>
                    <Dashboard walk={walk} user={user} handleLogout={handleLogout}/>
                </>
            )
        }else{
            return(
                <>
                    <h1 onClick={walkClickTester} align="center">Walk css needed</h1>
                </>
            )
        }
}