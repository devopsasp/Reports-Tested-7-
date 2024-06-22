import React from 'react'
import Paycalc from './Payslip';
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
import Medical from './Medical';
import Esicslip from './Esicslip';
import D7Reports from'./d7Reports';
import LoanReport from './LoanReports';
import PayRegister from './PayRegisterReports';
import PfDetail from './PFDetailsReports';
import ProgresRep from './ProgressReport';

function Progressbut() {
    const targetRef = useRef();
    return (
      <div className="App">
        <div ref={targetRef}>
        < ProgresRep/>
        </div>
        <div>
        <Grid item xs={12} textAlign={'center'}>
          <Button variant='outlined' onClick={ ()=> generatePDF(targetRef, {filename: 'ProgresRep.pdf'})}>Download Pdf</Button>
          </Grid>
          </div>
     </div>
    );
}

export default Progressbut