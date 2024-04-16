/* eslint-disable @next/next/no-img-element */
import { Container} from "@mui/material";
import macbookIphone from "../../Images/main_page.jpg";
export default function CarouselDefault() {
  return (
      <Container maxWidth={false} disableGutters style={{padding:'50px', width:'100' , borderRadius:'10'}}> 
         <img
        src={macbookIphone.src} 
        alt="image 1"
        className=" w-full object-fill"
      />
      </Container>
  );
}