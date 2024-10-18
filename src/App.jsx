import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id/view' element={<View />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

