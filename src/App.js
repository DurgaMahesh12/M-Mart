
import LandingPage from './Pages/LandingPage'
import {Routes,Route} from 'react-router-dom'
import MobilePage from './Pages/MobilePage'
import FurniturePage from './Pages/Furniturepage'
import AcPage from './Pages/Acspage'
import WomensPage from './Pages/Womenspage'
import MensPage from './Pages/Menspage'
import ComputerPage from './Pages/Computerpage'
import WatchePage from './Pages/watchpage'
import MobileSingle from './SinglePage/MobileSinglepage'
import ACSingle from './SinglePage/AcSInglepage'
import ComputerSingle from './SinglePage/ComputerSingle'
import Menssingle from './SinglePage/MenSingle'
import WomenSingle from './SinglePage/Womensingle'
import WatchSingle from './SinglePage/watchsingle'
import FurnitureSingle from './SinglePage/Furnituresingle'
import FridgePage from './Pages/Fridgepage'
import Fridgesingle from './SinglePage/FridgeSingle'
import CartPage from './Context/CartPage'
import SignUpPage from './UserAuthenticatePages/Signup'
import LoginPage from './UserAuthenticatePages/Login'
import NotFound from './Search/NotFound'
const App = () => {
  return (
    <div>
   <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/mobiles' element={<MobilePage/>}/>
      <Route path='/laptops' element={<ComputerPage/>}/>
      <Route path='/mens' element={<MensPage/>}/>
      <Route path='/womens' element={<WomensPage/>}/>
      <Route path='/ac' element={<AcPage/>}/>
      <Route path='/furniture' element={<FurniturePage/>}/>
      <Route path='/watches' element={<WatchePage/>}/>
      <Route path='/fridges' element={<FridgePage/>}/>
      <Route path="/mobile/:id" element={<MobileSingle />} />
      <Route path="/ac/:id" element={<ACSingle />} />
      <Route path="/laptop/:id" element={<ComputerSingle />} />
      <Route path="/mens/:id" element={<Menssingle/>}/>
      <Route path="/womens/:id" element={<WomenSingle/>}/>
      <Route path="/watches/:id" element={<WatchSingle/>}/>
      <Route path="/furniture/:id" element={<FurnitureSingle/>}/>
      <Route path="/fridge/:id" element={<Fridgesingle/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/not-found" element={<NotFound/>} />
      
   </Routes>
    </div>
  )
}

export default App
