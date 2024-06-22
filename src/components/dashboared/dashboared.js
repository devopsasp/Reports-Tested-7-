import React, { useEffect, useState } from 'react';
import Sidenav from './sidenav';
import Navbar from '../nav';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts';
import { Grid } from '@mui/material';
import { getRequest } from '../../serverconfiguration/requestcomp';
import { AGGREGATE } from '../../serverconfiguration/controllers';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
export default function DashBoard() {

  const [data,setData]=useState(0)
 useEffect(()=>{

         async function getData()
          { 
           return getRequest(ServerConfig.url,AGGREGATE);
          }
          getData().then((e)=>setData(e.data))

 },[])
  
  
  return (
    <>
    <div  style={{ backgroundColor: "#1769aa" }}>
    <Navbar/>
    <Box height={30}  />
    <Box sx={{ display: 'flex' }}>
    <Sidenav />
    <Grid container style={{justifyContent:"center"}}>
      <Grid columns={12 }>
    <Box component="main" sx={{ m:5, p: 3, alignContent:"center",backgroundColor:"pink",borderRadius:"20px",width:130,height:130}}>
    <h1>{data}</h1>
      </Box>
      </Grid>
      <Grid>
      <Box component="main" sx={{m:5,  p: 3,alignContent:"center", backgroundColor:"pink",borderRadius:"20px",width:130,height:130}}>
    <h1>{data}</h1>
      </Box>
      </Grid>
      <Grid>
    <Box component="main" sx={{ m:5, p: 3, alignContent:"center",backgroundColor:"pink",borderRadius:"20px",width:130,height:130}}>
    <h1>12</h1>
      </Box>
      </Grid>
      <Grid>
      <Box component="main" sx={{m:5,  p: 3,alignContent:"center", backgroundColor:"pink",borderRadius:"20px",width:130,height:130}}>
    <h1>12</h1>
      </Box>
      </Grid>
   </Grid>
   </Box>
   </div>
   <div>
    <Grid container justifyContent={'space-between'}>
      
      <Grid item>
        <Box component="main" sx={{ ml: 30, alignItems: "left"}}>
          <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={350}
            height={350}
          />
        </Box>
      </Grid>

      <Grid item>  
        <Box component="main" sx={{ }}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' },
                ],
              },
            ]}
            width={300}
            height={350}
          />
        </Box>
      </Grid>

      <Grid item>
        <Box component="main" sx={{  }}>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                area: true,
              },
            ]}
            width={300}
            height={350}
          />
        </Box>
      </Grid>
    </Grid>
  </div>
     
</>    
  );
}