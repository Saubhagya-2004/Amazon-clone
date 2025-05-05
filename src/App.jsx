import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import SearchReasult from './components/SearchReasult'
import Productpage from './components/Productpage'
import Checkout from './components/Checkout'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/search' element={<SearchReasult/>}/>
      <Route path='/productpage/:id' element={<Productpage/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
