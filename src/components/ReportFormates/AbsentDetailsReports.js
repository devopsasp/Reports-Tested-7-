import React, { useEffect } from "react";
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
import { getRequest, postRequest } from "../../serverconfiguration/requestcomp";
import { ServerConfig } from "../../serverconfiguration/serverconfig";
import { REPORTS, TIMECARD } from "../../serverconfiguration/controllers";
import { json } from "react-router-dom";
function Mrgabs() {
  const [timecard, setTimecard] = useState([]);
  const [rolldata, setRolldata] = useState([]);
  useEffect(() => {
    // async function getData(){
    //   const data = await getRequest(ServerConfig.url,TIMECARD);

    //   setTimecard(data.data);

    // }
    console.log(timecard);
    //getData()
    async function getData() {
      return await postRequest(ServerConfig.url, REPORTS, {
        query:
          "select t.emp_code ,t.dates,t.emp_name,t.break_in,t.break_out,t.late_in,t.intime,t.outtime,t.early_out,t.late_out,t.ot_hrs,t.shift_code,t.leave_code,datepart(hour,t.intime) as intime ,(select datepart(hour,start_time) from shift_details where shift_code=t.shift_code) as start_time,(datepart(hour,t.outtime)-datepart(hour,t.intime)+datepart(hour,t.break_in)-datepart(hour,t.break_out)) as t_whrs  from time_card t",
      });
    }
    getData().then((e) => setTimecard(e.data));
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <Grid>
        <Grid>
          <Typography variant="h4" gutterBottom>
            Absent Details For the Period of 01/02/2010 to 28/02/2010
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
                {/* {timecard.map((entry, index) => (
                  <TableRow key={index} sx={{  borderBottom:'4px dotted black'}} >
                    <TableCell sx={{  borderBottom:'4px dotted black', padding: '5px' }}>{entry.empCode}</TableCell>
                    <TableCell sx={{  borderBottom:'4px dotted black', padding: '5px' }}>{entry.empName  }</TableCell>

                  </TableRow>
                ))}
              
              {timecard.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{index + 1}</TableCell>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{entry.dates}</TableCell>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{entry.shiftCode  }</TableCell>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{entry.intime}</TableCell>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{entry.outtime}</TableCell>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{entry.breakIn}</TableCell>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{entry.breakOut}</TableCell>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{}</TableCell>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{entry.lateIn}</TableCell>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{entry.lateOut}</TableCell>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{entry.earlyOut}</TableCell>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{}</TableCell>
                    <TableCell sx={{ border: '2px solid black', padding: '5px' }}>{entry.leaveCode}</TableCell>

                  </TableRow>
                ))}
         
         */}

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

                  {timecard != null ||
                  timecard != undefined ||
                  timecard.length > 0 ||
                  typeof timecard != "object"
                    ? timecard.map((entry, index) => (
                        <React.Fragment key={index}>
                          <TableRow sx={{ borderBottom: "3px solid black" }}>
                            <TableCell sx={{ width: "200px" }}>
                              Emp Code: {entry.emp_code}
                            </TableCell>
                            <TableCell sx={{ width: "200px" }}>
                              Emp Name:{entry.emp_name}
                            </TableCell>
                            {/* Add more cells for other details if needed */}
                          </TableRow>
                          {/* Other details for the employee */}
                          <TableRow sx={{ borderBottom: "3px dotted black" }}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{entry.dates}</TableCell>
                            <TableCell>{entry.shift_code}</TableCell>
                            <TableCell>
                              {JSON.stringify(entry.intime).replace(/"/g, "") ==
                              "{}"
                                ? "no data"
                                : JSON.stringify(entry.intime).replace(
                                    /"/g,
                                    ""
                                  )}
                            </TableCell>
                            <TableCell>
                              {JSON.stringify(entry.outtime).replace(
                                /"/g,
                                ""
                              ) == "{}"
                                ? "no data"
                                : JSON.stringify(entry.outtime).replace(
                                    /"/g,
                                    ""
                                  )}
                            </TableCell>
                            <TableCell>
                              {JSON.stringify(entry.break_in).replace(
                                /"/g,
                                ""
                              ) == "{}"
                                ? "no data"
                                : JSON.stringify(entry.break_in).replace(
                                    /"/g,
                                    ""
                                  )}
                            </TableCell>
                            <TableCell>
                              {JSON.stringify(entry.break_out).replace(
                                /"/g,
                                ""
                              ) == "{}"
                                ? "no data"
                                : JSON.stringify(entry.break_out).replace(
                                    /"/g,
                                    ""
                                  )}
                            </TableCell>
                            <TableCell>
                              {JSON.stringify(entry.start_time).replace(
                                /"/g,
                                ""
                              ) == "{}"
                                ? "no data"
                                : JSON.stringify(entry.start_time).replace(
                                    /"/g,
                                    ""
                                  )}
                            </TableCell>
                            <TableCell>
                              {JSON.stringify(entry.late_in).replace(
                                /"/g,
                                ""
                              ) == "{}"
                                ? "no data"
                                : JSON.stringify(entry.late_in).replace(
                                    /"/g,
                                    ""
                                  )}
                            </TableCell>
                            <TableCell>
                              {JSON.stringify(entry.late_out).replace(
                                /"/g,
                                ""
                              ) == "{}"
                                ? "no data"
                                : JSON.stringify(entry.late_out).replace(
                                    /"/g,
                                    ""
                                  )}
                            </TableCell>
                            <TableCell>
                              {JSON.stringify(entry.early_out).replace(
                                /"/g,
                                ""
                              ) == "{}"
                                ? "no data"
                                : JSON.stringify(entry.early_out).replace(
                                    /"/g,
                                    ""
                                  )}
                            </TableCell>
                            <TableCell>
                              {JSON.stringify(entry.t_whrs).replace(/"/g, "") ==
                              "{}"
                                ? "no data"
                                : JSON.stringify(entry.t_whrs).replace(
                                    /"/g,
                                    ""
                                  )}
                            </TableCell>
                            <TableCell>
                              {JSON.stringify(entry.ot_hrs).replace(/"/g, "") ==
                              "{}"
                                ? "no data"
                                : JSON.stringify(entry.ot_hrs).replace(
                                    /"/g,
                                    ""
                                  )}
                            </TableCell>
                            <TableCell>
                              {JSON.stringify(entry.leave_code).replace(
                                /"/g,
                                ""
                              ) == "{}"
                                ? "no data"
                                : JSON.stringify(entry.leave_code).replace(
                                    /"/g,
                                    ""
                                  )}
                            </TableCell>

                            {/* Add more cells for other details if needed */}
                          </TableRow>
                        </React.Fragment>
                      ))
                    : "No Data Available"}
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
