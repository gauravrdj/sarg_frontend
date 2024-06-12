import { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import axios from 'axios'
import { Loader } from './components/Loader';
import { HomePage } from './Home';
import { EditForm } from './Edit';
// import { DeleteButton } from './components/DeleteButton';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage></HomePage>}></Route>
    <Route path='/edit/:id' element={<EditForm></EditForm>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App
