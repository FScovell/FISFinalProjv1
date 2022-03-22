import Dashboard from './Dashboard'
import Login from './Login'
import NavBar from '../components/NavBar'
import IndividualWalk from '../components/IndividualWalk'

export default function walks({user, handleLogout, handleSetUser}) {
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
                <IndividualWalk user={user} handleLogout={handleLogout}/>
                {/* <Dashboard user={user} handleLogout={handleLogout}/> */}

            </>
        )
    }else{
        return(
            <h1> Shouldn't be here</h1>
        )
    }
}