import { Grid, Card, TextField, Button, Typography, CardContent, FormControl, InputLabel, FormHelperText, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { PAYMBRANCHES, PAYMCOMPANIES, PAYMDEDUCTION } from '../../serverconfiguration/controllers';

export default function DeductionForm() {
  const navigate = useNavigate();

  const [company, setCompany] = useState([]);
  const [pnCompanyId, setPnCompanyId] = useState("");
  const [pnBranchId, setPnBranchId] = useState("");
  const [vDeductionCode, setVDeductionCode] = useState("");
  const [vDeductionName, setVDeductionName] = useState("");
  const [cRegular, setCRegular] = useState("");
  const [cPrint, setCPrint] = useState("");
  const [status, setStatus] = useState("");
  const [dOrder, setDOrder] = useState("");

  const [companyError, setCompanyError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [vDeductionCodeError, setVDeductionCodeError] = useState(false);
  const [vDeductionNameError, setVDeductionNameError] = useState(false);
  const [cRegularError, setCRegularError] = useState(false);
  const [cPrintError, setCPrintError] = useState(false);
  const [statusError, setStatusError] = useState(false);
  const [dOrderError, setDOrderError] = useState(false);
  const [branch,setBranch] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMCOMPANIES);
      setCompany(data.data);
      const data1 = await getRequest(ServerConfig.url, PAYMBRANCHES);
      setBranch(data1.data);
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

  const handleVDeductionCodeChange = (e) => {
    const value = e.target.value;
    const isValid = /^[A-Za-z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{1,40}$/.test(value);
    setVDeductionCode(value);
    setVDeductionCodeError(!isValid);
  };

  const handleVDeductionNameChange = (e) => {
    const value = e.target.value;
    const isValid = /^[A-Za-z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{1,40}$/.test(value);
    setVDeductionName(value);
    setVDeductionNameError(!isValid);
  };

  const handleCRegularChange = (e) => {
    const value = e.target.value;
    const isValid = /^[A-Za-z]{1}$/.test(value);
    setCRegular(value);
    setCRegularError(!isValid);
  };

  const handleCPrintChange = (e) => {
    const value = e.target.value;
    const isValid = /^[A-Za-z]{1}$/.test(value);
    setCPrint(value);
    setCPrintError(!isValid);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    const isValid = /^[A-Za-z]{1}$/.test(value);
    setStatus(value);
    setStatusError(!isValid);
  };

  const handleDOrderChange = (e) => {
    const value = e.target.value;
    const isValid = !isNaN(value) && value !== '';
    setDOrder(value);
    setDOrderError(!isValid);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setCompanyError(!pnCompanyId);
    setBranchError(!pnBranchId);
    setVDeductionCodeError(!/^[A-Za-z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{1,40}$/.test(vDeductionCode));
    setVDeductionNameError(!/^[A-Za-z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{1,40}$/.test(vDeductionName));
    setCRegularError(!/^[A-Za-z]{1}$/.test(cRegular));
    setCPrintError(!/^[A-Za-z]{1}$/.test(cPrint));
    setStatusError(!/^[A-Za-z]{1}$/.test(status));
    setDOrderError(isNaN(dOrder) || !dOrder);

    if (
      companyError ||
      branchError ||
      vDeductionCodeError ||
      vDeductionNameError ||
      cRegularError ||
      cPrintError ||
      statusError ||
      dOrderError
    ) {
      return;
    }

    const formData = {
      pnCompanyId: pnCompanyId,
      pnBranchId: pnBranchId,
      vDeductionCode: vDeductionCode,
      vDeductionName: vDeductionName,
      cRegular: cRegular,
      cPrint: cPrint,
      status: status,
      dOrder: parseInt(dOrder),
      pnCompany: {
        pnCompanyId: pnCompanyId
      }
    };

  
    try {
      const response = await postRequest(ServerConfig.url, PAYMDEDUCTION, formData);
      console.log(response);
      navigate('/PaymDeductionTable');
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
            <Typography variant='h5' color='S- Light' align='center'>Deduction Form </Typography>
            <Typography variant='subtitle1' color="textSecondary" paddingBottom={'20px'}>
              Fill all the Mandatory fields
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} inputlabelprops={{ shrink: true }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Company</InputLabel>
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
                    {companyError && <FormHelperText sx={{ color: 'red' }}>Please select a Company</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>BranchId</InputLabel>
                    <Select
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

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      name="vDeductionCode"
                      label="vDeductionCode"
                      variant="outlined"
                      fullWidth
                      required
                      value={vDeductionCode}
                      onChange={handleVDeductionCodeChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {vDeductionCodeError && <FormHelperText sx={{ color: 'red' }}>Please enter a valid Deduction Code (alphanumeric and special characters, max length 40)</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      name="vDeductionName"
                      label="vDeductionName"
                      variant="outlined"
                      fullWidth
                      required
                      value={vDeductionName}
                      onChange={handleVDeductionNameChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {vDeductionNameError && <FormHelperText sx={{ color: 'red' }}>Please enter a valid Deduction Name (alphanumeric and special characters, max length 40)</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      name="cRegular"
                      label="cRegular"
                      variant="outlined"
                      fullWidth
                      required
                      value={cRegular}
                      onChange={handleCRegularChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cRegularError && <FormHelperText sx={{ color: 'red' }}>Please enter a valid value for cRegular (single alphabetic character)</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      name="cPrint"
                      label="cPrint"
                      variant="outlined"
                      fullWidth
                      required
                      value={cPrint}
                      onChange={handleCPrintChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {cPrintError && <FormHelperText sx={{ color: 'red' }}>Please enter a valid value for cPrint (single alphabetic character)</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      name="status"
                      label="status"
                      variant="outlined"
                      fullWidth
                      required
                      value={status}
                      onChange={handleStatusChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {statusError && <FormHelperText sx={{ color: 'red' }}>Please enter a valid Status (single alphabetic character)</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      name="dOrder"
                      label="dOrder"
                      variant="outlined"
                      fullWidth
                      required
                      value={dOrder}
                      onChange={handleDOrderChange}
                      InputLabelProps={{ shrink: true }}
                    />
                    {dOrderError && <FormHelperText sx={{ color: 'red' }}>Please enter a valid numeric value for dOrder</FormHelperText>}
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