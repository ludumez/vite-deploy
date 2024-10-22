import { HashRouter as Router,Routes,Route } from 'react-router-dom'
import {English} from './Pages/english.tsx'
import {Spanish} from './Pages/spanish.tsx'



function App() {
return (
      <>  
      <Router>
            <Routes>
                <Route path='/' element={<English/>}/>  
                <Route path='/spanish' element={<Spanish/>}/>  
            </Routes>
      </Router>   
     </>
)
}

export default App
