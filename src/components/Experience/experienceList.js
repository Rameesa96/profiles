import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {BiPlus} from 'react-icons/bi'
import {BiCheck} from 'react-icons/bi'
import './Experience.css'
const ExperienceList = ({designation,img,Employer,description})=>{
    return(
        <Accordion sx={{backgroundColor:'#ffa62b'}}>
        <AccordionSummary
        className='Biplus'
          expandIcon={<BiPlus />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='accordionhead'>{designation}</Typography>
        
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'#f1c587'}}>
          <div className='compnyname'>
          <h4 className='compny'><strong>Employer : </strong>{Employer}</h4>
          </div>
          <ul className='service_list'>
          {description.map((desc, index) => (
  <li key={index}>
    <BiCheck className='service_listicon' />
    <p>{desc}</p>
  </li>
))}
          </ul>
        </AccordionDetails>
      </Accordion>
    )
}
export default ExperienceList