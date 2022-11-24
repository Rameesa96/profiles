
import * as React  from 'react';
import {useState} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {BiPlus} from 'react-icons/bi'
import {BiCheck} from 'react-icons/bi'
import './Experience.css'
function Experience() {
  const [state ,setState]=useState(true)
  return (
   <section id="experience">

<h2>Experience and Education</h2>
    <div className='container experience_container'>
      <div className='btns'>
      <button className='btn btn-primary' onClick={()=>{setState(true)}}>Experience</button>
      <button className='btn btn-primary' onClick={()=>{setState(false)}}>Education</button>
      </div>
      {state?<Accordion sx={{backgroundColor:'#ffa62b'}}>
        <AccordionSummary
        className='Biplus'
          expandIcon={<BiPlus />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordionhead'>Web Developer  (May 2021-Present)</Typography>
        
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#f1c587'}}>
          <div className='compnyname'>
          <img src="https://www.websoullabs.com/assets/logo50.png" className='logoWebsoul' alt="logo"/>
          <h4 className='compny'>Company Name:Websoullabs</h4>
          </div>
          <ul className='service_list'>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Reviews, analyses, develops, and modifies web applications </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Backend development by Creating Several Rest APIs and Using Mongodb as database </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Involved in all phases of the SDLC (Software Development Life Cycle) 
 </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Leverage our knowledge about Mern stack , HTML, CSS.
</p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p> Work closely with testers,
designers, web designers, and project managers to create a robust and effective
application.
</p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Cooperate with designers to create clean interfaces and simple, intuitive interactions
and experiences</p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Build modern-day UI components to improvise application performance. </p>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>:<><Accordion sx={{backgroundColor:'#ffa62b'}}>
        <AccordionSummary
        className='Biplus'
          expandIcon={<BiPlus />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordionhead'>Masters (August 2018-December 2021)</Typography>
        
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#f1c587'}}>
          
          <ul className='service_list'>
            <li >
              <BiCheck className='service_listicon'/>
              <p>University:   <strong>   University of Calicut</strong> </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Course:       <strong>   Master of Computer Application</strong> </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Grade:<strong>First Class with Distinction</strong> </p>
            </li>
            
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:'#ffa62b'}}>
        <AccordionSummary
        className='Biplus'
          expandIcon={<BiPlus />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordionhead'>Bachelors (August 2015-March 2018)</Typography>
        
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#f1c587'}}>
          
          <ul className='service_list'>
            <li >
              <BiCheck className='service_listicon'/>
              <p>University:   <strong>   University of Calicut</strong> </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Course:       <strong> Bsc Mathematics</strong> </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Percentage:<strong>70.5%</strong> </p>
            </li>
            
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:'#ffa62b'}}>
        <AccordionSummary
        className='Biplus'
          expandIcon={<BiPlus />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordionhead'>Higher Secondary (July 2013-March 2015)</Typography>
        
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#f1c587'}}>
          
          <ul className='service_list'>
            <li >
              <BiCheck className='service_listicon'/>
              <p>School:   <strong> GHSS edakkara</strong> </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Course:       <strong>General Science</strong> </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Percentage:<strong>84%</strong> </p>
            </li>
            
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor:'#ffa62b'}}>
        <AccordionSummary
        className='Biplus'
          expandIcon={<BiPlus />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordionhead'>High School (June 2012-March 2013)</Typography>
        
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#f1c587'}}>
          
          <ul className='service_list'>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Board:   <strong>CBSE</strong> </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Course:       <strong>10th</strong> </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Percentage:<strong>88%</strong> </p>
            </li>
            
          </ul>
        </AccordionDetails>
      </Accordion></>}

     
   
    </div>


   </section>
  )
}

export default Experience