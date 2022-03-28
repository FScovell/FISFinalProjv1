import Dashboard from './Dashboard'
import Login from './Login'
import NavBar from '../components/NavBar'
import IndividualWalk from '../components/IndividualWalk'
import WalkForm from '../components/WalkForm'
import { useState, useEffect} from 'react'


export default function Walks({user, handleLogout, handleSetUser}) {
    const [walksInfo, setWalksInfo] = useState()
    const [formTab, setFormTab] = useState(false)
    useEffect(() => {
        fetch('/allWalks')
        .then (r => r.json())
        .then(data => setWalksInfo(data))
    },[])

    if (user && user.name === "Unauthorized"){
        return (
            <>
                <Login handleSetUser={handleSetUser}/>
            </>
        )
    }else if(user && user.name !== "Unauthorized"){
        if(formTab === true){
            return(
                <>
                    <NavBar user={user} handleLogout={handleLogout}/>
                    {walksInfo && walksInfo.map(walk => <IndividualWalk setFormTab={setFormTab} formTab={formTab} walk={walk} user={user} handleLogout={handleLogout}/>)}
                </>
            )
        }
        return(
            <>
                <NavBar user={user} handleLogout={handleLogout}/>
                {walksInfo && walksInfo.map(walk => <IndividualWalk setFormTab={setFormTab} formTab={formTab} walk={walk} user={user} handleLogout={handleLogout}/>)}
                <WalkForm user={user}/>
            </>
        )


    }else{
        return(
            <h1> Shouldn't be here</h1>
        )
    }
}