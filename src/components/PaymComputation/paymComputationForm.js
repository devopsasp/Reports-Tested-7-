import { Grid, Card, TextField, Button, Typography, CardContent, InputLabel, FormControl, Select, MenuItem, FormHelperText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { PAYMBRANCHES, PAYMCOMPANIES, PAYMCOMPUTATION } from '../../serverconfiguration/controllers';

export default function ComputationForm() {
  const navigate = useNavigate();
  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [pnCompanyId, setPnCompanyId] = useState("");
  const [pnBranchId, setPnBranchId] = useState("");
  const [type, setType] = useState("");
  const [pnEarningsCode, setPnEarningsCode] = useState("");
  const [value, setValue] = useState("");

  const [companyError, setCompanyError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [pnEarningsCodeError, setPnEarningsCodeError] = useState(false);
  const [valueError, setValueError] = useState(false);

  useEffect(() => {
    async function getData() {
      const companyData = await getRequest(ServerConfig.url, PAYMCOMPANIES);
      setCompany(companyData.data);
      const branchData = await getRequest(ServerConfig.url, PAYMBRANCHES);
      setBranch(branchData.data);
    }

    getData();
  }, []);

  const handleCompanyChange = (e) => {
    setPnCompanyId(e.target.value);
    setCompanyError(!e.target.value);
  };

  const handleBranchChange = (e) => {
    setPnBranchId(e.target.value);
    setBranchError(!e.target.value);
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    const isValid = /^[A-Za-z]{0,20}$/.test(value);
    setType(value);
    setTypeError(!isValid);
  };

  const handlePnEarningsCodeChange = (e) => {
    const value = e.target.value;
    const isValid = /^[A-Za-z0-9]{0,50}$/.test(value);
    setPnEarningsCode(value);
    setPnEarningsCodeError(!isValid);
  };

  const handleValueChange = (e) => {
    const value = e.target.value;
    setValue(value);
    setValueError(isNaN(value) || !value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setCompanyError(!pnCompanyId);
    setBranchError(!pnBranchId);
    setTypeError(!/^[A-Za-z]{1,20}$/.test(type));
    setPnEarningsCodeError(!/^[A-Za-z0-9]{1,50}$/.test(pnEarningsCode));
    setValueError(isNaN(value) || !value);

    if (companyError || branchError || typeError || pnEarningsCodeError || valueError) {
      return;
    }

    const formData = {
      pnCompanyId: pnCompanyId,
      pnBranchId: pnBranchId,
      type: type,
      pnEarningsCode: pnEarningsCode,
      value: parseFloat(value),
      pnCompany: {
        pnCompanyId: pnCompanyId
      }
    };

    try {
      const response = await postRequest(ServerConfig.url, PAYMCOMPUTATION, formData);
      console.log(response);
      navigate('/PaymComputationtables');
    } catch (error) {
      console.log(error);
    }
  };

  const margin = { margin: "0 5px" };

  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='S- Light' align='center'>Computation Form</Typography>
            <Typography variant='subtitle1' color="textSecondary" paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} inputlabelprops={{ shrink: true }}>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth >
                    <InputLabel shrink>CompanyId</InputLabel>
                    <Select
                      value={pnCompanyId}
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
                    {companyError && <FormHelperText sx={{ color: 'red' }}>Please select a CompanyId</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth >
                    <InputLabel shrink>BranchId</InputLabel>
                    <Select
                      name="branchId"
                      value={pnBranchId}
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
                    {branchError && <FormHelperText sx={{ color: 'red' }}>Please select a BranchId</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={12} item>
                  <FormControl fullWidth error={typeError}>
                    <TextField
                      name="type"
                      label="Type"
                      variant="outlined"
                      fullWidth
                      required
                      value={type}
                      onChange={handleTypeChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {typeError && <FormHelperText sx={{ color: 'red' }}>Please enter a valid Type (only alphabetic characters, max length 20)</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={12} item>
                  <FormControl fullWidth error={pnEarningsCodeError}>
                    <TextField
                      name="pnEarningsCode"
                      label="PnEarningsCode"
                      variant="outlined"
                      fullWidth
                      required
                      value={pnEarningsCode}
                      onChange={handlePnEarningsCodeChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {pnEarningsCodeError && <FormHelperText sx={{ color: 'red' }}>Please enter a valid PnEarningsCode (alphanumeric characters, max length 50)</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid xs={12} sm={12} item>
                  <FormControl fullWidth error={valueError}>
                    <TextField
                      name="value"
                      label="Value"
                      variant="outlined"
                      fullWidth
                      required
                      value={value}
                      onChange={handleValueChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {valueError && <FormHelperText sx={{ color: 'red' }}>Please enter a valid numeric value</FormHelperText>}
                  </FormControl>
                </Grid>
                <Grid container spacing={1} paddingTop={'10px'}>
                  <Grid item xs={12} align="right">
                    <Button style={margin} type="reset" variant='outlined' color='primary'>RESET</Button>
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
