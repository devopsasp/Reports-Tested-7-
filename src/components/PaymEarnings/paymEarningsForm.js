import {
  Grid, Card,
  TextField,
  Button,
  Typography,
  Box,
  CardContent, FormControl, InputLabel
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { PAYMBRANCHES, PAYMCOMPANIES, PAYMEARNING } from '../../serverconfiguration/controllers';

export default function PaymEarnForm() {
  const navigate = useNavigate();

  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [pnCompanyId, setPnCompanyId] = useState("");
  const [vEarningsCode, setVEarningsCode] = useState("");
  const [vEarningsName, setVEarningsName] = useState("");
  const [cRegular, setCRegular] = useState("");
  const [cPf, setCPf] = useState("");
  const [cEsi, setCEsi] = useState("");
  const [cOt, setCOt] = useState("");
  const [cLop, setCLop] = useState("");
  const [cPt, setCPt] = useState("");
  const [cPrint, setCPrint] = useState("");
  const [payslip, setPayslip] = useState("");
  const [status, setStatus] = useState("");
  const [dOrder, setDOrder] = useState("");
  const [pnBranchId, setPnBranchId] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMCOMPANIES);
      setCompany(data.data);
      const data1 = await getRequest(ServerConfig.url, PAYMBRANCHES);
      setBranch(data1.data);
    }
    getData();
  }, []);

  const validate = () => {
    let temp = {};
    temp.pnCompanyId = pnCompanyId ? "" : "This field is required.";
    temp.vEarningsCode = /^[a-zA-Z0-9!@#$%^&*()_+={}|:"<>?,./;'\\[\]`~-]*$/.test(vEarningsCode) ? "" : "Only alphanumeric and special characters are allowed.";
    temp.vEarningsName = /^[a-zA-Z ]+$/.test(vEarningsName) ? "" : "Only alphabetic characters are allowed.";
    temp.cRegular = /^[a-zA-Z]$/.test(cRegular) ? "" : "Only one alphabetic character is allowed.";
    temp.cPf = /^[a-zA-Z]$/.test(cPf) ? "" : "Only one alphabetic character is allowed.";
    temp.cEsi = /^[a-zA-Z]$/.test(cEsi) ? "" : "Only one alphabetic character is allowed.";
    temp.cOt = /^[a-zA-Z]$/.test(cOt) ? "" : "Only one alphabetic character is allowed.";
    temp.cLop = /^[a-zA-Z]$/.test(cLop) ? "" : "Only one alphabetic character is allowed.";
    temp.cPt = /^[a-zA-Z]$/.test(cPt) ? "" : "Only one alphabetic character is allowed.";
    temp.cPrint = /^[a-zA-Z]$/.test(cPrint) ? "" : "Only one alphabetic character is allowed.";
    temp.payslip = /^[a-zA-Z]$/.test(payslip) ? "" : "Only one alphabetic character is allowed.";
    temp.status = /^[a-zA-Z]$/.test(status) ? "" : "Only one alphabetic character is allowed.";
    temp.dOrder = /^[0-9]+$/.test(dOrder) ? "" : "Only numeric values are allowed.";
    temp.pnBranchId = pnBranchId ? "" : "This field is required.";

    setErrors({
      ...temp
    });

    return Object.values(temp).every(x => x === "");
  };

  const margin = { margin: "0 5px" };

  const handleSubmit = async () => {
    if (validate()) {
      const formData = {
        pnCompanyId: pnCompanyId,
        vEarningsCode: vEarningsCode,
        vEarningsName: vEarningsName,
        cRegular: cRegular,
        cPf: cPf,
        cEsi: cEsi,
        cOt: cOt,
        cLop: cLop,
        cPt: cPt,
        cPrint: cPrint,
        payslip: payslip,
        status: status,
        dOrder: dOrder,
        pnBranchId: pnBranchId,
        pnCompany: {
          "pnCompanyId": pnCompanyId
        }
      };
      try {
        await postRequest(ServerConfig.url, PAYMEARNING, formData);
        navigate('/PaymEarnTable');
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='S- Light' align='center'>DEPARTMENT</Typography>
            <form>
              <Grid container spacing={2} inputlabelprops={{ shrink: true }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel shrink>Company</InputLabel>
                    <select
                      name="pnCompanyId"
                      onChange={(e) => setPnCompanyId(e.target.value)}
                      style={{ height: '50px' }}
                      value={pnCompanyId}
                    >
                      <option value="">Select</option>
                      {company.map((e) => <option key={e.pnCompanyId} value={e.pnCompanyId}>{e.pnCompanyId}</option>)}
                    </select>
                    {errors.pnCompanyId && <Typography color="error">{errors.pnCompanyId}</Typography>}
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="vEarningsCode"
                      label="vEarningsCode"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setVEarningsCode(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={vEarningsCode}
                      error={!!errors.vEarningsCode}
                      helperText={errors.vEarningsCode}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="vEarningsName"
                      label="vEarningsName"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setVEarningsName(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={vEarningsName}
                      error={!!errors.vEarningsName}
                      helperText={errors.vEarningsName}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="cRegular"
                      label="cRegular"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setCRegular(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={cRegular}
                      error={!!errors.cRegular}
                      helperText={errors.cRegular}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="cPf"
                      label="cPf"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setCPf(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={cPf}
                      error={!!errors.cPf}
                      helperText={errors.cPf}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="cEsi"
                      label="cEsi"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setCEsi(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={cEsi}
                      error={!!errors.cEsi}
                      helperText={errors.cEsi}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="cOt"
                      label="cOt"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setCOt(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={cOt}
                      error={!!errors.cOt}
                      helperText={errors.cOt}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="cLop"
                      label="cLop"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setCLop(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={cLop}
                      error={!!errors.cLop}
                      helperText={errors.cLop}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="cPt"
                      label="cPt"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setCPt(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={cPt}
                      error={!!errors.cPt}
                      helperText={errors.cPt}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="cPrint"
                      label="cPrint"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setCPrint(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={cPrint}
                      error={!!errors.cPrint}
                      helperText={errors.cPrint}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="payslip"
                      label="payslip"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setPayslip(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={payslip}
                      error={!!errors.payslip}
                      helperText={errors.payslip}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="status"
                      label="status"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setStatus(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={status}
                      error={!!errors.status}
                      helperText={errors.status}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <TextField
                      name="dOrder"
                      label="dOrder"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setDOrder(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={dOrder}
                      error={!!errors.dOrder}
                      helperText={errors.dOrder}
                    />
                  </FormControl>
                </Grid>

                <Grid xs={12} sm={6} item>
                  <FormControl fullWidth>
                    <InputLabel shrink>BranchId</InputLabel>
                    <select
                      name="branchId"
                      onChange={(e) => setPnBranchId(e.target.value)}
                      style={{ height: '50px' }}
                      value={pnBranchId}
                    >
                      <option value="">Select</option>
                      {branch.map((e) => <option key={e.pnBranchId} value={e.pnBranchId}>{e.pnBranchId}</option>)}
                    </select>
                    {errors.pnBranchId && <Typography color="error">{errors.pnBranchId}</Typography>}
                  </FormControl>
                </Grid>

                <Grid container spacing={1} paddingTop={'10px'}>
                  <Grid item xs={12} align="right">
                    <Button style={margin} type="reset" variant='outlined' color='primary'>RESET</Button>
                    <Button
                      onClick={handleSubmit}
                      variant='contained' color='primary'>SAVE</Button>
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

{/*}
import {
  Grid, Card,
  TextField,
  Button,
  Typography,
  Box,
  CardContent, FormControl, InputLabel, FormHelperText
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRequest, postRequest } from '../../serverconfiguration/requestcomp';
import { ServerConfig } from '../../serverconfiguration/serverconfig';
import { PAYMBRANCHES, PAYMCOMPANIES, PAYMEARNING } from '../../serverconfiguration/controllers';

export default function PaymEarnForm() {
  const navigate = useNavigate();

  const [company, setCompany] = useState([]);
  const [branch, setBranch] = useState([]);
  const [pnCompanyId, setPnCompanyId] = useState("");
  const [vEarningsCode, setVEarningsCode] = useState("");
  const [vEarningsName, setVEarningsName] = useState("");
  const [cRegular, setCRegular] = useState("");
  const [cPf, setCPf] = useState("");
  const [cEsi, setCEsi] = useState("");
  const [cOt, setCOt] = useState("");
  const [cLop, setCLop] = useState("");
  const [cPt, setCPt] = useState("");
  const [cPrint, setCPrint] = useState("");
  const [payslip, setPayslip] = useState("");
  const [status, setStatus] = useState("");
  const [dOrder, setDOrder] = useState("");
  const [pnBranchId, setPnBranchId] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, PAYMCOMPANIES);
      setCompany(data.data);
      const data1 = await getRequest(ServerConfig.url, PAYMBRANCHES);
      setBranch(data1.data);
    }
    getData();
  }, []);

  const validate = () => {
    let temp = {};
    temp.pnCompanyId = pnCompanyId ? "" : "This field is required.";
    temp.vEarningsCode = /^[a-zA-Z0-9!@#$%^&*()_+={}|:"<>?,./;'\\[\]`~-]*$/.test(vEarningsCode) ? "" : "Only alphanumeric and special characters are allowed.";
    temp.vEarningsName = /^[a-zA-Z ]+$/.test(vEarningsName) ? "" : "Only alphabetic characters are allowed.";
    temp.cRegular = /^[a-zA-Z]$/.test(cRegular) ? "" : "Only one alphabetic character is allowed.";
    temp.cPf = /^[a-zA-Z]$/.test(cPf) ? "" : "Only one alphabetic character is allowed.";
    temp.cEsi = /^[a-zA-Z]$/.test(cEsi) ? "" : "Only one alphabetic character is allowed.";
    temp.cOt = /^[a-zA-Z]$/.test(cOt) ? "" : "Only one alphabetic character is allowed.";
    temp.cLop = /^[a-zA-Z]$/.test(cLop) ? "" : "Only one alphabetic character is allowed.";
    temp.cPt = /^[a-zA-Z]$/.test(cPt) ? "" : "Only one alphabetic character is allowed.";
    temp.cPrint = /^[a-zA-Z]$/.test(cPrint) ? "" : "Only one alphabetic character is allowed.";
    temp.payslip = /^[a-zA-Z]$/.test(payslip) ? "" : "Only one alphabetic character is allowed.";
    temp.status = /^[a-zA-Z]$/.test(status) ? "" : "Only one alphabetic character is allowed.";
    temp.dOrder = /^[0-9]+$/.test(dOrder) ? "" : "Only numeric values are allowed.";
    temp.pnBranchId = pnBranchId ? "" : "This field is required.";

    setErrors({
      ...temp
    });

    return Object.values(temp).every(x => x === "");
  };

  const margin = { margin: "0 5px" };

  const handleSubmit = async () => {
    if (validate()) {
      const formData = {
        pnCompanyId: pnCompanyId,
        vEarningsCode: vEarningsCode,
        vEarningsName: vEarningsName,
        cRegular: cRegular,
        cPf: cPf,
        cEsi: cEsi,
        cOt: cOt,
        cLop: cLop,
        cPt: cPt,
        cPrint: cPrint,
        payslip: payslip,
        status: status,
        dOrder: dOrder,
        pnBranchId: pnBranchId,
        pnCompany: {
          "pnCompanyId": pnCompanyId
        }
      };
      try {
        await postRequest(ServerConfig.url, PAYMEARNING, formData);
        navigate('/PaymEarnTable');
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <Typography variant='h5' color='S- Light' align='center'>DEPARTMENT</Typography>
            <form>
              <Grid container spacing={2} inputlabelprops={{ shrink: true }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={!!errors.pnCompanyId}>
                    <InputLabel shrink>Company</InputLabel>
                    <select
                      name="pnCompanyId"
                      onChange={(e) => setPnCompanyId(e.target.value)}
                      style={{ height: '50px' }}
                      value={pnCompanyId}
                    >
                      <option value="">Select</option>
                      {company.map((e) => <option key={e.pnCompanyId} value={e.pnCompanyId}>{e.pnCompanyId}</option>)}
                    </select>
                    {errors.pnCompanyId && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.pnCompanyId}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={!!errors.vEarningsCode}>
                    <TextField
                      name="vEarningsCode"
                      label="vEarningsCode"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setVEarningsCode(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={vEarningsCode}
                    />
                    {errors.vEarningsCode && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.vEarningsCode}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={!!errors.vEarningsName}>
                    <TextField
                      name="vEarningsName"
                      label="vEarningsName"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setVEarningsName(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={vEarningsName}
                    />
                    {errors.vEarningsName && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.vEarningsName}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={!!errors.cRegular}>
                    <TextField
                      name="cRegular"
                      label="cRegular"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setCRegular(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={cRegular}
                    />
                    {errors.cRegular && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.cRegular}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={!!errors.cPf}>
                    <TextField
                      name="cPf"
                      label="cPf"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setCPf(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={cPf}
                    />
                    {errors.cPf && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.cPf}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth error={!!errors.cEsi}>
                    <TextField
                      name="cEsi"
                      label="cEsi"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setCEsi(e.target.value)}
                      InputLabelProps={{ shrink: true }}
                      value={cEsi}
                    /> </FormControl>
                    */}

