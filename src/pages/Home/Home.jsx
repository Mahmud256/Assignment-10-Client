import Banner from '../../components/Headre/Banner/Banner';
import { useLoaderData } from 'react-router-dom';
// import Brand from '../Brand/Brand';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/Subscribe';
import Navbar from '../../components/Headre/Navbar/NavBar';
import BrandCard from '../Brand/BrandCard';
import Services from '../Services/Services';
import { useState } from 'react';



const Home = () => {

    const [isGreenBackground, setIsGreenBackground] = useState(false);

    // Function to toggle the background color
    const toggleBackgroundColor = () => {
        setIsGreenBackground(!isGreenBackground);
    };

    const loadedBrandProduct = useLoaderData();

    return (
        <div>
            <div className={isGreenBackground ? 'bg-slate-800' : ''}>

                <Navbar></Navbar>
                <Banner></Banner>
                <div className=''>
                    <div className='flex justify-center mt-4'>
                        <button className="theme-changee btn swap swap-rotate text-sm" onClick={toggleBackgroundColor}>
                            Dark
                        </button>
                    </div>

                    <BrandCard loadedBrandProduct={loadedBrandProduct}></BrandCard>

                </div>
            

            <Services></Services>
            <Subscribe></Subscribe>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;