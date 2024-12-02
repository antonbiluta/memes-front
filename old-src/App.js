import logo from './logo.svg';
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemePage from './pages/MemePage';
import Header from './components/Header/Header'

function App() {
  return (
    <>
    <Header title="OfficeMemes" />
    <Router>
        <Routes>
          <Route path="/memes/:chatPrefix" element={<MemePage/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
