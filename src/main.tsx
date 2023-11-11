import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//PrimeReact Imports below
import { PrimeReactProvider } from 'primereact/api';
//import 'primereact/resources/themes/md-light-indigo/theme.css';   // theme
import 'primeflex/primeflex.css';                                   // css utility
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';                       // core css

ReactDOM.createRoot(document.getElementById('root')!).render(

    <PrimeReactProvider>
        <Router>
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </Router>
    </PrimeReactProvider>

)
