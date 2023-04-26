import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../page/Home'
import AlanAdları from '../page/AlanAdları'
import Hosting from '../page/Hosting'
export default function Routers() {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/CaseVindoes'/>}/>
    <Route path='/CaseVindoes' element={<Home/>}/>
    <Route path='/alan-adlari' element={<AlanAdları/>}/>
    <Route path='/web-hosting-listeleme' element={<Hosting/>}/>
  </Routes>
  )
}
