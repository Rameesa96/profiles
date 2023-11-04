import React from 'react'
import './SKill.css'
const Skills = ["Javascript","TypeScript","React","Astro","Node","React Admin","Github","Rest API","HTML","CSS"]
const Skill = () => {
  return (
    <section id="skills">
    <h5>What Skills I Have</h5>
    <h2>Technical Skills</h2>
<div className='container skill_container'>
  {Skills.map((skill,index)=>(<buttton key={index} className="btn1 btn-Primary">{skill}</buttton>))}
</div>  
    </section>
  )
}

export default Skill
