import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router'
import { useState, useEffect } from 'react' 
import Signup from './pages/Signup'
import Home from './pages/Home'
import Walks from './pages/Walks'
import Profile from './pages/Profile'

function App() {
  const [ user, setUser ] = useState()
  const TEST = ""

  useEffect(() => {
    fetch('/me')
    .then(r => r.json())
    // .then(console.log)
    .then(setUser)
  }, [])



  function handleLogout() {
    fetch('/logout', { method: 'DELETE'})
    .then(res => res.json())
    // .then(console.log)
    .then(setUser)
  }


  return (
    <Router >
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile user={user} handleSetUser={setUser} handleLogout={handleLogout}/>}/>
        <Route path="/walks" element={<Walks user={user} handleSetUser={setUser} handleLogout={handleLogout}/>}/>
        <Route path="/" element={<Home user={user} handleSetUser={setUser} handleLogout={handleLogout}/>}/>
      </Routes>
    </Router>
  );
}

export default App;