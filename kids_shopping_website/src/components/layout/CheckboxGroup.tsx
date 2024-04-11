import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography , Button } from '@mui/material';

export default function CheckboxGroup({shopBy , setFilter , filter}:any) {
  return (
    <>
     <Typography>Filters</Typography>
     <FormGroup>
        {shopBy.map((item:string)=>{
          return <FormControlLabel control={<Checkbox />} label={item} key={item} onClick={(e:any)=>{
            if(e.target.checked){
              setFilter([...filter ,item])
            }else{
              let filterItem = filter.filter((x:string)=>{
                return x!==item
              })
              setFilter(filterItem)
            }
           
          }}/>
        }
        )}
     </FormGroup>
     </>
   
  );
}