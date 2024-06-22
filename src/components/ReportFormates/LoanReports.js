import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function LoanReport() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        A.V.THOMAS LEATHER & ALLIED PRODUCTS PRIVATE LTD
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
        Loan Balance Detail Report for All Employees
        </Typography>
        <Typography  style={{ textAlign:'right',paddingRight:'500px'}}>
Date : 12/08/2010
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <Table>
            <TableBody>
              <TableRow sx={{ borderBottom: '2px solid black', borderTop:'2px solid black',fontSize:17 }}>
                <TableCell sx={{border: '2px solid black', borderColor: 'black.300', fontWeight: 'bold',fontSize:17,textAlign:'center'}}>Emp Code</TableCell>
                <TableCell style={{ border: '2px solid black', borderColor: 'black.300', fontWeight: 'bold',fontSize:17 ,textAlign:'center'}}>Employee Name</TableCell>
                <TableCell style={{ border: '2px solid black', borderColor: 'black.300', fontWeight: 'bold',fontSize:17,textAlign:'center' }}>App.No</TableCell>
                <TableCell style={{ border: '2px solid black', borderColor: 'black.300', fontWeight: 'bold' ,fontSize:17,textAlign:'center'}}>Loan Type</TableCell>
                <TableCell style={{ border: '2px solid black', borderColor: 'black.300', fontWeight: 'bold',fontSize:17,textAlign:'center' }}>Date</TableCell>  
                <TableCell style={{ border: '2px solid black', borderColor: 'black.300', fontWeight: 'bold',fontSize:17,textAlign:'center' }}>Total Loan Amount </TableCell>
                <TableCell style={{ border: '2px solid black', borderColor: 'black.300', fontWeight: 'bold',fontSize:17,textAlign:'center' }}>Paid Amount </TableCell>

                <TableCell style={{border: '2px solid black', borderColor: 'black.300',  fontWeight: 'bold',fontSize:17,textAlign:'center' }}>Balance </TableCell>

              </TableRow>

              {[...Array(55).keys()].map((row, index) => (
                <TableRow key={row + 1} sx={index === 54 ? { borderBottom: '2px solid black' } : {}}>
                  <TableCell sx={{border: 'none',borderLeft: '2px solid black', borderRight: '2px solid black',fontSize:15,textAlign:'center'}}>C001</TableCell>
                  <TableCell sx={{border: 'none',borderLeft: '2px solid black', borderRight: '2px solid black',fontSize:15,textAlign:'center'}}>Mohana</TableCell>
                  <TableCell  sx={{border: 'none',borderLeft: '2px solid black', borderRight: '2px solid black',fontSize:15,textAlign:'center'}}>F001</TableCell>
                  <TableCell  sx={{border: 'none',borderLeft: '2px solid black', borderRight: '2px solid black',fontSize:15,textAlign:'center'}}>FEST-ADV</TableCell>
                  <TableCell  sx={{border: 'none',borderLeft: '2px solid black', borderRight: '2px solid black',fontSize:15,textAlign:'center'}}>02/07/2008</TableCell>
                  <TableCell  sx={{border: 'none',borderLeft: '2px solid black', borderRight: '2px solid black',fontSize:15,textAlign:'center'}}>800.00</TableCell>
                  <TableCell  sx={{border: 'none',borderLeft: '2px solid black', borderRight: '2px solid black',fontSize:15,textAlign:'center'}}>600.00</TableCell>
                  <TableCell  sx={{border: 'none',borderLeft: '2px solid black', borderRight: '2px solid black',fontSize:15,textAlign:'center'}}>200.00</TableCell>


                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </Grid>
      
    </div>
  );
}

export default LoanReport;
