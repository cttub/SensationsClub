
import 'purecss/build/pure-min.css';
import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import './Styles/media.css';
import Home from './Components/Home';
import Layout from './Components/Layout';
import Service from './Components/Services';
import Apply from './Components/Apply';
import Drink from './Components/Drink';
import Visit from './Components/Visit';
import Book from './Components/Book';

function App() {
  return (
    <HashRouter>
        <Routes>
              <Route path = "/" element = {<Layout/>}>
                <Route index element = {<Home/>}/>
                <Route path = "Services" element = {<Service/>}/>
                <Route path = "Drinks" element = {<Drink/>}/>
                <Route path = "Visit" element = {<Visit/>}/>
                <Route path = "Apply" element = {<Apply/>}/>
                <Route path = "Book" element = {<Book/>}/>
              </Route>
          </Routes>
     </HashRouter>
  );
}

export default App;
