import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography , Rating , Modal} from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open , handleClose , currentProduct}:any) {


  return (
    <div>
      {currentProduct?.length && 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{cursor:'pointer'}}>
        <Typography variant='h6'> {`${currentProduct[0].title}$`}</Typography>

        <Typography variant='body'> {`${currentProduct[0].description}$`}</Typography>
        

          <img alt={currentProduct.description} src={currentProduct[0].image} height='200px' width='200px'/>
          <Typography variant='caption'>{currentProduct[0].title}</Typography>
      </div>
      <Typography variant='caption'>Price : {`${currentProduct[0].price}$`}</Typography>
      <Typography variant='caption'>Rating : <Rating name="read-only" value={currentProduct[0].rating.rate} readOnly /></Typography>
        
        </Box>
      </Modal>
  }
    </div>
  );
}
