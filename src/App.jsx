import React from 'react'

import { routes } from './routes'
import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom'
import './index.css'
import DashBoard from './modules/dashboard/DashBoard'

import Forms from './modules/form/index'

const App=()=>{


  return (
 <>
    <DashBoard/>
    {/* <Forms/> */}
    </>
  )
}

export default App
