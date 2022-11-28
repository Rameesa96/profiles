import React from 'react'
import cyber from '../../assets/cybersecurity.png'
import performer from '../../assets/performer.jpeg'
import bestteam from '../../assets/bestteam.jpeg'
import bestloyal from '../../assets/bestloyal.jpeg'
import loyality from '../../assets/loyality.jpeg'
import node from '../../assets/node.png'
import './Testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
function Testimonial() {
  const data=[
    {
      img:node
    },
    {
      img:cyber
    },
    {
      img:performer
    },
    {
      img:bestteam
    },
    {
      img:bestloyal
    },
    {
      img:loyality
    }
  ]
  return (
    <section><h2>Achievements and Certificates</h2>
   <Swiper pagination={true} modules={[Pagination]} className="container certificatecontainer">
    
   {data.map((im)=>{
   return(
    <SwiperSlide>
      <article className="certificates">

        <div className="articleimg">
         <img src={im.img} className="certificateimage" alt="" />
        </div>
      </article> 
      </SwiperSlide> )})}
    </Swiper>
  
    </section>
  )
}

export default Testimonial