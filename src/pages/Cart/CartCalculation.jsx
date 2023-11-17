import React from 'react';

const CartCalculation = ({ allproducts }) => {
    // Calculate the total price based on the allproducts array
    const calculatedTotalPrice = allproducts.reduce((total, product) => {
        return total + product.price;
    }, 0);

    return (
        <div id="calculation-entry">
            <h6 className='text-xl font-medium py-2'>Total Price: <span id="total-price">{calculatedTotalPrice} $</span></h6>
        </div>
    );
};

export default CartCalculation;
