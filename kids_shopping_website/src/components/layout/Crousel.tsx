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


// import Carousel  from '@material-tailwind/react';
// import Image from "next/image";
 
// const CarouselDefault=()=> {
//   return (
//       <div
//       id="carouselDarkVariant"
//       className="relative"
//       data-twe-carousel-init
//       data-twe-ride="carousel">
//     <div
//       className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
//       data-twe-carousel-indicators>
//       <button
//         data-twe-target="#carouselDarkVariant"
//         data-twe-slide-to="0"
//         data-twe-carousel-active
//         className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//         aria-current="true"
//         aria-label="Slide 1"></button>
//       <button
//         data-twe-target="#carouselDarkVariant"
//         className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//         data-twe-slide-to="1"
//         aria-label="Slide 1"></button>
//       <button
//         data-twe-target="#carouselDarkVariant"
//         className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
//         data-twe-slide-to="2"
//         aria-label="Slide 1"></button>
//     </div>
  

//     <div
//       className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

//       <div
//         className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//         data-twe-carousel-fade
//         data-twe-carousel-item
//         data-twe-carousel-active>
//          <img
//           src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//           alt="image 1"
//           className="h-full w-full object-cover"
//         />
//         <div
//           className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
//           <h5 className="text-xl">First slide label</h5>
//           <p>
//             Some representative placeholder content for the first slide.
//           </p>
//         </div>
//       </div>
//     </div>
//     <button
//       className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//       type="button"
//       data-twe-target="#carouselDarkVariant"
//       data-twe-slide="prev">
//       <span className="inline-block h-8 w-8 dark:grayscale">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           className="h-6 w-6">
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M15.75 19.5L8.25 12l7.5-7.5" />
//         </svg>
//       </span>
//       <span
//         className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//         >Previous</span
//       >
//     </button>
//     <button
//       className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//       type="button"
//       data-twe-target="#carouselDarkVariant"
//       data-twe-slide="next">
//       <span className="inline-block h-8 w-8 dark:grayscale">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           className="h-6 w-6">
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//         </svg>
//       </span>
//       <span
//         className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//         >Next</span
//       >
//     </button>
//   </div>

//   );
// }

// export default CarouselDefault;