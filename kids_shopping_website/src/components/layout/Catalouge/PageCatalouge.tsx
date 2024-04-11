import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CheckboxLabels from '../CheckboxGroup';
import { useEffect, useState } from 'react';
import { Typography , Button } from '@mui/material';
import PageItemCards from './PageItemCards';
import Skeleton from '@mui/material/Skeleton';

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
  useEffect(()=>{
     fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
     .then((res)=>{
      return res.json();
     }).then((data):any=>{
      setProducts(data)
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
  },[filter])
    return(
      <div style={{padding:'50px'}}> 
        <Box sx={{ flexGrow: 1 }}>
        <Grid container  spacing={12} columns={16}>
          <Grid item xs={4} sm={4}>
            <Item>
                <CheckboxLabels shopBy={shopBy} setFilter={setFilter} filter={filter}/>
            </Item>
          </Grid>
          <Grid item xs={12} sm={12}>
          <Grid container spacing={12} >
           {products.map((items:any)=>
              <PageItemCards products={items} key={items.id}/>
            )}
          </Grid>
         
        </Grid>
        </Grid>
      </Box>
      </div>
    )
}

export default PageCatalouge;