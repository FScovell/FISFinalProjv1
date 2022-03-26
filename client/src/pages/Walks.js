import Dashboard from './Dashboard'
import Login from './Login'
import NavBar from '../components/NavBar'
import IndividualWalk from '../components/IndividualWalk'
import WalkForm from '../components/WalkForm'
import { useState, useEffect} from 'react'


export default function Walks({user, handleLogout, handleSetUser}) {
    const [formState, setFormState] = useState(false)
    const [walksInfo, setWalksInfo] = useState()
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
        return(
            <>
                <NavBar user={user} handleLogout={handleLogout}/>
                {walksInfo && walksInfo.map(walk => <IndividualWalk walk={walk} user={user} handleLogout={handleLogout}/>)}
                <WalkForm/>
                {/* <Dashboard user={user} handleLogout={handleLogout}/> */}
            </>
        )


    }else{
        return(
            <h1> Shouldn't be here</h1>
        )
    }
}