import './quantityPicker.css';
import {useState} from 'react';

const QuantityPicker = () => {

    let [quantity, setQuantity] = useState(1); //the first thing (quantity) is the way we can read the useState, the second thing (setQuantity) is a function reference.

    const handleDecrease = () => {
        if (quantity>1)
            setQuantity(quantity-1);
    };
    const handleIncrease = () => {
        // quantity = quantity + 1; //we can't use this syntax because then we can't use the word quantity later.
        setQuantity(quantity+1);

    };

    return (<div className='quantityPicker'>
        <button onClick={handleDecrease}>-</button>
        <label>{quantity}</label>
        <button onClick={handleIncrease}>+</button>
    </div>

    );
};

export default QuantityPicker;