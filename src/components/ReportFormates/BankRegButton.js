import React from 'react'
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';

import BankReg from './BankRegReport';

function BANKREGISTER() {
    const targetRef = useRef();
    return (
      <div className="App">
        <div ref={targetRef}>
        < BankReg/>
        </div>
        <div>
        <Grid item xs={12} textAlign={'center'}>
          <Button variant='outlined' onClick={ ()=> generatePDF(targetRef, {filename: 'BankReg.pdf'})}>Download Pdf</Button>
          </Grid>
          </div>
     </div>
    );
}

export default BANKREGISTER