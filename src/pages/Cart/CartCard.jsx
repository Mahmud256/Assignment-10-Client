import React from 'react';
import Swal from 'sweetalert2';

const CartCard = ({ product, onRemove }) => {
    const { _id, brand, name, product_img, price, rating } = product || {};

    // const { name, price, brand, rating, description, product_img } = product;
    // console.log(newProduct);
    
    const handleRemoveClick = () => {
        // Call the onRemove function passed from the parent component (Cart)
        onRemove();
    };

    return (
        <div>
            <div className="card lg:w-72 bg-base-100 border shadow">
                <figure>
                    <img className='h-40 w-96 lg:w-72 p-5' src={product_img} alt="" />
                </figure>
                <div className="card-body p-4">
                    {/* <h2 className="card_title text-xl font-medium rounded p-2">
                        {name}
                    </h2> */}
                    <h2 className="card_title text text-xl font-medium rounded p-2">
                       Brand: {brand}
                    </h2>
                    <h2 className="card_title text text-xl font-medium rounded p-2">
                        Rating: {rating}
                    </h2>
                    <h2 className="card_title text text-xl font-medium rounded p-2">
                        Price: {price} $
                    </h2>
                    <button
                        className='btn bg-red-500 hover:bg-red-700 text-white'
                        onClick={handleRemoveClick}
                    >
                        Remove This Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;