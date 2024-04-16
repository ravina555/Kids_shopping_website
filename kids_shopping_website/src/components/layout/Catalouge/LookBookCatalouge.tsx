import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import PageItemCards from './PageItemCards';


const LookBookCatalouge=()=>{
  const [products , setProducts] = useState([]);
  const [isLoading , setLoading] = useState(true);
  useEffect(()=>{
     fetch(`https://fakestoreapi.com/products`)
     .then((res)=>{
      return res.json();
     }).then((data):any=>{
      setLoading(!isLoading)
      setProducts(data);
      
     })
  },[]);

  
    return(
      <div style={{padding:'50px'}}> 
        <Box sx={{ flexGrow: 1 }}>
        <Grid container  spacing={12} columns={16}>
          <Grid item xs={12} sm={12} md={16}>
          {isLoading ? <CircularProgress style={{position:'absolute', left:'50%' , top:'20%'}}/>:
            <Grid container spacing={12} >
              {products.map((items:any)=>{
                return <PageItemCards products={items} key={items.id}/>
              }
            )}
            </Grid>
          }
        </Grid>
        </Grid>
      </Box>
      </div>
    )
}

export default LookBookCatalouge;