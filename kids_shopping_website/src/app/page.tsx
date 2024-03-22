
import Cards from '../components/layout/products-category/Cards';
import CarouselDefault from '../components/layout/Crousel';
import TitleBar from '@/components/layout/Titlebar';
import Coverstory from '@/components/layout/Coverstory';
import MuiTypography from '@/components/layout/MuiTypography';
export default function Home() {
  return (
    <div >
     <CarouselDefault/>
     
     <TitleBar/>
     <Coverstory/>
     < MuiTypography text='SHOP BY CATEGORY'/>
      <Cards/>
    </div>
   
  );
}
