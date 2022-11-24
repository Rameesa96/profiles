import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
const Service = () => {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container sevice_container'>
        <articles className="service">
          <div className="service_head">
            <h3>Full Stack Development</h3>
          </div>
          <ul className='service_list'>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Developing front end website architecture using React js </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Designing user interactions on web pages. </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Developing back end website applications. </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Creating servers and databases for functionality using Mongo db and Nodejs </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Ensuring responsiveness of applications. </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Designing and developing APIs. </p>
            </li>
          </ul>
        </articles>
        <articles className="service">
          <div className="service_head">
            <h3>Front-End Development</h3>
          </div>
          <ul className='service_list'>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Developing front end website architecture using React js </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Use markup languages like HTML to create user-friendly web pages </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Maintain and improve website </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Design mobile-based features</p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Collaborate with back-end developers and web designers to improve usability</p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Using CSS for Creating Stylish Websites </p>
            </li>
          </ul>
        </articles>
        <articles className="service">
          <div className="service_head">
            <h3>Back-End Development</h3>
          </div>
          <ul className='service_list'>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Developing back end website applications</p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Creating servers and databases for functionality using Mongo db and Nodejs</p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Designing and developing APIs. </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Collaborate with Front-end developers</p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Main focus on coding and debugging </p>
            </li>
            <li >
              <BiCheck className='service_listicon'/>
              <p>Be involved and participate in the overall application lifecycle</p>
            </li>
          </ul>
        </articles>


      </div>
      
    </section>
  )
}

export default Service