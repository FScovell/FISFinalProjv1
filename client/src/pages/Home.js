import Dashboard from './Dashboard'
import Login from './Login'
import NavBar from '../components/NavBar'

export default function Home({user, handleSetUser, handleLogout}) {
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
                

            </>
        )
    }else{
        return(
            <h1> Shouldn't be here</h1>
        )
    }
}