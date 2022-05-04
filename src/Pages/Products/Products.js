import { Link } from 'react-router-dom';
import useProducts from '../Hooks/useProducts.js/useProducts';
import Product from './Product/Product';
import './Products.css'

const Products = () => {
    const [products] = useProducts();
    return (
        <div id='products' className='container'>
            <h1 className='products-header mt-4'>Our Some Products</h1>
            <div className='products-container'>
                {
                    products.slice(0, 6).map(product => <Product key={product._id}
                        product={product}></Product>)
                }
            </div>
            <Link to='/allproducts' className='mt-4 btn btn-success w-75 manage-all-button'>Manage All</Link>
        </div>
    );
};

export default Products;