import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const ProductDetailsCard = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, price, brand, rating, description, product_img } = product || {};

    const currentuser = user.email;
    const cartProduct = { _id, name, price, brand, rating, product_img, currentuser };

    const handleAddToCart  = event => {
        event.preventDefault();

        fetch('https://assignment-10-server-side-vert.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Product Add Success',
                        'You clicked the button!',
                        'success'
                    )
                }
            })
    };

    return (
        <div>
            <div className="p-2 flex flex-col lg:flex-row justify-around bg-base-100 px-2">
                <div className='meh lg:w-[440px]'>
                    <figure><img className='w-full' src={product_img} alt="" /></figure>
                    <div className='mah my-5 flex justify-between'>
                        <div className="card-actions justify-start relative">
                            <button onClick={handleAddToCart} className="btn bg-green-600 border-none normal-case text-xl font-semibold text-[#fff]">Add To Cart</button>
                        </div>
                        <div className="card-actions justify-start relative">
                            <p className="btn bg-red-600 border-none normal-case text-xl font-semibold text-[#fff]">Price: {price} $</p>
                            <p className="normal-case text-xl font-semibold text-[#ee4343]">Rating: {rating} </p>
                        </div>
                    </div>
                </div>

                <div className="cardbody w-330px lg:w-[730px] pb-10">
                    <h2 className="card-title text-2xl lg:text-4xl font-bold pb-3 capitalize">Product Name: {name}</h2>
                    <h2 className="card-title text-2xl lg:text-4xl font-bold pb-3 capitalize">Brand Name: {brand}</h2>
                    <p className='text-base'>Description: {description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;