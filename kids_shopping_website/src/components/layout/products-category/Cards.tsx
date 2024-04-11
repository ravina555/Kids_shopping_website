'use client';
import React, {useEffect,useState} from 'react';
import {CircularProgress} from '@mui/material';
const Cardstructure = React.lazy(() => import('./Cardstructure'));

const Cards =()=>{
    // const [Products,setProducts]=useState([]);


    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products')
    //             .then(res=>res.json())
    //             .then(json=>{
    //                 setProducts(json);
    //     }); 
    // },[Products])

    return(
        <section className='cartBg' style={{padding:'50px'}}>
            <div className='Products' style={{textAlign:'center'}}>
                <Cardstructure/>
            </div>  
        </section>
    )
}

export default Cards;