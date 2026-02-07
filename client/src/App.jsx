import React from 'react'
import Sidebar from './components/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Credits from './pages/Credits'

const App = () => {
  return (
    <>
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<ChatBox/>}/>
        <Route path='/credits' element={Credits}/>
        <Route path='/comunity' element={<Community/>}/>
      </Routes>
      </div>
      
    </>
  )
}

export default App
