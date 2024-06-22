import React from 'react'
import Paycalc from './Payslip';
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
import Medical from './Medical';
import Esicslip from './Esicslip';
import D9Reports from'./d9Reports';
import DeptWise from './DeptWiseReport';

function Deptwise() {
    const targetRef = useRef();
    return (
      <div className="App">
        <div ref={targetRef}>
        < DeptWise/>
        </div>
        <div>
        <Grid item xs={12} textAlign={'center'}>
          <Button variant='outlined' onClick={ ()=> generatePDF(targetRef, {filename: 'DeptWise.pdf'})}>Download Pdf</Button>
          </Grid>
          </div>
     </div>
    );
}

export default Deptwise