import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Subscribe = () => {
    const { user } = useContext(AuthContext);

    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();

        // Check if the user is not logged in
        if (!user) {

            Swal.fire({
                icon: 'info',
                title: 'Please Log In',
                text: 'You need to log in to subscribe.',
            });
            return;
        }


        if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please provide your email!',
            });
            return;
        }


        Swal.fire({
            icon: 'success',
            title: 'Subscribe Successful!',
            text: 'Your subscribe is done.',
        });


        setEmail('');
    };

    return (
        <div>
            <div className=' bg-[#2c1e64] py-12'>
                <h2 className="text-2xl text-center py-5 text-white font-bold">Subscribe Our Website</h2>
                {user ? (
                    <div className="form-control">
                        <form onSubmit={handleSubscribe}>
                            <div className="input-group justify-center">
                                <input
                                    type={email}
                                    placeholder="email"
                                    name="email"
                                    className="input input-bordered"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit" className="btn btn-error normal-case text-[#fff]">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <>
                        <div className="form-control">
                            <form>
                                <div className="input-group justify-center">
                                    <input
                                        type={email}
                                        placeholder="email"
                                        name="email"
                                        className="input input-bordered"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Link to="/login" className="btn btn-error normal-case text-[#fff]">
                                        Subscribe
                                    </Link>

                                </div>
                            </form>
                        </div>

                    </>
                )}
            </div>
        </div>
    );
};

export default Subscribe;
