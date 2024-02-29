import logo from './logo.svg';
import './App.css';
import Blog from './Blog.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Technology from "./Technology";
import Design from './Design';
import Culture from './Culture';
import Business from './Business';
import Politics from './Politics';
import Opinion from './Opinion';
import Science from './Science';
import Health from './Health';
import Style from './Style';
import Travel from './Travel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Blog />} />
          <Route path="technology" element={<Technology />} />
          <Route path="design" element={<Design />} />
          <Route path="culture" element={<Culture />} />
          <Route path="business" element={<Business />} />
          <Route path="politics" element={<Politics />} />
          <Route path="opinion" element={<Opinion />} />
          <Route path="science" element={<Science />} />
          <Route path="health" element={<Health />} />
          <Route path="style" element={<Style />} />
          <Route path="travel" element={<Travel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
