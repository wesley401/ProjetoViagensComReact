import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import GuidePage from './pages/GuidePage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import StorePage from './pages/StorePage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/store' element={<StorePage />} />
    <Route path='/guide' element={<GuidePage />} />
    <Route path='/Contact' element={<ContactPage />} />
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App