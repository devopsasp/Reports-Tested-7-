import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid } from '@mui/material';

function PayRegister() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <Grid>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
        A.V.THOMAS LEATHER & ALLIED PRODUCTS PRIVATE LTD
        </Typography>
      </Grid>

      <Grid>
        <Typography variant="h6">
        Salary Register Of FEBRUARY 2010            
        </Typography>
        
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '2500px' }}>
          <Table>
            <TableBody>
              <TableRow sx={{ border:'none',borderRight: '3px solid black',borderLeft: '3px solid black',  borderTop:'3px solid black',fontSize:10 }}>
                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6 }}>Emp.Code</TableCell>
                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6 }}>Emp.Code</TableCell>
                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6 }}>S.No</TableCell>
                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6  }}>Emp.Code</TableCell>
                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6  }}>Emp.Name</TableCell>
                <TableCell style={{  border:'none',fontWeight: 'bold' ,fontSize:6 }}>Dept</TableCell>
                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6  }}>Days Wrk</TableCell>  
                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6  }}>N.F.H</TableCell>
                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6  }}>Lop Days</TableCell>

                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6 }}>Paid Days</TableCell>

                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6  }}>OT Hrs</TableCell>

                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6 }}>Basic</TableCell>

                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6  }}>HRA</TableCell>

                <TableCell style={{ border:'none', fontWeight: 'bold',fontSize:6}}>Other Allowance</TableCell>
                <TableCell style={{ border:'none', fontWeight: 'bold',fontSize:6  }}>VDA</TableCell>

                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6}}>Total Salary</TableCell>
                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6 }}>Nt.Basic</TableCell>
                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6 }}>NT.HRA</TableCell>
                <TableCell style={{  border:'none',fontWeight: 'bold',fontSize:6}}>NT.Other Allowance</TableCell>
                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}>NT.VDA</TableCell>
                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}>ASS</TableCell>
                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}>OT Amount</TableCell>

                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}>GR.ERNGS  </TableCell>

                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}>PF</TableCell>

                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}>ESI</TableCell>
                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}>LOAN</TableCell>
                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}>Others</TableCell>
                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}></TableCell>
                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6}}></TableCell>
                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}></TableCell>
                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}></TableCell>
                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}>TTL DDN</TableCell>
                <TableCell style={{ border:'none',fontWeight: 'bold',fontSize:6 }}>Net Amount</TableCell>







                
              </TableRow>

              {[...Array(55).keys()].map((row, index) => (
                <TableRow key={row + 1} sx={{
                  borderRight: '3px solid black',
                  borderLeft: '3px solid black',
                  ...(index === 54 && { borderBottom: '3px solid black', fontWeight: 'bold' })
                }}>
                  <TableCell sx={{border: 'none',fontSize:9}}>{row + 1}</TableCell>
                  <TableCell sx={{border: 'none',fontSize:9}}>0009</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>Meenakshi</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>2nd..</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>22.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>0.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>4.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>2.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>22.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>00.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>1818.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>909.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>200.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>909.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>3,836.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>1667.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>833.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>183.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>833.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>909.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>0.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>4,425.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>300.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>78.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>1,500.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>2497.50</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>0.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>0.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>0.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>0.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>4,376.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>50.00</TableCell>
                  <TableCell  sx={{border: 'none',fontSize:9}}>50.00</TableCell>


























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

export default PayRegister;
