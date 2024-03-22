'use client';
import React,{Suspense, useEffect,useState} from 'react';
import {Grid , Box , Paper, CircularProgress} from '@mui/material';
import { styled } from '@mui/material/styles';
const Cardstructure = React.lazy(() => import('./Cardstructure'));

const Cards =()=>{
    const [Products,setProducts]=useState([]);


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{
                    setProducts(json);
        }); 
    },[])

    return(
        <section className='cartBg' style={{padding:'50px'}}>
            <div className='Products' style={{textAlign:'center'}}>
                    {Products.length > 0? <Cardstructure Products={Products}/> : <CircularProgress />}
               
            </div>           


        </section>
    )
}

export default Cards;