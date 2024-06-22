import React from "react";
import {
  Typography,
  Table,
  TableBody,
  Container,
  TableCell,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TableContainer,
  TableRow,
  Paper,
  Grid,
  Button,
} from "@mui/material";
import generatePDF from "react-to-pdf";
import { useState } from "react";
import { useEffect } from "react";
import { postRequest } from "../../serverconfiguration/requestcomp";

import { ServerConfig } from "../../serverconfiguration/serverconfig";
import { REPORTS } from "../../serverconfiguration/controllers";
import { useRef } from "react";
import { BoltRounded } from "@mui/icons-material";
function AttendanceD2Reports() {
  const [rolldata, setRolldata] = useState([]);

  const [formData, setFormData] = useState({
    selectedMonth: "",
    selectedYear: "", // Add selectedYear state
  });

  useEffect(() => {
    // Check if both month and year are selected, then fetch data
    if (formData.selectedMonth && formData.selectedYear) {
      getData();
    }
  }, [formData.selectedMonth, formData.selectedYear]); // Watch both selectedMonth and selectedYear

  // Function to fetch data
  const getData = async () => {
    try {
      const response = await postRequest(ServerConfig.url, REPORTS, {
        query: `SELECT emp_code, emp_name, (select dateofbirth from paym_employee where employeecode=emp_code)as dob,(select Branch_Name from paym_employee where employeecode=emp_code)as Branch_Name,(select father_name from paym_employee_profile1 where pn_employeeid=(select pn_employeeid from paym_employee where employeecode=emp_code)) as father_name,(select v_DesignationName from paym_designation where pn_designationid=(select pn_DesingnationId from paym_employee_profile1 where pn_employeeid=(select pn_employeeid from paym_employee where employeecode=emp_code))) as designation, (SELECT   CONCAT(Address_Line1, ', ', Address_Line2, ', ', City)  from paym_branch where pn_branchid = (select pn_branchid from paym_employee where employeecode=emp_code )) as FullAddress,COUNT(CASE WHEN status = 'P' THEN 1 END) AS total_P,COUNT(CASE WHEN status = 'A' THEN 1 END) AS total_A, COUNT(CASE WHEN status = 'L' THEN 1 END) AS total_L, COUNT (CASE WHEN status='H' THEN 1 END) AS total_H,MAX(CASE WHEN DAY(dates) = 1 THEN status END) AS day_1,MAX(CASE WHEN DAY(dates) = 2 THEN status END) AS day_2,MAX(CASE WHEN DAY(dates) = 3 THEN status END) AS day_3,MAX(CASE WHEN DAY(dates) = 4 THEN status END) AS day_4, MAX(CASE WHEN DAY(dates) = 5 THEN status END) AS day_5, MAX(CASE WHEN DAY(dates) = 6 THEN status END) AS day_6,MAX(CASE WHEN DAY(dates) = 7 THEN status END) AS day_7,MAX(CASE WHEN DAY(dates) = 8 THEN status END) AS day_8,  MAX(CASE WHEN DAY(dates) = 9 THEN status END) AS day_9,MAX(CASE WHEN DAY(dates) = 10 THEN status END) AS day_10,MAX(CASE WHEN DAY(dates) = 11 THEN status END) AS day_11,MAX(CASE WHEN DAY(dates) = 12 THEN status END) AS day_12,MAX(CASE WHEN DAY(dates) = 13 THEN status END) AS day_13,MAX(CASE WHEN DAY(dates) = 14 THEN status END) AS day_14, MAX(CASE WHEN DAY(dates) = 15 THEN status END) AS day_15,MAX(CASE WHEN DAY(dates) = 16 THEN status END) AS day_16,MAX(CASE WHEN DAY(dates) = 17 THEN status END) AS day_17,MAX(CASE WHEN DAY(dates) = 18 THEN status END) AS day_18,MAX(CASE WHEN DAY(dates) = 19 THEN status END) AS day_19, MAX(CASE WHEN DAY(dates) = 20 THEN status END) AS day_20, MAX(CASE WHEN DAY(dates) = 21 THEN status END) AS day_21, MAX(CASE WHEN DAY(dates) = 22 THEN status END) AS day_22, MAX(CASE WHEN DAY(dates) = 23 THEN status END) AS day_23,MAX(CASE WHEN DAY(dates) = 24 THEN status END) AS day_24,MAX(CASE WHEN DAY(dates) = 25 THEN status END) AS day_25,MAX(CASE WHEN DAY(dates) = 26 THEN status END) AS day_26,MAX(CASE WHEN DAY(dates) = 27 THEN status END) AS day_27,MAX(CASE WHEN DAY(dates) = 28 THEN status END) AS day_28,MAX(CASE WHEN DAY(dates) = 29 THEN status END) AS day_29,MAX(CASE WHEN DAY(dates) = 30 THEN status END) AS day_30 ,SUM(CASE WHEN status = 'P' THEN 1 ELSE 0 END) AS tot FROM time_card WHERE MONTH(dates)=${formData.selectedMonth} AND YEAR(dates)=${formData.selectedYear} GROUP BY emp_code, emp_name`,
      });
      setRolldata(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderStatus = (status) => {
    switch (status) {
      case "P":
        return "X";

      case "p":
        return "X";

      case "A":
        return "A";
      case "a":
        return "A";
      case "H":
        return "H";
      case "h":
        return "H";

      case "W":
        return "W";
      case "w":
        return "W";
      case "C":
        return "C";
      case "c":
        return "C";
      case "O":
        return "O";
      case "o":
        return "O";
      case "T":
        return "T";
      case "t":
        return "T";
      case "HF":
        return "HF";
      case "hf":
        return "HF";

      case "E":
        return "E";
      case "e":
        return "E";

      default:
        return "A";
    }
  };

  // Function to handle month selection change
  const handleMonthChange = (e) => {
    setFormData({ ...formData, selectedMonth: e.target.value });
  };

  // Function to handle year selection change
  const handleYearChange = (e) => {
    setFormData({ ...formData, selectedYear: e.target.value });
  };
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <Grid>
        <Grid>
          <Typography variant="h5" gutterBottom>
            Attendance D2
          </Typography>
          <Typography variant="h5" gutterBottom>
            Data Test
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="year-label" shrink>
              {" "}
              Year
            </InputLabel>
            <Select
              labelId="year-label"
              id="year"
              style={{ height: "50px", width: "388px" }}
              value={formData.selectedYear}
              onChange={handleYearChange} // Call handleYearChange on change
              displayEmpty>
              <MenuItem value="" disabled>
                Selected
              </MenuItem>
              {Array.from(
                { length: 10 },
                (_, index) => new Date().getFullYear() - index
              ).map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Month Selection */}
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel shrink>Month</InputLabel>
            <Select
              value={formData.selectedMonth}
              onChange={handleMonthChange} // Call handleMonthChange on change
              style={{ height: "50px", width: "388px" }}
              displayEmpty>
              <MenuItem value="" disabled>
                Selected
              </MenuItem>
              {Array.from({ length: 12 }, (_, index) => index + 1).map(
                (month, index) => (
                  <MenuItem key={index + 1} value={index + 1}>
                    {month}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <TableContainer
          component={Paper}
          style={{
            border: "2px solid black",
            marginTop: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1900px",
          }}>
          <Table>
            <TableBody>
              <TableRow
                sx={{ border: "2px solid black", borderColor: "black.300" }}>
                <TableCell
                  sx={{
                    border: "2px solid black",
                    borderColor: "black.300",
                    padding: "5px",
                  }}>
                  S.No
                </TableCell>

                <TableCell
                  sx={{
                    border: "2px solid black",
                    borderColor: "black.300",
                    padding: "5px",
                  }}>
                  code
                </TableCell>
                <TableCell
                  sx={{
                    border: "2px solid black",
                    borderColor: "black.300",
                    padding: "5px",
                  }}>
                  employee
                </TableCell>
                {[...Array(30).keys()].map((day) => (
                  <TableCell
                    key={day + 1}
                    sx={{
                      border: "2px solid black",
                      borderColor: "black.300",
                      padding: "5px",
                    }}>
                    {day + 1}
                  </TableCell>
                ))}
                <TableCell
                  sx={{
                    border: "2px solid black",
                    borderColor: "black.300",
                    padding: "5px",
                  }}>
                  tot
                </TableCell>
              </TableRow>
              {rolldata.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {entry.emp_code}
                  </TableCell>

                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {entry.emp_name}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_1).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_2).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_3).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_4).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_5).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_6).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_7).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_8).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_9).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_10).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_11).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_12).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_13).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_14).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_15).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_16).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_17).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_18).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_19).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_20).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_21).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_22).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_23).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_24).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_25).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_26).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_27).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_28).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_29).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {renderStatus(
                      JSON.stringify(entry.day_30).replace(/"/g, "")
                    )}
                  </TableCell>
                  <TableCell sx={{ border: "2px solid black", padding: "5px" }}>
                    {entry.total_P}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}

export default AttendanceD2Reports;
