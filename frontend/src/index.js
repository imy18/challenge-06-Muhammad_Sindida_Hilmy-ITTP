// Code was written by Muhammad Sindida Hilmy
// Semua keterangan ada di README.md

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bulma/css/bulma.css";
import axios from "axios";

// default Credentials agar tidak perlu mengirimkan Credentials setiap kali melakukan request ke server
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);