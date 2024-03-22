import { Typography } from "@mui/material";

const MuiTypography=(props:any)=>{
    return (

              <Typography variant="h5" component="h2" textAlign="center" style={{fontFamily: 'Raleway'}}>
                {props.text}
            </Typography>

      
    )
}

export default MuiTypography;