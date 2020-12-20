import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>
    <App />

        <button>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

        <script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

      <script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>
    </button>

  </BrowserRouter>,
  document.getElementById('root')
);

