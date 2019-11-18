import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './assets/styles/main.scss';
import Main from "./screens/Main";

function App() {
  return (
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
