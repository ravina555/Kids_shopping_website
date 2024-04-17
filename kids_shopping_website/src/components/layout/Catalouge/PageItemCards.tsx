import React from 'react';
import { Grid , Paper , Typography  } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { usePathname } from "next/navigation";


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

const PageItemCards=({products , setOpen}:any)=>{
    const route = usePathname();
    const handleModalOpen=()=>{
      setOpen(true)
    }
    const pathname = `${route}?product=${products.id}`
    return (
      <Grid item sm={4} key={products.name} xs={12}>
      <Item style={{cursor:'pointer'}} onClick={handleModalOpen}>
        <Link href={pathname}>
          <Img alt={products.description} src={products.image} />
          <Typography variant='caption'>{products.title}</Typography>
        </Link>
      </Item>
      <Item style={{cursor:'pointer'}}>
      <Typography variant='caption'>Price : {`${products.price}$`}</Typography>
      </Item>
    </Grid>
    )
}

export default PageItemCards;
