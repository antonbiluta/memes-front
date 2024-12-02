import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css'
import MemePage from './components/MemePage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/memes/:chatPrefix" element={<MemePage/>} />
            </Routes>
        </Router>
    );
};

export default App;
