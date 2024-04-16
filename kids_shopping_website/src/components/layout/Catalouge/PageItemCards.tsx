import React from 'react';
import { Grid , Paper , Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',height:'300px'
  });

const PageItemCards=({products}:any)=>{

    return (
      <Grid item sm={4} key={products.name} xs={12}>
      <Item style={{cursor:'pointer'}}>
        <Img alt={products.description} src={products.image} />
        <Typography variant='caption'>{products.title}</Typography>
       
      </Item>
      <Item style={{cursor:'pointer'}}>
      <Typography variant='caption'>Price : {`${products.price}$`}</Typography>
      </Item>
    </Grid>
    )
}

export default PageItemCards;
