import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function DeptWise() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        A.V.THOMAS LEATHER & ALLIED PRODUCTS PRIVATE LTD
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
        Department Wise Report        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <Table>
            <TableBody>
                <TableRow>
                    <TableCell style={{ fontWeight: 'bold' }}>Department Name</TableCell>
                    <TableCell>1st Assembly</TableCell>
                </TableRow>
              <TableRow sx={{ borderBottom: '3px solid black',borderTop: '3px solid black', fontWeight: 'bold' }}>
                <TableCell style={{ fontWeight: 'bold' }}>Emp.Code</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Emp.Name</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Gross Pay</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>PF</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>ESI</TableCell>
               
              </TableRow>

              {[...Array(2 ).keys()].map((row, index) => (
                <TableRow key={row + 1} >
                  <TableCell sx={{border: 'none'}}>0019</TableCell>
                  <TableCell  sx={{border: 'none'}}>Lalli</TableCell>
                  <TableCell  sx={{border: 'none'}}>1,764.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>106.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>84.00</TableCell>
                </TableRow>
              ))}
              <TableRow sx={{borderTop:'2px solid black',borderBottom:'2px solid black'}}>
                <TableCell sx={{border: 'none'}}>Department Total </TableCell>
                <TableCell sx={{border: 'none'}}></TableCell>
                <TableCell sx={{border: 'none'}}>  1,764.00</TableCell>
                <TableCell sx={{border: 'none'}}> 106.00</TableCell>

                <TableCell sx={{border: 'none'}}> 84.00 </TableCell>

                

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </Grid>
      
    </div>
  );
}

export default DeptWise;
