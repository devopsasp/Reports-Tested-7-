import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function D7Reports() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
          DATA TEST Report
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
          Leave Entry Report For the Date of 29/04/2009
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <Table>
            <TableBody>
              <TableRow sx={{ borderBottom: '3px solid black', fontWeight: 'bold' }}>
                <TableCell style={{ fontWeight: 'bold'}}>S.No</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Emp.Code</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Emp.Name</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Date</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Shift</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>In Time</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Out Time</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Break In</TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>Break Out</TableCell>
              </TableRow>

              {[...Array(16).keys()].map((row, index) => (
                <TableRow key={row + 1} sx={index === 15 ? { borderBottom: '3px solid black' } : {}}>
                  <TableCell sx={{border: 'none'}}>{row + 1}</TableCell>
                  <TableCell sx={{border: 'none'}}>0019</TableCell>
                  <TableCell  sx={{border: 'none'}}>Lalli</TableCell>
                  <TableCell  sx={{border: 'none'}}>29/04/2009</TableCell>
                  <TableCell  sx={{border: 'none'}}>G</TableCell>
                  <TableCell  sx={{border: 'none'}}>08:00</TableCell>
                  <TableCell  sx={{border: 'none'}}>16:00</TableCell>
                  <TableCell  sx={{border: 'none'}}>02:00</TableCell>
                  <TableCell  sx={{border: 'none'}}>15:00</TableCell>
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

export default D7Reports;
