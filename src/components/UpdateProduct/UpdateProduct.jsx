import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from '../Headre/Navbar/NavBar';

const UpdateProduct = () => {

    const product = useLoaderData();

    const { _id, name, price, brand, rating, description, product_img } = product;


    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const product_img = form.photo.value;

        const updateproduct = { name, price, brand, rating, description, product_img };
        console.log(updateproduct);

        //send data to the server

        fetch(`https://assignment-10-server-side-vert.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Product Updated Sucess',
                        'You clicked the button!',
                        'success'
                    )
                }
            })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#331f64] p-4'>
                <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
                    <div className=''>
                        <h2 className='text-2xl fint-font-extrabold text-center'>Update Product</h2>
                    </div>
                    <form onSubmit={handleUpdateProduct}>
                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Photo URL:</label>
                            <input type="url" id="photo" name="photo" defaultValue={product.product_img} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Photo URL" />
                        </div>
                        <div className='flex gap-5'>
                            <div className='w-[50%]'>
                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Product Name:</label>
                                    <input type="text" name="name" defaultValue={name} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Name" />

                                </div>

                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Brand Name:</label>
                                    <input type="text" id="brand" defaultValue={brand} name="brand" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Brand Name" />
                                </div>
                            </div>

                            <div className='w-[50%]'>
                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Price:</label>
                                    <input type="number" id="price" defaultValue={price} name="price"  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Price" />
                                </div>

                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Rating:</label>
                                    <input type="number" id="rating" defaultValue={rating} name="rating"  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Rating" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Description:</label>
                            <textarea id="description" name="description" defaultValue={description}  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Short Description"></textarea>
                        </div>


                        <input type="submit" value="Update Product" className="btn btn-block hover:bg-green-500" />

                    </form >
                </div >
            </div>
        </div>
    );
};

export default UpdateProduct;