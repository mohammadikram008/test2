import './App.css';
import DisplayWorkSheet from './components/DisplayWorkSheet';
import QuestionWidget from './components/QuestionWidget';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="bg-slate-200">
      {/* <QuestionWidget /> */}
      <Routes>

        <Route path="/" element={<QuestionWidget />} />
        <Route path="/displayworksheet" element={<DisplayWorkSheet />} />

      </Routes>
      {/* <BrowserRouter>
        <Routes>

          <Route path="/" element={<QuestionWidget />} />
          <Route path="/displayworksheet" element={<DisplayWorkSheet />} />

        </Routes>

      </BrowserRouter> */}
    </div >
  );
}

export default App;
