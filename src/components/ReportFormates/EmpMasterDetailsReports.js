import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function EmpMaster() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        AVT LEATHER AND ALLIED PRODUCTS
        </Typography>
      </Grid>

      

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <Table>
            <TableBody>
              <TableRow sx={{ borderBottom: '3px solid black', fontWeight: 'bold' }}>
                <TableCell style={{ fontWeight: 'bold',fontSize:9}}>S.No</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Emp.Code</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9}}>Card none</TableCell>

                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Emp.Name</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Dept</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Desig</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Categoty</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Bank</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Emp_PfNo</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Basic</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Others</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Salary</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Emp_Bank_AcNo</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Emp_EsiNo</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Emp</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Emp_Birth</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Emp_joini</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Emp_Se</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Emp_Fath</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>OT</TableCell>
                <TableCell style={{ fontWeight: 'bold',fontSize:9 }}>Blood Group</TableCell>












              </TableRow>

              {[...Array(16).keys()].map((row, index) => (
                <TableRow key={row + 1} >
                  <TableCell sx={{border: 'none'}}>{row + 1}</TableCell>
                  <TableCell sx={{border: 'none'}}>0009</TableCell>
                  <TableCell  sx={{border: 'none'}}>023456</TableCell>
                  <TableCell  sx={{border: 'none'}}>Rani</TableCell>
                  <TableCell  sx={{border: 'none'}}>2nd assemenbl</TableCell>
                  <TableCell  sx={{border: 'none'}}>Assembly O</TableCell>
                  <TableCell  sx={{border: 'none'}}>Worker</TableCell>
                  <TableCell  sx={{border: 'none'}}>INDIA</TableCell>
                  <TableCell  sx={{border: 'none'}}>256</TableCell>
                  <TableCell  sx={{border: 'none'}}>5315</TableCell>
                  
                  <TableCell  sx={{border: 'none'}}>200.00</TableCell>
                  <TableCell  sx={{border: 'none'}}>4,745,00</TableCell>
                  <TableCell  sx={{border: 'none'}}>2565678</TableCell>  
                <TableCell  sx={{border: 'none'}}>1111244</TableCell>
                <TableCell  sx={{border: 'none'}}>yes</TableCell>
                <TableCell  sx={{border: 'none'}}>04/04/1952</TableCell>
                <TableCell  sx={{border: 'none'}}>07/12/2009</TableCell>
                <TableCell  sx={{border: 'none'}}>female</TableCell>
                <TableCell  sx={{border: 'none'}}>v. sathayan</TableCell>
                <TableCell  sx={{border: 'none'}}>2.0</TableCell>
                <TableCell  sx={{border: 'none'}}>A1+VE</TableCell>















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

export default EmpMaster;
