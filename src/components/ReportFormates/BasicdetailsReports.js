import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function BasicDetails() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
          DATA TEST 
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
        A.V.THOMAS LEATHER & ALLIED PRODUCTS PRIVATE LTD
        </Typography>
        <Typography  style={{ textAlign:'right',paddingRight:'500px'}}>
Date : 12/08/2010
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <Table>
            <TableBody>
              <TableRow sx={{ borderBottom: '3px solid black', borderTop:'3px solid black',fontSize:17 }}>
                <TableCell style={{ fontWeight: 'bold',fontSize:17}}>S.No</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:17 }}>Emp.Code</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:17 }}>Emp.Name</TableCell>
                <TableCell style={{ fontWeight: 'bold' ,fontSize:17}}>Basic</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:17 }}>Gross Salary</TableCell>  
                <TableCell style={{ fontWeight: 'bold',fontSize:17 }}>Net Salary</TableCell>
              </TableRow>

              {[...Array(55).keys()].map((row, index) => (
                <TableRow key={row + 1} >
                  <TableCell sx={{border: 'none',fontSize:15}}>{row + 1}</TableCell>
                  <TableCell sx={{border: 'none',fontSize:15}}>0019</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:15}}>Lalli</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:15}}>1,818.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:15}}>4,800.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:15}}>4,179.00</TableCell>
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

export default BasicDetails;
