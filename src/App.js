import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/SharedPages/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
