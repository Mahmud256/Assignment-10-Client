import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../../components/Headre/Navbar/NavBar';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pb-52 px-5 pt-3 h-full'>
                <h2 className="text-center text-2xl font-bold">About us</h2>
                <p className='text-xl'>MTE has been founded on 20 March 2023. From then to now, MTE has won the heart of many people and now is a country-wide renowned brand. That has been possible due to the hard work MTE has done to satisfy its customers. Having the aim to satisfy customers, providing customers with their required products, and being true to their motto, “Customers Come First,” has brought MTE to the top choice for E-Commerce Sites in Bangladesh and is recognized as the largest Computer and Tech retailer. MTE has over 700 employees and is growing more and more, working diligently to fulfill the Main Criteria of MTE’s Motto or Vision. MTE is located in 6 Central territories in Dhaka, Gazipur, Chattogram, Khulna, Rajshahi, and Rangpur. MTE has a total of 17 Physical outlets all over the country; selling genuine Tech products. Among them, 9 outlets are in Dhaka as it’s the capital city. MTE also has two branches in Chittagong; the commercial capital of Bangladesh. There is one Branch in Gazipur, one in Khulna, one in Rajshahi, and one Branch in Rangpur. Apart from the Physical Branches, We also have our successful E-Commerce website.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;