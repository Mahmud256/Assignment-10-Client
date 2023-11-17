import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductDetailsCard from './ProductDetailsCard';
import Navbar from '../../components/Headre/Navbar/NavBar';

const ProductDetails = () => {
    const [product, setProduct] = useState()
    const { _id } = useParams()
    const details = useLoaderData()
    console.log("Is:", details);

    useEffect(() => {
        const findProduct = details?.find((product) => product._id == _id);
        setProduct(findProduct);
        console.log("CS: ",findProduct);
    }, [_id, details])
    return (
        <div>
            <Navbar></Navbar>
            <ProductDetailsCard product={product}></ProductDetailsCard>
        </div>
    );
};

export default ProductDetails;