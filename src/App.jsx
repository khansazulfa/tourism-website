import './App.css'
import MyCard from './components/MyCard'
import { Routes, Route, Outlet } from "react-router-dom"
import Home from './page/Home'
import Login from './page/Login'
import SignUp from './page/SignUp'
import NavBar from './components/NavBar'


function Header() {
  return (
    <>
      <Outlet />

    </>
  )
}

function App() {

  return (

    <Routes>
      <Route path='/' Component={Header}>
        <Route path='/' Component={Home} />

      </Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/register' Component={SignUp}></Route>
    </Routes>

  )
}



export default App
