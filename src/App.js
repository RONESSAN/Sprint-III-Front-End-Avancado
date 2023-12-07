import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Carrinho from "./pages/Carrinho";
import Finalizar from "./pages/Finalizar";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Products/>}/>
          <Route path="/Carrinho" element={<Carrinho/>}/>
          <Route path="/Finalizar" element={<Finalizar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
