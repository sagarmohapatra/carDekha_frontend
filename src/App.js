
import Fevorite from './component/fevorite/Fevorite';
import Header from './component/header/Header';
import Home from './component/home/Home';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <Router> */}
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route path='/Fevorite' element={<Fevorite />} />
        </Routes>
        {/* </Router> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
