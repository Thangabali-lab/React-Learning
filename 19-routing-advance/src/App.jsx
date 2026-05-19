import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Course from './pages/Course'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Men from './pages/Men'
import Women from './pages/women'
import Kids from './pages/Kids'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './component/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Footer />
      <Routes>

        {/* Regular Routing----------------*/}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Course />} />
        {/*-----------------------------------*/}

        {/* Nested Routing------------------------ */}
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>
        {/*---------------------------------------*/}

        {/* Dynamic Routing---------------------- */}
        <Route path='course/:courseId' element={<CourseDetail />} />
        {/* ------------------------------------- */}


        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App