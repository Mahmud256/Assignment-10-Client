import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, products, setProducts }) => {
    const { _id, name, price, brand, rating, description, product_img } = product;

    return (
        <div>
            <div className="card w-72 lg:w-[600px] lg:card-side bg-base-100">
                <figure><img className='' src={product_img} alt="Product" /></figure>
                <div className="card-body lg:w-[59rem] p-4">
                    <h2 className="card_title text-xl font-medium rounded p-2">
                        Product Name: {name}
                    </h2>
                    <h2 className="card_title text-xl font-medium rounded p-2">
                        Brand Name: {brand}
                    </h2>

            {/* <p className="text-xl font-semibold">Description: {description}</p> */}
            <p className="text-xl font-semibold">Rating: {rating}</p>
                    <p className="text-xl font-semibold">Price: ${price}</p>

                    <div className="card-actions justify-start">
                    <Link to={`/details/${_id}`}>
                        <button className="btn bg-green-700 hover:bg-green-700 normal-case text-lg font-semibold text-[#fff]"> View Details</button>
                        </Link>

                    <Link to={`/updateproduct/${_id}`}>
                    <button className="btn bg-orange-600 hover:bg-orange-600 normal-case text-lg font-semibold text-[#fff]">Update</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;