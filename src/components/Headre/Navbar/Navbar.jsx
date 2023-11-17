import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../../../assets/logo.png'
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    // const [isRedBackground, setIsRedBackground] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Display a success message with SweetAlert2
                Swal.fire({
                    icon: 'success',
                    title: 'Logout Successful!',
                    text: 'You have successfully logged out.',
                });
            })
            .catch(error => {
                console.error('Error during logout:', error);
                // Handle the error as needed

                // Display an error message with SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Logout failed. Please try again later.',
                });
            });
    };



    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // const toggleRedBackground = () => {
    //     setIsRedBackground(!isRedBackground);
    // };

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproduct">Add Product</NavLink></li>
        <li><NavLink to="/mycart">My Cart</NavLink></li>
    </>

    return (
        <nav className='bg-[#249bdf] p-4 md:p-8'>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2 items-center">
                    <img src={logoImage} alt="Logo" className="h-12" />
                    {/* <button className="theme-change btn swap swap-rotate text-sm" onClick={toggleRedBackground}>
                            Theme Change
                        </button> */}
                </div>

                {/* Mobile Menu Icon */}
                <div>
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden text-white focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden">
                            <ul className='menu'>

                                {navLinks}
                                {user ? (
                                    <>
                                        <div className=' flex flex-col items-center'>
                                            <div className="avatar">
                                                <div className="w-12 rounded-full">
                                                    <img className='im w-[25px]' src={user.photoURL} alt="" />
                                                </div>
                                            </div>

                                            <h2>{user.displayName}</h2>

                                        </div>
                                        <button onClick={handleLogOut} className="btn">Logout</button>

                                    </>
                                ) : (
                                    <>
                                        <Link to="/login">
                                            <button className="btn">Login</button>
                                        </Link>
                                        <Link to="/register">
                                            <button className="btn">Register</button>
                                        </Link>
                                    </>
                                )}
                            </ul>

                        </div>
                    )}
                    {/* <div className="lg:flex hidden gap-5">
                        
                    </div> */}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    <ul className="menu gap-2 menu-horizontal px-1">
                        {navLinks}
                        {user ? (
                            <>
                                <div className='flex flex-col gap-2 items-center'>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img className='im w-[25px]' src={user.photoURL} alt="" />
                                        </div>
                                    </div>
                                    <h2>{user.displayName}</h2>

                                </div>
                                <button onClick={handleLogOut} className="btn">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button className="btn">Login</button>
                                </Link>
                                <Link to="/register">
                                    <button className="btn">Register</button>
                                </Link>
                            </>
                        )}
                    </ul>
                </div>
                {/* <div className="flex lg:hidden gap-5">
                    
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
