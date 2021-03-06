import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideMenu from '../components/SideMenu/SideMenu';
import { DataHandler, AutomaticEmailSend } from '../pages/pages';
import './App.css';

function App() {
  const [title, setTitle] = useState('Gerador de Planilhas');

  return (
    <BrowserRouter>
      <SideMenu onClickLink={(title) => setTitle(title)} />
      <main className="main">
        <h1 className="title">{title}</h1>
        <Routes>
          <Route path="/" element={<DataHandler />} />
          <Route
            path="/envio-de-email-automatico"
            element={<AutomaticEmailSend />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
