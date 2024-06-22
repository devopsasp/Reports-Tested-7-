import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function ConsWipes() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        AV THOMAS LEATHER AND ALLIED PRODUCTS
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
        Swipe report for the month of October 2010      
          </Typography>
      </Grid>
      <Grid>
        <Typography variant="h6" style={{textAlign:'left',paddingLeft:'800px'}}>
        Print Date  :  28/06/20       
         </Typography>
      </Grid>
      

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1200px' }}>
          <Table>
            <TableBody>
            <TableRow sx={{borderTop:'3px solid black', borderBottom: '3px solid black', fontWeight: 'bold',bottomLeft:'3px solid black' }}>
                <TableCell style={{borderLeft:'3px solid black',borderBottom: '3px solid black',fontWeight: 'bold',fontSize:20}}>Emp.Code:</TableCell>
                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:20 }}>0001</TableCell>
                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:20 }}>Emp.Name:</TableCell>
                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:20 }}>R Ambhigai</TableCell>

                

               

                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:20 }}></TableCell>
                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:20 }}></TableCell>

                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:20 }}></TableCell>



                <TableCell style={{ borderRight:'3px solid black',borderBottom: '3px solid black',fontWeight: 'bold',fontSize:20 }}></TableCell>

               
              </TableRow>

  
              <TableRow sx={{ borderBottom: '3px solid black',borderTop:'3px solid black', fontWeight: 'bold' }}>
                <TableCell style={{ borderBottom:'3px solid black',borderLeft:'3px solid black',borderRight:'3px solid black',fontWeight: 'bold',fontSize:20}}>S.No</TableCell>
                <TableCell style={{borderRight:'3px solid black',borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:20}}>Date</TableCell>
                <TableCell style={{borderRight:'3px solid black', borderBottom:'3px solid black',fontWeight: 'bold',fontSize:20 }}>Start Time</TableCell>
                <TableCell style={{ borderRight:'3px solid black',borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:20}}>Break Time(O)</TableCell>
                <TableCell style={{ borderRight:'3px solid black',borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:20}}>Break Time(I)</TableCell>
                <TableCell style={{borderRight:'3px solid black', borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:20}}>End Time</TableCell>
               
                <TableCell style={{ borderRight:'3px solid black',borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:20}}>OT Hrs</TableCell>
                <TableCell style={{borderRight:'3px solid black' ,borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:20}}>Leave Name</TableCell>
              </TableRow>
           
              
              {[...Array(24).keys()].map((row, index) => (
                <TableRow key={row + 1} sx={index === 24 ? { borderBottom: '3px solid black' } : {}}>
                  <TableCell sx={{borderRight:'3px solid black',borderLeft:'2px solid black', borderBottom: '2px solid black',fontSize:20}}>{row + 1}</TableCell>
                  <TableCell sx={{ borderRight:'3px solid black',borderBottom: '2px solid black',fontSize:20}}>04/10/2010</TableCell>
                  <TableCell  sx={{ borderRight:'3px solid black',borderBottom: '2px solid black',fontSize:20}}>08:56</TableCell>
                  <TableCell  sx={{ borderRight:'3px solid black',borderBottom: '2px solid black',fontSize:20 }}></TableCell>
                  <TableCell  sx={{ borderRight:'3px solid black',borderBottom: '2px solid black',fontSize:20 }}></TableCell>
                  <TableCell  sx={{ borderRight:'3px solid black',borderBottom: '2px solid black',fontSize:20 }}>17:30</TableCell>
                  <TableCell  sx={{ borderRight:'3px solid black',borderBottom: '2px solid black',fontSize:20 }}>00:00</TableCell>
                  <TableCell  sx={{borderRight:'2px solid black', borderBottom: '2px solid black',fontSize:20 }}></TableCell>








                </TableRow>

               
              ))}
            </TableBody>

            <TableRow>
                <TableCell style={{borderLeft:'3px solid black' ,borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:20}}>Total</TableCell>
                <TableCell  style={{borderBottom:'3px solid black',fontSize:20}}>Present Days</TableCell>
                <TableCell style={{borderBottom:'3px solid black',fontSize:20}}>20.00</TableCell>
                <TableCell style={{borderBottom:'3px solid black',fontSize:20}}></TableCell>
                <TableCell style={{borderBottom:'3px solid black',fontSize:20}}></TableCell>
                <TableCell style={{borderBottom:'3px solid black',fontSize:20}}>Total OT Hours</TableCell>
                <TableCell style={{borderBottom:'3px solid black',fontSize:20}}>19.00</TableCell>
                <TableCell style={{borderRight:'3px solid black',borderBottom:'3px solid black',fontSize:20}}></TableCell>

            </TableRow>
          </Table>
        </TableContainer>
        <br />
      </Grid>
    
    </div>
  );
}

export default ConsWipes;
