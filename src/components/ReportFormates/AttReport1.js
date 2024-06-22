import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function AttReport() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        AV THOMAS LEATHER AND ALLIED PRODUCTS
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h5" gutterBottom style={{ textAlign: 'center' }}>
        Attendance Details For the Period of 01/10/2010 to 30/10/2010      
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
              <TableRow sx={{ borderBottom: '3px solid black',borderTop:'3px solid black', fontWeight: 'bold' }}>
                <TableCell style={{ borderBottom:'3px solid black',borderLeft:'3px solid black',fontWeight: 'bold',fontSize:15}}>S.No</TableCell>
                <TableCell style={{borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:15}}>Date</TableCell>
                <TableCell style={{ borderBottom:'3px solid black',fontWeight: 'bold',fontSize:15 }}>Shift</TableCell>
                <TableCell style={{ borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:15}}>In Time</TableCell>
                <TableCell style={{ borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:15}}>Out Time</TableCell>
                <TableCell style={{ borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:15}}>Break In</TableCell>
                <TableCell style={{ borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:15}}>Break Out</TableCell>
                <TableCell style={{borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:15}}>Early In</TableCell>
                <TableCell style={{ borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:15}}>Late In</TableCell>
                <TableCell style={{ borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:15}}>Late Out</TableCell>
                <TableCell style={{ borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:15}}>Early Out</TableCell>
                <TableCell style={{ borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:15}}>T Whrs</TableCell>
                <TableCell style={{ borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:15}}>OT Hrs</TableCell>
                <TableCell style={{borderRight:'3px solid black' ,borderBottom:'3px solid black',fontWeight: 'bold' ,fontSize:15}}>Leave Name</TableCell>
              </TableRow>
           
              <TableRow sx={{ borderBottom: '3px solid black', fontWeight: 'bold',bottomLeft:'3px solid black' }}>
                <TableCell style={{borderLeft:'3px solid black',borderBottom: '3px solid black',fontWeight: 'bold',fontSize:18}}>Emp.Code:</TableCell>
                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:18 }}>0001</TableCell>
                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:15 }}>Emp.Name:</TableCell>
                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:15 }}>R Ambhigai</TableCell>

                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>

                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>

                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>


                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>

                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>


                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>

                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>


                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>
                <TableCell style={{ borderBottom: '3px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>




                <TableCell style={{ borderRight:'3px solid black',borderBottom: '3px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>

               
              </TableRow>


              {[...Array(24).keys()].map((row, index) => (
                <TableRow key={row + 1} sx={index === 24 ? { borderBottom: '3px solid black' } : {}}>
                  <TableCell sx={{borderLeft:'2px solid black', borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15}}>{row + 1}</TableCell>
                  <TableCell sx={{ borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15}}>04/10/2010</TableCell>
                  <TableCell  sx={{ borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15 }}>G</TableCell>
                  <TableCell  sx={{ borderBottom: '2px solid black',fontWeight: 'bold' ,fontSize:15}}>08:56</TableCell>
                  <TableCell  sx={{ borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>
                  <TableCell  sx={{ borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>
                  <TableCell  sx={{ borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15 }}>17:30</TableCell>
                  <TableCell  sx={{ borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15 }}>00.04</TableCell>                  
                  <TableCell  sx={{ borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>
                  <TableCell  sx={{ borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15 }}>00.06</TableCell>
                  <TableCell  sx={{ borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>
                  <TableCell  sx={{ borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15 }}>07:30</TableCell>
                  <TableCell  sx={{ borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15 }}>00:00</TableCell>
                  <TableCell  sx={{borderRight:'2px solid black', borderBottom: '2px solid black',fontWeight: 'bold',fontSize:15 }}></TableCell>








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

export default AttReport;
