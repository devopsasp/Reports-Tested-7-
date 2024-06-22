import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function BankReg() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        A.V.THOMAS LEATHER & ALLIED PRODUCTS PRIVATE LTD        
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
        Bank Register for the month of February - 2010       
        </Typography>
      </Grid>
      <Typography  style={{ textAlign:'right',paddingRight:'500px'}}>
Date : 12/08/2010
        </Typography>

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1800px' }}>
          <Table>
            <TableBody>
                <TableRow>
                    <TableCell style={{ fontWeight: 'bold' }}>Bank Name</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>INDIAN BANK</TableCell>
                </TableRow>
              <TableRow sx={{ borderBottom: '3px solid black',borderTop: '3px solid black', fontWeight: 'bold' }}>
                <TableCell style={{ fontWeight: 'bold' }}>Emp.Code</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Emp.Name</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Bank Acct.No</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Net Pay</TableCell>
               
               
              </TableRow>
              <TableRow sx={{borderBottom:'2px dotted black'}}>
                    <TableCell  sx={{borderBottom:'2px dotted black'}} >Department Name</TableCell>
                    <TableCell  sx={{borderBottom:'2px dotted black'}}>1st Assembly</TableCell>
                </TableRow>

              {[...Array(2 ).keys()].map((row, index) => (
                <TableRow key={row + 1} >
                  <TableCell sx={{border: 'none'}}>0019</TableCell>
                  <TableCell  sx={{border: 'none'}}>Lalli</TableCell>
                  <TableCell  sx={{border: 'none'}}></TableCell>
                  <TableCell  sx={{border: 'none'}}>3,947</TableCell>
                </TableRow>
              ))}
              
              <TableRow sx={{borderTop:'2px dotted black',borderBottom:'2px solid black'}}>
                <TableCell  sx={{borderTop:'2px dotted black',borderBottom:'2px solid black'}}>1st Assembly </TableCell>
                <TableCell  sx={{borderTop:'2px dotted black',borderBottom:'2px solid black'}}>Total:</TableCell>
                <TableCell  sx={{borderTop:'2px dotted black',borderBottom:'2px solid black'}}>  1,764.00</TableCell>
                

                

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </Grid>
      
    </div>
  );
}

export default BankReg;
