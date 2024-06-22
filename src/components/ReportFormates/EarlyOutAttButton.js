import React from 'react'
import Paycalc from './Payslip';
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
import Medical from './Medical';
import Esicslip from './Esicslip';
import BasicDetails from'./BasicdetailsReports';
import EarlyinAtt from './EarlyInAttReports';
import EarlyoutAtt from './EarlyOutAttReports';

function EarlyOut() {
    const targetRef = useRef();
    return (
      <div className="App">
        <div ref={targetRef}>
        < EarlyoutAtt/>
        </div>
        <div>
        <Grid item xs={12} textAlign={'center'}>
          <Button variant='outlined' onClick={ ()=> generatePDF(targetRef, {filename: 'EarlyoutAtt.pdf'})}>Download Pdf</Button>
          </Grid>
          </div>
     </div>
    );
}

export default EarlyOut