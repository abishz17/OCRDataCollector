import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Data from './pages/Data/Data'
import {Routes, Route} from 'react-router-dom'
import dic from "./assets/dictionary"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/data' element={<Data data={dic}/>}/>
        </Routes>
       
    </div>
  )
}

export default App;