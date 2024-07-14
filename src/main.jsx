import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>

 
<div className='bg-secondaryColor pt-10 pb-[300px]'>
<Header />
<Hero />
</div>
<Courses />
<Footer />
</div>
)
