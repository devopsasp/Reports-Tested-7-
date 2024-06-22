import { Grid, Card, TextField, Button, Typography, CardContent, FormControl, Select, MenuItem, InputLabel, FormHelperText } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { PAYMBRANCHES, PAYMCOMPANIES } from '../../serverconfiguration/controllers';
import { HRMMCOURSE } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { useNavigate } from 'react-router-dom';
import { ServerConfig } from '../../serverconfiguration/serverconfig';

const CourseForm = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [PnCompanyId, setPnCompanyId] = useState("");
  const [branchId, setBranchid] = useState("");

  const [VCourseName, setVCourseName] = useState("");
  const [status, setStatus] = useState("");

  const [statusError, setStatusError] = useState(false);
  const [vCourseNameError, setVCourseNameError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [branchError, setBranchError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setCompanyError(!PnCompanyId);
    setBranchError(!branchId);

    if (!PnCompanyId || !branchId || vCourseNameError || statusError) {
      return;
    }

    const formData = {
      pnCompanyId: PnCompanyId,
      branchId: branchId,
      vCourseName: VCourseName,
      status: status,
      pnCompany: {
        pnCompanyId: PnCompanyId
      }
    };

    postRequest(ServerConfig.url, HRMMCOURSE, formData)
      .then((e) => {
        console.log(e);
        navigate('/Hrmcoursetable');
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMCOMPANIES);
      setCompany(data.data);
      const data1 = await getRequest(ServerConfig.url, PAYMBRANCHES);
      setBranch(data1.data);
    }
    getData();
  }, []);

  const handleStatusChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z]*$/; // Alphabetic characters only
    setStatus(value);
    setStatusError(!regex.test(value));
  };

  const handleVCourseNameChange = (e) => {
    const value = e.target.value;
    const regex = /^[\w\s!@#$%^&*(),.?":{}|<>]*$/; // Alphanumeric and special characters
    setVCourseName(value);
    setVCourseNameError(!regex.test(value));
  };

  const handleCompanyChange = (e) => {
    const value = e.target.value;
    setPnCompanyId(value);
    setCompanyError(false); // Reset error when a company is selected
  };

  const handleBranchChange = (e) => {
    const value = e.target.value;
    setBranchid(value);
    setBranchError(false); // Reset error when a branch is selected
  };

  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto", font: 'initial' }}>
          <CardContent>
            <Typography sx={{ mt: 3 }} align='center' color='primary' variant="h5">Hrmm Course</Typography>

            <Typography variant='subtitle1' color="textSecondary" paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} inputlabelprops={{ shrink: true }}>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth >
                    <InputLabel shrink>CompanyId</InputLabel>
                    <Select
                      value={PnCompanyId}
                      onChange={handleCompanyChange}
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {company.map((e) => (
                        <MenuItem key={e.pnCompanyId} value={e.pnCompanyId}>{e.pnCompanyId}</MenuItem>
                      ))}
                    </Select>
                    {companyError && <FormHelperText sx={{ color: 'red' }}>Please Select a CompanyId</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth error={vCourseNameError}>
                    <TextField
                      name="vCourseName"
                      label="VCourseName"
                      variant="outlined"
                      fullWidth
                      required
                      inputProps={{ maxLength: 40 }}
                      onChange={handleVCourseNameChange}
                    />
                    {vCourseNameError && <FormHelperText>Invalid: Only alphabetic, numeric, and special characters are allowed</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth error={statusError}>
                    <InputLabel shrink>status</InputLabel>
                    <TextField
                      name="status"
                      label="status"
                      variant="outlined"
                      fullWidth
                      required
                      inputProps={{ maxLength: 1, pattern: "[A-Za-z]" }}
                      onChange={handleStatusChange}
                    />
                    {statusError && <FormHelperText>Invalid: Only alphabetic values are allowed</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth >
                    <InputLabel shrink>BranchId</InputLabel>
                    <Select
                      name="branchId"
                      value={branchId}
                      onChange={handleBranchChange}
                      displayEmpty
                      style={{ height: '50px' }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {branch.map((e) => (
                        <MenuItem key={e.pnBranchId} value={e.pnBranchId}>{e.pnBranchId}</MenuItem>
                      ))}
                    </Select>
                    {branchError && <FormHelperText sx={{ color: 'red' }}>Please Select a BranchId</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid container spacing={1}>
                  <Grid item xs={12} align="right" style={{ marginTop: '20px' }}>
                    <Button type="reset" variant="contained" color="primary" style={{ marginRight: '10px' }}>Reset</Button>
                    <Button type="submit" variant='contained' color='primary'>SAVE</Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default CourseForm;
