//React Router Setup
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React from "react";
import "./App.css";

//Route Pages

import Read from "./components/Read/Read";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Photo from './components/Photo/Photo';
import Gk from './components/Gk/Gk';
import News from './components/News/News';
import Game from './components/Game/Game';
import Movie from './components/Movie/Movie';
import Tic from './components/Tic/Tic';
import Quiz from './components/Quiz/Quiz';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="containter">
          <Routes>

         
          <Route exact path="/" element={<Read/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/Book" element={<Book/>}/>
          <Route exact path="/Photo" element={<Photo/>}/>
          <Route exact path="/Gk" element={<Gk/>}/>
          <Route exact path="/News" element={<News/>}/>
          <Route exact path="/Game" element={<Game/>}/>
          <Route exact path="/Movie" element={<Movie/>}/>
          <Route exact path="/Tic" element={<Tic/>}/>
          <Route exact path="/Quiz" element={<Quiz/>}/>
      
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
