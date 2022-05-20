import Dashboard from './Dashboard'
import Login from './Login'
import NavBar from '../components/NavBar'
import { useState, useEffect} from 'react'

export default function Social({user, handleLogout, handleSetUser}) {
    const [piecesInfo, setPiecesInfo] = useState()
    useEffect(() => {
        fetch('/allWalks')
        .then (r => r.json())
        .then(data => setPiecesInfo(data))
        // .then(data => console.log(data))
    },[])

    useEffect(() =>{
        if(piecesInfo){
            piecesInfo.map(data => {
                if(data && user && data.user.id === user.id){
                    data.pieces.map(walkPiece => console.log(walkPiece))
                }
            })
        }
    },[piecesInfo])

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
                {/* <Dashboard user={user} handleLogout={handleLogout}/> */}

            </>
        )
    }else{
        return(
            <h1> Loading... </h1>
        )
    }
}