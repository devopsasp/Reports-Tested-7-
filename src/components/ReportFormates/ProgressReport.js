import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function ProgresRep() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        AV THOMAS LEATHER AND ALLIED PRODUCTS
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
        Department Wise Report      
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="h6" style={{textAlign:'Right',paddingRight:'870px'}}>
     Date :  28/06/20       
         </Typography>
      </Grid>   
      

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <Table>
            <TableBody>
                <TableRow>
                    <TableCell sx={{borderBottom:'3px solid black',fontWeight: 'bold'}} >Department</TableCell>
                    <TableCell  sx={{borderBottom:'3px solid black',fontWeight: 'bold'}}>1st Assembly</TableCell>
                </TableRow>
              <TableRow sx={{ borderBottom: '3px solid black',borderTop:'3px solid black', fontWeight: 'bold' }}>
                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:20}}>Emp.Code</TableCell>
                <TableCell style={{border:'none',fontWeight: 'bold' ,fontSize:20}}>Emp Name</TableCell>
                <TableCell style={{border:'none', fontWeight: 'bold',fontSize:20 }}>Gross Pay</TableCell>
                <TableCell style={{border:'none',fontWeight: 'bold',fontSize:20 }}>PF</TableCell>

                <TableCell style={{border:'none',fontWeight: 'bold' ,fontSize:20}}>ESI</TableCell>
               
              </TableRow>
           
            


              {[...Array(16).keys()].map((row, index) => (
                <TableRow key={row + 1} >
                  <TableCell sx={{border:'none',fontSize:16}}>0003</TableCell>
                  <TableCell sx={{ border:'none',fontSize:16}}>M.Mohana</TableCell>
                  <TableCell  sx={{border:'none',fontSize:16 }}>4800.00</TableCell>
                  <TableCell  sx={{border:'none',fontSize:16}}>369.00</TableCell>
                  <TableCell  sx={{border:'none',fontSize:16}}>288.00</TableCell>

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

export default ProgresRep;
