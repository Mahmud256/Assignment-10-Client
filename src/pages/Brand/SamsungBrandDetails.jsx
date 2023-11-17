import React, { useState } from 'react';
import Navbar from '../../components/Headre/Navbar/NavBar';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../Footer/Footer';

const SamsungBrandDetails = () => {
    const loadedProducts = useLoaderData().filter(product => product.brand === "Samsung");
    const [products, setProducts] = useState(loadedProducts);

    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1300px]  mx-auto'>
                {products.length > 0 ? (
                    <>
                        <h1 className="text-center text-2xl font-bold p-4">Samsung Product</h1>
                        <div className="carousel w-full">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/0GdX83F/samsung-1.png" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/7Cg8pnk/samsung-2.png" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/CH2dkt6/samsung-3.png" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/mTWJYXt/samsung-4.png" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>

                        <div className='w-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            {
                                products.map(product => <ProductCard key={product._id} product={product} products={products} setProducts={setProducts}></ProductCard>)
                            }
                        </div>
                    </>
                ) : (
                    <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SamsungBrandDetails;