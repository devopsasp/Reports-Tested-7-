import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function D9Reports() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
          DATA TEST 
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
        Morning Absentees Report As On 29/04/2009        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <Table>
            <TableBody>
              <TableRow sx={{ borderBottom: '3px solid black', fontWeight: 'bold' }}>
                <TableCell style={{ fontWeight: 'bold'}}>S.No</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Emp.Code</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Emp.Name</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Remarks</TableCell>
              </TableRow>

              <TableRow >
                <TableCell style={{border:'none', fontWeight: 'bold'}}>Department Name:</TableCell>
                <TableCell style={{border:'none', fontWeight: 'bold' }}>1st assemenbly</TableCell>
               
              </TableRow>

              {[...Array(53).keys()].map((row, index) => (
                <TableRow key={row + 1} >
                  <TableCell sx={{border: 'none'}}>{row + 1}</TableCell>
                  <TableCell sx={{border: 'none'}}>0019</TableCell>
                  <TableCell  sx={{border: 'none'}}>Lalli</TableCell>
                  <TableCell  sx={{border: 'none'}}>Present</TableCell>
                 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </Grid>
      <Grid style={{ textAlign: 'center'}}>
        <Typography>X - Present, A - Absent, H-Holiday, W - Weekoff, O - Compoff, D - Onduty, T - Tour, C - Casual Leave, E - Earn Leave</Typography>
      </Grid>
    </div>
  );
}

export default D9Reports;
