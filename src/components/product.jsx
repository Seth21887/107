import './product.css';
import QuantityPicker from './quantityPicker';

// function Product(){
//     return(<div className='product'>

//     </div>);
// }

//Arrow function: this is sort of an anonymous function as it is not named, therefore we use a constant variable so something can be stored.

//in jsx files, the 'this' instruction may not work in normal functions, but they will always work in arrow functions.

const Product = () => {
    return(<div className='product'>
        <img src='https://picsum.photos/200/300'></img>
        <h2>Title</h2>
        <label>Price</label>
        <label>Total</label>
        <QuantityPicker />
        <button>Add</button>
    </div>);
};

export default Product;