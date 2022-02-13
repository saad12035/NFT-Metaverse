import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './acordian.css';

export default function SimpleAccordion() {
  return (
      <div className="check">
        <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{backgroundColor:'#182533',color:"white"}}
          >
            <Typography style={{fontWeight:"bold",fontSize:30}}>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor:"#1C1C1C",color:"white",fontWeight:600}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{backgroundColor:'#182533',color:"white"}}
          >
            <Typography style={{fontWeight:"bold",fontSize:30}}>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor:"#1C1C1C",color:"white",fontWeight:600}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{backgroundColor:'#182533',color:"white"}}
          >
            <Typography style={{fontWeight:"bold",fontSize:30}}>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails style={{backgroundColor:"#1C1C1C",color:"white",fontWeight:600}}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div style={{marginBottom:80}}/>
      </div>
  );
}
