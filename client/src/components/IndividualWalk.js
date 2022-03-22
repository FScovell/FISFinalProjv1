
import Dashboard from '../pages/Dashboard'

export default function IndividualWalk({user, handleLogout}) {
    return(
        <>
            <Dashboard user={user} handleLogout={handleLogout}/>
        </>
    )
}