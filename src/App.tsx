import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Start from './Start/Start';
import Lang from './Lang/Lang';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/:lang' element={<Lang />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
