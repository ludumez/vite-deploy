import './App.css'
import { HashRouter as Router,Routes,Route } from 'react-router-dom'
import {English} from './Pages/english.tsx'
import {Home} from './Pages/home.tsx'
import {Page1} from './Pages/page1.tsx'
import {Page2} from './Pages/page2.tsx'

function App() {
return (
      <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>  
                <Route path='/page1' element={<Page1/>}/>  
                <Route path='/page2' element={<Page2/>}/>  
            </Routes>
      </Router>   
)
}

export default App
