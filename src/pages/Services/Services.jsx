import React from 'react';
import { Truck, DollarSign, CreditCard } from 'react-feather';

const Services = () => {
    return (
        <div className='my-10 py-10'>
            <h1 className='text-3xl text-red-700 font-bold text-center py-12' data-aos="fade-up">Our Regular Services</h1>
            <div className='lg:w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                <div className="card lg:w-72 bg-base-100 border shadow">
                    <div className="card-body p-4 flex flex-col items-center">
                        <Truck className="text-4xl text-red-700 mb-4" />
                        <h2 className="card_title text-center text-xl font-medium rounded p-2">
                            Free Home Delivery
                        </h2>
                    </div>
                </div>
                <div className="card lg-w-72 bg-base-100 border shadow">
                    <div className="card-body p-4 flex flex-col items-center">
                        <DollarSign className="text-4xl text-red-700 mb-4" />
                        <h2 className="card_title text-center text-xl font-medium rounded p-2">
                            Cash On Delivery
                        </h2>
                    </div>
                </div>
                <div className="card lg:w-72 bg-base-100 border shadow">
                    <div className="card-body p-4 flex flex-col items-center">
                        <CreditCard className="text-4xl text-red-700 mb-4" />
                        <h2 className="card_title text-center text-xl font-medium rounded p-2">
                            0% EMI facility
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
