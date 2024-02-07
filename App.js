import './App.css';
import MyNav from './components/MyNav'
import { Route,Routes } from 'react-router-dom'
import Product from './pages/Product';
import Help from './pages/Help'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App"> 

   <MyNav/>
    <Routes>
    <Route path="/" element={ <Home/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="help" element={ <Help/> } />
        <Route path="product" element={ <Product/> } />
      
        <Route path="*" element={ <Home/> } />
        
     
    </Routes>
      
    </div>
  );
}

export default App;