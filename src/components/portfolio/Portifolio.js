import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img.png'
import projectimerit from '../../assets/projectimerit.png'
import projectbooking from '../../assets/projectbooking.png'
import Syngenta from '../../assets/Syngenta.png'
import projectcareer from '../../assets/Projectcareer.png'
import social from '../../assets/social.png'
import Netflix from '../../assets/Netflix.png'
import TSM from '../../assets/tsm.png'
import quote from '../../assets/quote.png'
import cofee from '../../assets/cofee.png'
const Portifolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
<div className="container portfoliocontainer">
<article className='portfolioitem'>
<img src={quote} className="portimg"alt="" />
  <h3>Random Quote Generator<small>(Utilized React js)</small></h3>
  <div className="portfolio_cta">
  <a href="https://github.com/Rameesa96/Quotegenerator" className='btn'> Github</a>
  <a href="https://quotegenerator-eight.vercel.app/" className='btn'>App Url</a>
  
  </div>
  
</article>
<article className='portfolioitem'>
<img src={projectbooking} className="portimg"alt="" />
  <h3>Booking App<small>(utilized Mern Stack)</small></h3>
  <div className="portfolio_cta">
  <a href="https://github.com/Rameesa96/booking" className='btn'> Github</a>
  
  </div>
  
</article>
<article className='portfolioitem'>
<img src={projectcareer} className="portimg"alt="" />
  <h3>Career Consultancy<small>(utilized Mern Stack)</small></h3>
  <div className="portfolio_cta">

  
  </div>
  
</article>
<article className='portfolioitem'>
<img src={social} className="portimg"alt="" />
  <h3>Social Media App(utilized Node js)</h3>
  <div className="portfolio_cta">
  <a href="https://github.com/Rameesa96/socialmedia" className='btn'> Github</a>
  
  </div>
  
</article>
<article className='portfolioitem'>
<img src={cofee} className="portimg"alt="" />
  <h3>Cofee shop(utilized React)</h3>
  <div className="portfolio_cta">
  <a href="https://github.com/Rameesa96/cofeeshop" className='btn'> Github</a>
  <a href="https://cofeeshop-zgv5.vercel.app/" className='btn'> App Url</a>
  </div>
  
</article>
<article className='portfolioitem'>
<img src={Syngenta} className="portimg"alt="" />
  <h3>Syngenta(utilized Bootstrap)</h3>
  <div className="portfolio_cta">
  <a href="https://github.com/Rameesa96/syngenta" className='btn'> Github</a>

  </div>
  
</article>
<article className='portfolioitem'>
<img src={projectimerit} className="portimg"alt="" />
  <h3>iMerit <small>(Utilized React js)</small></h3>
  <div className="portfolio_cta">
  <a href="https://github.com/Rameesa96/imerit111" className='btn'> Github</a>

  </div>
  
</article>
<article className='portfolioitem'>
<img src={img1} className="portimg"alt="" />
  <h3>ASUS <small>(Utilized React js)</small></h3>
  <div className="portfolio_cta">
  <a href="https://github.com/Rameesa96/asusproject" className='btn'> Github</a>
  
  </div>
  
</article>
<article className='portfolioitem'>
<img src={Netflix} className="portimg"alt="" />
  <h3>Netflix<small>(Utilized React js)</small></h3>
  <div className="portfolio_cta">
  <a href="https://github.com/Rameesa96/Netflix" className='btn'> Github</a>
  
  </div>
  
</article>
<article className='portfolioitem'>
<img src={TSM} className="portimg"alt="" />
  <h3>TSM<small>(Utilized React js)</small></h3>
  <div className="portfolio_cta">
  <a href="https://github.com/Rameesa96/tsm" className='btn'> Github</a>
  
  </div>
  
</article>



</div>
    </section>
  )
}

export default Portifolio