import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function PfDetail() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        A.V.THOMAS LEATHER & ALLIED PRODUCTS PRIVATE LTD
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
        Provident Fund Details       
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="h8">
        Provident Fund for the Period 01/02/2010 to 28/02/2010       
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
       Date : 12/08/2010           
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <Table>
            <TableBody>
              <TableRow sx={{ borderBottom: '3px solid black',borderTop:'3px solid black',borderRight:'3px solid black',borderLeft:'3px solid black', fontWeight: 'bold' }}>
              <TableCell style={{ fontWeight: 'bold',borderRight:'3px solid black'}}>SI.No</TableCell>

                <TableCell style={{ fontWeight: 'bold',borderRight:'3px solid black'}}>PF.No</TableCell>
                <TableCell style={{ fontWeight: 'bold' ,borderRight:'3px solid black'}}>Employee Name</TableCell>
                <TableCell style={{ fontWeight: 'bold',borderRight:'3px solid black' }}>P.D</TableCell>
                <TableCell style={{ fontWeight: 'bold',borderRight:'3px solid black' }}>Basic Pay</TableCell>
                <TableCell style={{ fontWeight: 'bold',borderRight:'3px solid black' }}>EE</TableCell>
                <TableCell style={{ fontWeight: 'bold' ,borderRight:'3px solid black'}}>FPF</TableCell>
                <TableCell style={{ fontWeight: 'bold',borderRight:'3px solid black' }}>ER</TableCell>
                <TableCell style={{ fontWeight: 'bold',borderRight:'3px solid black' }}>VPF</TableCell>

              </TableRow>

              {[...Array(16).keys()].map((row, index) => (
                <TableRow key={row + 1} sx={{ borderBottom: '2px solid black',borderRight:'2px solid black' ,borderLeft:'2px solid black'}}>
                                      <TableCell sx={{border: 'none'}}>{row + 1}</TableCell>
                  <TableCell sx={{border: 'none',borderRight:'2px solid black'}}>11137211</TableCell>
                  <TableCell sx={{border: 'none',borderRight:'2px solid black'}}> 0003</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}>M.MOHANA</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}> 28.00</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}>2,808.00</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}>337.00</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}> 234.00</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}>103.00</TableCell>
                  <TableCell  sx={{border: 'none',borderRight:'2px solid black'}}>0.00</TableCell>
                </TableRow>
              ))}
              <TableRow >
              
                <TableCell sx={{fontWeight:'bold'}}>total</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell sx={{borderBottom:'3px solid black',borderTop:'3px solid black'}}> 497,937.00</TableCell>
                <TableCell sx={{borderBottom:'3px solid black',borderTop:'3px solid black'}}>59,753.00</TableCell>
                <TableCell sx={{borderBottom:'3px solid black',borderTop:'3px solid black'}}>41,456.00</TableCell>
                <TableCell sx={{borderBottom:'3px solid black',borderTop:'3px solid black'}}>52,528.00</TableCell>
                <TableCell sx={{borderBottom:'3px solid black',borderTop:'3px solid black'}}>3,197.50</TableCell>

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </Grid>
      
    </div>
  );
}

export default PfDetail;
