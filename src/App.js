import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Footer from './Pages/SharedPages/Footer/Footer';
import Header from './Pages/SharedPages/Header/Header';
import Not404 from './Pages/SharedPages/Not404/Not404';
import ProductArticle from './Pages/SharedPages/ProductArticle/ProductArticle';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={<ProductArticle></ProductArticle>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Not404></Not404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
