import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = () => {
    // const { id, brand_name, brand_image } = brandp || {};
    return (
        <div className='my-10 py-10'>
            <h1 className='text-3xl text-red-700 font-bold text-center py-12'>Our Regular Brands</h1>
            <div className='lg:w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                <Link to="/apple">
                    <div className="card lg:w-72 bg-base-100 border shadow">
                        <figure>
                            <img className="h-40 w-96 lg:w-72 p-5" src="https://i.ibb.co/ZVHzMx5/apple.png" alt="Apple" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card_title text-center text-xl font-medium rounded p-2">
                                Apple
                            </h2>
                        </div>
                    </div>
                </Link>

                <Link to="/samsung">
                    <div className="card lg:w-72 bg-base-100 border shadow">
                        <figure>
                            <img className="h-40 w-96 lg:w-72 p-5" src="https://i.ibb.co/gF8y9kc/Samsung.png" alt='Samsung' />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card_title text-center text-xl font-medium rounded p-2">
                                Samsung
                            </h2>
                        </div>
                    </div>
                </Link>

                <Link to="/sony">
                    <div className="card lg:w-72 bg-base-100 border shadow">
                        <figure>
                            <img className="h-40 w-96 lg:w-72 p-5" src="https://i.ibb.co/K5xT3kw/Sony.png" alt="Sony" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card_title text-center text-xl font-medium rounded p-2">
                                Sony
                            </h2>
                        </div>
                    </div>
                </Link>

                <Link to="/singer">
                    <div className="card lg:w-72 bg-base-100 border shadow">
                        <figure>
                            <img className="h-40 w-96 lg:w-72 p-5" src="https://i.ibb.co/JsDtPds/Singer-Logo.png" alt='Singer' />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card_title text-center text-xl font-medium rounded p-2">
                                Singer
                            </h2>
                        </div>
                    </div>
                </Link>

                <Link to="/lg">
                    <div className="card lg:w-72 bg-base-100 border shadow">
                        <figure>
                            <img className="h-40 w-96 lg:w-72 p-5" src="https://i.ibb.co/c2Q6JPY/lg.png" alt="LG" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card_title text-center text-xl font-medium rounded p-2">
                                LG
                            </h2>
                        </div>
                    </div>
                </Link>

                <Link to="/intel">
                    <div className="card lg:w-72 bg-base-100 border shadow">
                        <figure>
                            <img className="h-40 w-96 lg:w-72 p-5" src="https://i.ibb.co/V9rvydR/intel.png" alt='Intel' />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card_title text-center text-xl font-medium rounded p-2">
                                Intel
                            </h2>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default BrandCard;