
import Dashboard from '../pages/Dashboard'
import { useState, useEffect } from 'react'

export default function IndividualWalk({setFormTab, formTab, walk, user, handleLogout}) { 
    const [tab, setTab] = useState(false)
    function walkClickTester(){
        setTab(!tab)
        setFormTab(!formTab)
    }
    function editor(){
        console.log(walk.description)
    }
        if(tab === true){
            return(
                <>
                    <h1 onClick={walkClickTester} align="center">{walk.name}</h1>
                    <Dashboard walk={walk} user={user} handleLogout={handleLogout}/>
                    <h1 align="center">Description: {walk.description}</h1>
                    <button align="center" onClick={() => editor()}>Edit</button>
                </>
            )
        }else{
            return(
                <>
                    <h1 onClick={walkClickTester} align="center">{walk.name}</h1>
                </>
            )
        }
}