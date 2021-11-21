import React from 'react'
import './App.css';

// Import React Router Dom
import {Routes, Route, BrowserRouter} from 'react-router-dom'

// Import Redux
import store from './Redux/Store';

// Import React Redux
import { Provider } from 'react-redux';

// Import Widgets
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Help from './Pages/Help';

function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>

              <Route path='/contact' element={<Contact/>}/>
              
              <Route path='/help' element={<Help/>}>
                <Route path='/help/name' element={<h1>Nome</h1>}/>
                <Route path='/help/email' element={<h1>Email</h1>}/>
                <Route path='/help/foto' element={<h1>Foto</h1>}/>
              </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
