/* eslint-disable @next/next/no-img-element */
import {Grid , Paper, Typography} from '@mui/material';
import coverstoryimage from "../../Images/cover_story.jpg";

const coverstorycontent={
    text:{
        heading: ' Our Cover Story',
        content:'Serendipity embodies the essence of eco-conscious luxury for your little ones. Their commitment to sustainability is evident in every piece.'
        },
    img:{coverstoryimage}
}
const Coverstory=()=>{
    return(
        <section style={{padding:'50px 200px'}}>
             <Grid container spacing={2}>
            <Grid item xs={6} textAlign='start'>
                <Typography variant='h6'>{coverstorycontent.text.heading}</Typography>
                <Typography variant='body1'>{coverstorycontent.text.content}</Typography>
            </Grid>
            <Grid item xs={6}>
            <img
        src={coverstoryimage.src} 
        alt="image 1"
        className=" w-full h-full object-fill"
      />
            </Grid>
        </Grid>
        </section>
       
    )
}

export default Coverstory;