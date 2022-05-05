import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddItems from './Pages/AddItems/AddItems';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Signup from './Pages/Login/Signup/Signup';
import MyItems from './Pages/MyItems/MyItems';
import ProductAllStock from './Pages/ProductAllStock/ProductAllStock';
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
        <Route path='/product/:id' element={
          <RequireAuth>
            <ProductArticle></ProductArticle>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/product/:id' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/addItems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ProductAllStock></ProductAllStock>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<Not404></Not404>}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
