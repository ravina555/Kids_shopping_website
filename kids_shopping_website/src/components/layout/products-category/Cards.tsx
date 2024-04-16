'use client';
import React from 'react';
const Cardstructure = React.lazy(() => import('./Cardstructure'));

const Cards =()=>{
    return(
        <section className='cartBg' style={{padding:'50px'}}>
            <div className='Products' style={{textAlign:'center'}}>
                <Cardstructure/>
            </div>  
        </section>
    )
}

export default Cards;