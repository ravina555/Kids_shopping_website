import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CheckboxLabels from '../CheckboxGroup';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import PageItemCards from './PageItemCards';
import {useSearchParams} from 'next/navigation';
import BasicModal from '../Modal';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const PageCatalouge=({shopBy , categoryName}:any)=>{
  const [products , setProducts] = useState([]);
  const [filter , setFilter] = useState([]);
  const [isLoading , setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const route = useSearchParams();
  useEffect(()=>{
     fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
     .then((res)=>{
      return res.json();
     }).then((data):any=>{
      setLoading(!isLoading)
      setProducts(data);
      
     })
  },[categoryName]);

  useEffect(()=>{
    if(filter[0] === 'By Cost'){
      let filterProducts = products.sort((a:any,b:any)=> a.price - b.price);
      setProducts(filterProducts);
    }else if(filter[0] === 'By Ratings'){
      let filterProducts = products.sort((a:any,b:any)=> b.rating.rate - a.rating.rate);
      setProducts(filterProducts);
    }
  },[filter, products]);


  const getCurrentProduct=products.filter((item:any)=>{
    return item.id === Number(route.get('product'));
  });
  
    return(
      <div style={{padding:'50px'}}> 
       <div className='catalouge' style={{textAlign:'center'}}>
       {route.get('product') && <BasicModal open={open} handleClose={handleClose} currentProduct={getCurrentProduct}/>}
        <Box sx={{ flexGrow: 1 }}>
        <Grid container  spacing={12} >
          <Grid item xs={12} sm={2}>
            <Item>
                <CheckboxLabels shopBy={shopBy} setFilter={setFilter} filter={filter} setProducts={setProducts} products={products}/>
            </Item>
          </Grid>
          <Grid item xs={12} sm={10}>
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
      </div>
    )
}

export default PageCatalouge;