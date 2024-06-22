import React from 'react'
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';


import AttendanceD2Reports from './AttendanceD2';

function ButtonEsi18() {
    const targetRef = useRef();
    return (
      <div className="App">
        <div ref={targetRef}>
        < AttendanceD2Reports/>
        </div>
        <div>
        <Grid item xs={12} textAlign={'right'} sx={{paddingRight:'140px'}}>
          <Button variant='contained' onClick={ ()=> generatePDF(targetRef, {filename: 'AttendanceD2Reports.pdf'})}>Download Pdf</Button>
          </Grid>
          </div>
     </div>
    );
}

export default ButtonEsi18