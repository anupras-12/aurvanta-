import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from './Layouts/Layouts'
import HomePage from './Pages/HomePage/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path='about-us' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App