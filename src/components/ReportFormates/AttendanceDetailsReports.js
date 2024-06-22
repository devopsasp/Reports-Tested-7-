import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Grid,
  Button,
} from "@mui/material";
import generatePDF from "react-to-pdf";
import { useRef } from "react";
import { useState } from "react";
import { getRequest } from "../../serverconfiguration/requestcomp";
import { ServerConfig } from "../../serverconfiguration/serverconfig";
import { TIMECARD } from "../../serverconfiguration/controllers";
import { useEffect } from "react";
function Mrgabs() {
  const [timecard, setTimecard] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await getRequest(ServerConfig.url, TIMECARD);
      setTimecard(data.data);
    }
    console.log(timecard);
    getData();
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <Grid>
        <Grid>
          <Typography variant="h4" gutterBottom>
            Attendance Details For the Period of 01/02/2010 to 28/02/2010
          </Typography>
          <Typography style={{ textAlign: "right", paddingRight: "100px" }}>
            date:12/08/2024
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TableContainer
            component={Paper}
            style={{
              marginTop: "20px",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "1500px",
            }}>
            <Table>
              <TableBody sx={{ borderBottom: "4px solid black" }}>
                <TableRow sx={{ borderBottom: "4px solid black" }}>
                  <TableRow sx={{ fontSize: "20px" }}>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      S.No
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      Date
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      Shift
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      In Time
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      Out Time
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      Break in{" "}
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      Break out
                    </TableCell>

                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      Early In
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      Late In
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      Late out
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      Early Out
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      T Whrs
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      T OtHrs
                    </TableCell>
                    <TableCell
                      sx={{ borderBottom: "4px solid black", padding: "5px" }}>
                      Leave name
                    </TableCell>
                  </TableRow>
                  {timecard.map((entry, index) => (
                    <React.Fragment key={index}>
                      <TableRow sx={{ borderBottom: "3px solid black" }}>
                        <TableCell sx={{ width: "200px" }}>
                          {entry.empCode}
                        </TableCell>
                        <TableCell sx={{ width: "200px" }}>
                          {entry.empName}
                        </TableCell>
                        {/* Add more cells for other details if needed */}
                      </TableRow>
                      {/* Other details for the employee */}
                      <TableRow sx={{ borderBottom: "3px dotted black" }}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{entry.dates}</TableCell>
                        <TableCell>{entry.shiftCode}</TableCell>
                        <TableCell>{entry.intime}</TableCell>
                        <TableCell>{entry.outtime}</TableCell>
                        <TableCell>{entry.breakIn}</TableCell>
                        <TableCell>{entry.breakOut}</TableCell>
                        <TableCell>{}</TableCell>
                        <TableCell>{entry.lateIn}</TableCell>
                        <TableCell>{entry.lateOut}</TableCell>
                        <TableCell>{entry.earlyOut}</TableCell>
                        <TableCell>{}</TableCell>
                        <TableCell>{entry.otHrs}</TableCell>
                        <TableCell>{entry.leaveCode}</TableCell>

                        {/* Add more cells for other details if needed */}
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

export default Mrgabs;
