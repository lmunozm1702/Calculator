import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';

const App = () => (
  <div className="mainContainer">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
