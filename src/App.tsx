import { HashRouter as Router,Routes,Route } from 'react-router-dom'
import {English} from './Pages/english.tsx'
import {Spanish} from './Pages/spanish.tsx'
import {AnotherPintEnglish} from './Pages/AnotherPintEnglish.tsx'
import { AnotherPintEnglishUI } from './Pages/AnotherPintEnglishUI.tsx'



function App() {
return (
      <>  
      <Router>
            <Routes>
                <Route path='/' element={<English/>}/>  
                <Route path='/spanish' element={<Spanish/>}/>  
                <Route path='/anotherPint' element={<AnotherPintEnglish/>}/>  
                <Route path='/anotherPintUI' element={<AnotherPintEnglishUI/>}/>  
            </Routes>
      </Router>   
     </>
)
}

export default App
