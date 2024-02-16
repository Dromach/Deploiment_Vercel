import logo from './logo.svg';
import './App.css';
import Blog from './blog/Blog.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Technology from "./blog/Technology";
import Design from './blog/Design';
import Culture from './blog/Culture';
import Business from './blog/Business';
import Politics from './blog/Politics';
import Opinion from './blog/Opinion';
import Science from './blog/Science';
import Health from './blog/Health';
import Style from './blog/Style';
import Travel from './blog/Travel';

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
