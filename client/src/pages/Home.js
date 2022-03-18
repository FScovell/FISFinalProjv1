import Dashboard from './Dashboard'
import Login from './Login'
import Test from '../components/Test'

export default function Home({user, handleSetUser, handleLogout}) {
    if (user && user.name === "Unauthorized") return <Login handleSetUser={handleSetUser}/>

    return (
        <div>
            { user && user.name !== "Unauthorized" ? <Test user={user} handleLogout={handleLogout}/> : <h1> Shouldn't be here</h1>}
        </div>
    )
}