import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Avatar, Table,Popover, TableBody, TableCell, TableRow, TableContainer, Paper, Container, TextField ,Dialog,DialogTitle,DialogContent,DialogActions,Button} from '@mui/material';
import { styled } from '@mui/material/styles';

import { blue } from '@mui/material/colors';
import san from '../images/profile.png';
import { getRequest, postRequest } from '../serverconfiguration/requestcomp';
import { ServerConfig } from '../serverconfiguration/serverconfig';
import { PAYMBRANCHES, REPORTS, SAVEBLOB } from '../serverconfiguration/controllers';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PayBranchForm from './PaymBranch/PaymBranchForm';

// Import ServerConfig and REPORTS if not already imported

const CustomCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
}));


const Header = styled(CardContent)(({ theme }) => ({
  backgroundColor: blue[500],
  color: 'white',
  textAlign:'center'
}));

const ProfileCard008 = ({ selectedEmployeeId }) => {
  const [branch, setBranch] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleTableCellClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    async function getData() {
        try {
            const response = await getRequest(ServerConfig.url, PAYMBRANCHES);
            if (response && response.data) {
                setBranch(response.data);
                console.log(response.data); 
            } 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    getData();
}, []);

  console.log(branch);
  return (
    <div style={{ marginLeft: '250px', borderRadius: '50px' }}>
      <Container>
        <CustomCard>
          <Header>
            <Typography gutterBottom variant="h5" component="div" justifyContent={'center'}  >
            {
                branch.length>0 && branch[0].branchName}
            
         
            </Typography>
          </Header>
          <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {/* <label htmlFor="avatar-upload"> */}
              {/* <Avatar
                alt="Profile Picture"
              
                // src={rolldata.length>0 && rolldata[0].image}
                sx={{ width: 150, height: 150, cursor: 'pointer' }}
               
              /> */}
              {/* <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
               
              /> */}
              {/* <span style={{ position: 'relative', top: -40, left: 60, backgroundColor: '#fff', borderRadius: '50%', padding: 5, cursor: 'pointer' }}>+</span> */}
            {/* </label> */}
            <TableContainer component={Paper} sx={{ boxShadow: 'none', marginLeft: 2 }}>
              <Table aria-label="profile details">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">COMPANYID</TableCell>
                    <TableCell>
                      {
                         branch.length > 0 && branch[0].pnCompanyId}             

                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">BRANCHID</TableCell>
                    <TableCell>
                     {branch.length > 0 && branch[0].pnBranchId} 
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">BRANCHCODE</TableCell>
                    <TableCell>
                      {
                        branch.length > 0 && branch[0].branchCode
                      } 
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">ADDRESS1</TableCell>
                    <TableCell>
                       {
                        branch.length > 0 && branch[0].addressLine1
                      } 
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">ADDRESS2</TableCell>
                    <TableCell>
                       {
                        branch.length > 0 && branch[0].addressLine2}
                        </TableCell> 
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">CITY</TableCell>
                    <TableCell>
                     {
                        branch.length > 0 && branch[0].city} 
                      </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">ZIPCODE</TableCell>
                    <TableCell>
                    {
                        branch.length > 0 && branch[0].zipCode} 
                      </TableCell>
                      
                
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">COUNTRY</TableCell>
                    <TableCell>

                     {
                        branch.length > 0 && branch[0].country} 
                      </TableCell>
                      
                
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">STATE</TableCell>
                    <TableCell>
                     {
                        branch.length > 0 && branch[0].status} 
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">PHONE NUMBER</TableCell>
                    <TableCell>
                     {
                        branch.length > 0 && branch[0].phoneNo} 
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">FAX NUMBER</TableCell>
                    <TableCell>
                    {
                        branch.length > 0 && branch[0].faxNo} 
                    </TableCell>
                  
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">EMAIL ID</TableCell>
                    <TableCell>
                     {
                        branch.length > 0 && branch[0].emailId} 
                    </TableCell>
                    
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">ALTERNATE EMAILID</TableCell>
                    <TableCell>
                     {
                        branch.length > 0 && branch[0].alternateEmailId} 
                    </TableCell>
                    
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">BRANCH USER ID</TableCell>
                    <TableCell>
                     {
                        branch.length > 0 && branch[0].branchUserId} 
                    </TableCell>
                    
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">BRANCH PASSWORD</TableCell>
                    <TableCell>
                     {
                        branch.length > 0 && branch[0].branchPassword} 
                    </TableCell>

                    <TableCell
        style={{
          backgroundColor: "navy",
          textAlign: "center",
          color:"white",
          cursor:'pointer'
         
        }}
        onClick={handleTableCellClick}>
        update
      </TableCell>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle style={{ backgroundColor: "#2196f3",color:"white" }}>Update Branch Password</DialogTitle>
   <br></br>
        <DialogContent>
            <TableRow >
          <TextField
            name= "old password*"
              placeholder='password*'   
            label="Old password*"
            
          >
          </TextField>
          </TableRow>
          <br></br>
          <TableRow>
          <TextField
            name= "New Password*"
              placeholder='new Password*'   
            label="new Password*"
          >
          </TextField>
          </TableRow>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{
            postRequest(ServerConfig.url,SAVEBLOB,{query:"update paym_branch set branch_password='"})}} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
            
                    
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">STATUS</TableCell>
                    <TableCell>
                     {
                        branch.length > 0 && branch[0].status} 
                    </TableCell>
                    
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">PF NO</TableCell>
                    <TableCell>
                     {
                        branch.length > 0 && branch[0].pfno} 
                    </TableCell>
                    
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">ESI NO</TableCell>
                    <TableCell>
                    {
                        branch.length > 0 && branch[0].esino}
                    </TableCell>
                    
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">START DATE</TableCell>
                    <TableCell>
                    {
                        branch.length > 0 && branch[0].startDate}
                    </TableCell>
                    
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">END DATE</TableCell>
                    <TableCell>
                    {
                        branch.length > 0 && branch[0].endDate}
                    </TableCell>
                    
                  </TableRow>
                  
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </CustomCard>
      </Container>
      
    </div>
  );
};

export default ProfileCard008;
