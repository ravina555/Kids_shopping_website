
import React from 'react';

import { Grid , Paper , Box , Typography} from '@mui/material';
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

const Cardstructure=({Products}:any)=>{
    let filterProducts = Products.reduce((result: { [x: string]: any[]; }, item: { category: string})=> {
        result[item.category] = result[item.category] || [];
        result[item.category].push(item);
        return result;
      }, {});

    return (


    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={12} >
       {Object.entries(filterProducts).map((item:[string , any])=>{
        let data = item[1][0].image;
        return <Grid item xs={3} key={data.id} >
        <Item style={{cursor:'pointer'}}>
            <Img alt="complex" src={data}/>
        </Item>
        <Item>
        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                {item[0]}
              </Typography>
        </Item>
      </Grid>
       })} 
      </Grid>
    </Box>
    )
}

export default Cardstructure;

