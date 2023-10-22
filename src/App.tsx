import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/Header'
import HomePage from './pages/home'
import WhoWeArePage from './pages/whoWeAre'
import ProjectsPage from './pages/projects'
import GaleryPage from './pages/galery'
import ContactPage from './pages/contact'
import LoginPage from './pages/login'
import Page404 from './pages/404'

function App() {

  return (
    <BrowserRouter>
      <HeaderComponent>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/quemsomos' element={<WhoWeArePage/>}/>
          <Route path='/projetos' element={<ProjectsPage/>}/>
          <Route path='/galeria' element={<GaleryPage/>}/>
          <Route path='/contato' element={<ContactPage/>}/>

          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        </HeaderComponent>
      </BrowserRouter>
  )
}

export default App
