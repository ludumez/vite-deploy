import {  Routes,Route } from 'react-router-dom'
import {English} from './Pages/english.tsx'
import {Spanish} from './Pages/spanish.tsx'
import {AnotherPintEnglish} from './Pages/AnotherPintEnglish.tsx'
import { AnotherPintEnglishUI } from './Pages/AnotherPintEnglishUI.tsx'
import { BratzRythmAndStyle } from './Pages/BratzRythmAndStyle.tsx'




function App() {
  return (
    <Routes>
       <Route path='/' element={<English />} />
      <Route path='spanish' element={<Spanish />} />
      <Route path='anotherPint' element={<AnotherPintEnglish />} />
      <Route path='anotherPintUI' element={<AnotherPintEnglishUI />} />
      <Route path='BratzRythmAndStyle' element={<BratzRythmAndStyle />} />
    </Routes>
  );
}

export default App
