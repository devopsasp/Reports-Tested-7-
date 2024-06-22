import { Grid, Card, TextField, Button, Typography, CardContent, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { HRMMSKILLMASTER, PAYMBRANCHES, PAYMCOMPANIES } from '../../serverconfiguration/controllers';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { useNavigate } from 'react-router-dom';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { inputFormHrmmSkillsMaster } from './HrmmSkillsMaster';

const SkillsMasterForm = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState([]);
  const [branch,setBranch] = useState([]);
  const [PnCompanyId, setPnCompanyId] = useState("");
  const [vSkillName, setVSkillName] = useState("");
  const [status, setStatus] = useState("");
  const [branchId, setBranchId] = useState("");

  const [vSkillNameError, setVSkillNameError] = useState(false);
  const [statusError, setStatusError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [branchError, setBranchError] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMCOMPANIES);
      setCompany(data.data);
      const data1 = await getRequest(ServerConfig.url, PAYMBRANCHES);
      setBranch(data1.data);
    }
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCompanyError(!PnCompanyId);
    setBranchError(!branchId);

    if (!PnCompanyId || !branchId || vSkillNameError || statusError) {
      return;
    }

    const formData = {
      pnCompanyId: PnCompanyId,
      branchId: branchId,
      vSkillName: vSkillName,
      status: status,
      pnCompany: {
        pnCompanyId: PnCompanyId
      }
    };

    postRequest(ServerConfig.url, HRMMSKILLMASTER, formData)
      .then((e) => {
        console.log(e);
        navigate('/Hrmskillmastertable');
      })
      .catch((e) => console.log(e));
  };

  const handleVSkillNameChange = (e) => {
    const value = e.target.value;
    const regex = /^[\w\s!@#$%^&*(),.?":{}|<>]*$/; // Alphanumeric and special characters
    setVSkillName(value);
    setVSkillNameError(!regex.test(value));
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z]*$/; // Alphabetic characters only
    setStatus(value);
    setStatusError(!regex.test(value));
  };

  const handleCompanyChange = (e) => {
    const value = e.target.value;
    setPnCompanyId(value);
    setCompanyError(!value);
  };

  const handleBranchChange = (e) => {
    const value = e.target.value;
    setBranchId(value);
    setBranchError(!value);
  };

  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto", font: 'initial' }}>
          <CardContent>
            <Typography sx={{ mt: 3 }} align='center' color='primary' variant="h5">Hrmm Skill Master</Typography>

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
                  <FormControl fullWidth error={vSkillNameError}>
                    <TextField
                      name="vSkillName"
                      label="vSkillName"
                      variant="outlined"
                      fullWidth
                      required
                      inputProps={{ maxLength: 40 }}
                      onChange={handleVSkillNameChange}
                    />
                    {vSkillNameError && <FormHelperText>Invalid: Only alphabetic, numeric, and special characters are allowed</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth error={statusError}>
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

export default SkillsMasterForm;
