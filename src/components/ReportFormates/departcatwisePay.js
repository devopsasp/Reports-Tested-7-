import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function DepartWisePay() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        A.V.THOMAS LEATHER & ALLIED PRODUCTS PRIVATE LTD
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
        Department Wise Salary Report       
         </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6" >
            Date : 12/08/2010
         </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <Table>
            <TableBody>
                <TableRow  >
                    <TableCell sx={{fontWeight:'bold',border: 'none'}}>Department   Packing</TableCell>
                    <TableCell sx={{fontWeight:'bold',border: 'none'}}>Month        :  Jan</TableCell>


                </TableRow>
              <TableRow sx={{ borderBottom: '3px solid black', borderTop: '3px solid black', borderRight:'2px solid black', borderLeft:'2px solid black' }}>
                <TableCell style={{ borderBottom: '2px solid black',fontWeight: 'bold' }}>Emp.Code</TableCell>
                <TableCell style={{ borderBottom: '2px solid black',fontWeight: 'bold' }}>Emp.Name</TableCell>
                <TableCell style={{ borderBottom: '2px solid black',fontWeight: 'bold' }}>Basic Pay</TableCell>
                <TableCell style={{ borderBottom: '2px solid black',fontWeight: 'bold' }}>Total Allowance</TableCell>
                <TableCell style={{ borderBottom: '2px solid black',fontWeight: 'bold' }}>Total Deduction</TableCell>
                <TableCell style={{ borderBottom: '2px solid black',fontWeight: 'bold' }}>Absent</TableCell>
                <TableCell style={{ borderBottom: '2px solid black',fontWeight: 'bold' }}>PF</TableCell>
                <TableCell style={{ borderBottom: '2px solid black',fontWeight: 'bold' }}>ESI</TableCell>
                <TableCell style={{ borderBottom: '2px solid black',fontWeight: 'bold' }}>Net Pay</TableCell>
              </TableRow>

              {[...Array(16).keys()].map((row, index) => (
                <TableRow key={row + 1} sx={{ borderBottom: '2px solid black',borderRight:'2px solid black', borderLeft:'2px solid black'}}>
                
                  <TableCell sx={{  borderBottom: '2px solid black'}}>0013</TableCell>
                  <TableCell  sx={{border: 'none'}}>N.Bhavani</TableCell>
                  <TableCell  sx={{border: 'none'}}>1,988.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>2,438.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>0.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>0.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>358.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>78.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>3,990.00</TableCell>

                </TableRow>
              ))}
              <TableRow sx={{borderBottom:'2px solid black'}}>
              <TableCell  sx={{border: 'none'}}></TableCell>

                <TableCell sx={{border:'none'}}>Sub Total</TableCell>
                <TableCell  sx={{border: 'none'}}>1,988.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>2,438.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>0.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>0.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>358.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>78.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>3,990.00</TableCell>

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </Grid>    
    </div>
  );
}
export default DepartWisePay;
