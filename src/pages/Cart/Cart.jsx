import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Headre/Navbar/NavBar';
import CartCard from './CartCard';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Cart = () => {
    const { user } = useContext(AuthContext);

    const [allproducts, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-side-vert.vercel.app/cart')
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const currentUser = data.filter(item => item.currentuser === user.email);
                    setProducts(currentUser);
                }
            })
            .catch(error => console.error(error));
    }, [user.email]);

    // console.log(allproducts);

    const handleRemoveItem = id => {
        // Send a request to your API to remove the item
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://assignment-10-server-side-vert.vercel.app/cart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const updateProduct = allproducts.filter(product => product._id !== id);
                            setProducts(updateProduct);
                        }
                    })

            }
        })
    };

    return (
        <div>
            <Navbar />
            <h2 className='text-center text-2xl font-bold py-4'>Your Cart</h2>
            <div className='flex justify-center'>
                <div className='flex flex-col gap-5 items-center'>
                    <div className='grid lg:grid-cols-3 gap-12'>
                        {allproducts.map(product => (
                            <CartCard
                                key={product._id}
                                product={product}
                                onRemove={() => handleRemoveItem(product._id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
