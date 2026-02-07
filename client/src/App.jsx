import React from 'react'
import Sidebar from './components/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Chatbox from './components/Chatbox'
import Credits from './pages/Credits'
import Community from './pages/community'

const App = () => {
  return (
    <>
    <div>
      <div className='dark:bg-gradient-to-b-from-[#242124] to-[#000000] dark:text-white'>
      <div className='flex h-screen w-screen'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Chatbox/>}/>
        <Route path='/credits' element={<Credits/>}/>
        <Route path='/comunity' element={<Community/>}/>
      </Routes>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
