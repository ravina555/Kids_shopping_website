import * as React from 'react';
import Box from '@mui/material/Box';
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
    <>
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
        <Typography variant='subtitle1'><Rating name="read-only" value={currentProduct[0].rating.rate} readOnly /> <span style={{float:'right'}}>{currentProduct[0].rating.count}</span></Typography>
       
          <img alt={currentProduct.description} src={currentProduct[0].image} height='200px' width='200px'/>
          <Typography variant='caption'>{currentProduct[0].description}</Typography>
      </div>
      <Typography variant='subtitle1'>Price : {`${currentProduct[0].price}$`}</Typography>
       
        </Box>
      </Modal>
  }
    </>
  );
}
