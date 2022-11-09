
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route } from "react-router-dom";

import Nbr from './Nbr';
import Home from './Home';
import Whatnew from './Whatnew';
import Explore from './Explore';
import Cliburn from './Cliburn';
import Hdr from './Hdr';
import Account from './Account';
import Stl from './Stl';
import Ourchannel from './Ourchannel';
import Cliburnchannel from './Cliburnchannel';
import Printshop from './Printshop';


import Footer from './Footer';
function App() {
  return (
   <>
   <div className='bkcolor'>
<Nbr></Nbr>

   <Routes>
   <Route path='/home' element={<Home />} />
   <Route path='/explore' element={<Explore/>} />
   <Route path='/cliburn' element={<Cliburn />} />
   <Route path='/hdr' element={<Hdr />} />
   <Route path='/account' element={<Account/>} />
   <Route path='/stl' element={<Stl/>} />
   <Route path='/whatnew' element={<Whatnew/>} />
   <Route path='/ourchannel' element={<Ourchannel/>} />
   <Route path='/cliburnchannel' element={<Cliburnchannel/>} />
   <Route path='/printshop' element={<Printshop/>} />
   
   </Routes>
   <Footer></Footer>
  </div>
   </>
  );
}

export default App;
