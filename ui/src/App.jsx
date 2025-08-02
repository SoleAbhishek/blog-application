import { Route, Routes } from "react-router-dom"
import { Home } from "./screens/Home"
import './index.css';
import { Singup } from "./screens/Singup";
import { Login } from "./screens/Login";


function App() {

  return (
    <>
      <Routes>
        <Route path="/signup" element={<Singup />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
