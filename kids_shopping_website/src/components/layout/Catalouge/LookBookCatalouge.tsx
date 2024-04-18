import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import PageItemCards from './PageItemCards';
import BasicModal from '../Modal';
import {useSearchParams} from 'next/navigation';


const LookBookCatalouge=()=>{
  const [products , setProducts] = useState([]);
  const [isLoading , setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const route = useSearchParams();
  useEffect(()=>{
     fetch(`https://fakestoreapi.com/products`)
     .then((res)=>{
      return res.json();
     }).then((data):any=>{
      setLoading(!isLoading)
      setProducts(data);
      
     })
  },[]);

  const getCurrentProduct=products.filter((item:any)=>{
    return item.id === Number(route.get('product'));
  });
  
    return(
      <div style={{padding:'50px'}}> 
      {route.get('product') && <BasicModal open={open} handleClose={handleClose} currentProduct={getCurrentProduct}/>}
        <Box sx={{ flexGrow: 1 }}>
        <Grid container  spacing={12}>
          <Grid item xs={12} sm={12} md={16}>
          {isLoading ? <CircularProgress style={{position:'absolute', left:'50%' , top:'20%'}}/>:
            <Grid container spacing={12} >
              {products.map((items:any)=>{
                return <PageItemCards products={items} key={items.id} setOpen={setOpen}/>
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