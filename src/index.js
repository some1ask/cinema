import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore } from 'redux';
import reducer from './store/reducer';
import {Provider} from 'react-redux';
import MovieCard from './components/MovieCard';
import { Layout } from './components/Layout';
import Favorites from './components/Favorites';



const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        
          <Route path='/' element={<App />}/>
          <Route path="movie/:id" element={<MovieCard />} />
          <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
