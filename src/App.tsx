import {  Routes,Route } from 'react-router-dom'
import {English} from './Pages/english.tsx'
import {Spanish} from './Pages/spanish.tsx'
import {AnotherPintEnglish} from './Pages/AnotherPintEnglish.tsx'
import { AnotherPintEnglishUI } from './Pages/AnotherPintEnglishUI.tsx'
import { BratzRythmAndStyle } from './Pages/BratzRythmAndStyle.tsx'
import { TheGrinch } from './Pages/TheGrinch.tsx'
import { UnannouncedOG } from './Pages/OutrightGamesUnnanounced.tsx'
import { RaceToTheArctic } from './Pages/RaceToTheArctic.tsx'
import { ParadiseMarsh } from './Pages/ParadiseMarsh.tsx'
import { FableHospital } from './Pages/FableHospital.tsx'
import { ItCouldBeWetter } from './Pages/ItCouldBeWetter.tsx'
import { Coasterama } from './Pages/Coasterama.tsx'




function App() {
  return (
    <Routes>
       <Route path='/' element={<English />} />
      <Route path='coasterama' element={<Coasterama />} />
      <Route path='anotherPint' element={<AnotherPintEnglish />} />
      <Route path='anotherPintUI' element={<AnotherPintEnglishUI />} />
      <Route path='BratzRythmAndStyle' element={<BratzRythmAndStyle />} />
      <Route path='TheGrinch' element={<TheGrinch />} />
      <Route path='Unnanounced' element={<UnannouncedOG />} />
      <Route path='RaceToTheArctic' element={<RaceToTheArctic />} />
      <Route path='ParadiseMarsh' element={<ParadiseMarsh />} />
      <Route path='FableHospital' element={<FableHospital />} />
      <Route path='ItCouldBeWetter' element={<ItCouldBeWetter />} />
    </Routes>
  );
}

export default App
