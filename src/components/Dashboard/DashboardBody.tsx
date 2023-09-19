import {
  Grid,
  Typography,
  Box,
  MenuItem,
  Select,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  InputBase,
  Autocomplete,
  TextField,
  makeStyles,
} from "@mui/material";
import Images from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { SetStateAction, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import {
  fetchReports,
  fetchSixMonthReport,
} from "../../redux/actions/reportsAction";
import { useAppDispatch } from "../../redux/hooks/hooks";
import dayjs from "dayjs";
import useLazyLoading from "../../hooks/lazyLoadHook";
import { setReportEndMonth } from "../../redux/reducers/reportsReducer";
import { BorderAllRounded, GetApp } from "@mui/icons-material";
// import { TableCell, tableCellClasses } from './dashboard.styles';
import "./dashboard.css";
import { getSixMonthReportCsv } from "../../apis/api";
import ProfilingModal from "../ProfilingModal/ProfilingModal";
import SixMonthReportModal from "../SixMonthReportModal/SixMonthReportModal";

interface RowData {
  studentname: string;
  collegeid: string;
  phone: number;
  email: string;
  collegename: string;
  matric: string;
  inter: string;
  ug: string;
  finalscore: string;
  codingrank: string;
  testtaken: string;
  improvementfirst: number;
  improvementlast: number;
  jun: string;
  may: string;
  apr: string;
  march: string;
  feb: string;
  jan: string;
  aptitude: string;
  coding: string;
  english: string;
}

const rows: RowData[] = [
  {
    studentname: "Mithali Sharma",
    collegeid: "R56700",
    phone: 9856481525,
    email: "Dummt@gmail.com",
    collegename: "George Mason",
    matric: "",
    inter: "",
    ug: "",
    finalscore: "",
    codingrank: "",
    testtaken: "",
    improvementfirst: 30,
    improvementlast: 95,
    jun: "?",
    may: "?",
    apr: "?",
    march: "?",
    feb: "?",
    jan: "?",
    aptitude: "",
    coding: "",
    english: ""
  },
  {
    studentname: "Mithali Sharma",
    collegeid: "R56700",
    phone: 9856481525,
    email: "Dummt@gmail.com",
    collegename: "George Mason",
    matric: "",
    inter: "",
    ug: "",
    finalscore: "",
    codingrank: "",
    testtaken: "",
    improvementfirst: 30,
    improvementlast: 95,
    jun: "?",
    may: "?",
    apr: "?",
    march: "?",
    feb: "?",
    jan: "?",
    aptitude: "",
    coding: "",
    english: ""
  },
];


interface College {
  id: number;
  name: string;
  code: string;
}

interface EducationDetail {
  id: number;
  user: string;
  stage: string;
  degree: string | null;
  percentage: string;
}


interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  college: {
    id: number;
    name: string;
    code: string;
  };
  department: {
    id: number;
    name: string;
  };
  educationDetails: EducationDetail[];
  finalScore: string;
  numberOfTestsTaken: number;
  improvementFromLastTest: number;
  improvementFromFirstTest: number;
  userMonthlyScores: {
    [month: string]: number;
  };
}



function DashboardBody() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const reportError = useAppSelector(
    (state) => state.reportsReducer.reportErrorMsg
  );
  const reportLoading = useAppSelector((state) => state.reportsReducer.loading);
  const collegeData = useAppSelector((state) => state.reportsReducer.colleges);
  const reportsData = useAppSelector(
    (state) => state.reportsReducer.reportsData
  );
  console.log(reportsData, "reports data in dashboard")
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [ref, visible] = useLazyLoading({});
  const [collegeId, setCollegeId] = useState(1);
  const [startMonth, setStartMonth] = useState("0");
  const [endMonth, setEndMonth] = useState("5");
  const [dateValue, setDateValue] = useState(dayjs().month(5).valueOf());
  const [monthNames, setMonthNames] = useState<string[]>([]);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [selectedReportType, setSelectedReportType] =
    useState("6 month report");
  const [skip, setSkip] = useState(0);
  const [monthNamesValue, setMonthNamesValue] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedUserRowId, setSelectedUserRowId] = useState(Number);
  const [downloadExcelLoading, setDownloadExcelLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const handleChange = (e: any) => {
    setSelectedReportType(e.target.value);
  };

  const handleView = (id: string) => {
    switch (selectedReportType) {
      case "6 month report":
        dispatch(fetchSixMonthReport(dateValue, +id));
        //navigate("/report");
        break;
      case "BB Lab Report":
        navigate("/labreport");
        break;
      case "Screening Result":
        //navigate("/profiling");
        break;
    }
    setSelectedUserRowId(+id);
    handleOpen();
  };

  const handleDownload = (row: RowData) => {
    // Handle download button click event
    alert("Downloaded Successfully");
    // Add your logic here to initiate the download of the report
  };

  interface HackathonEntry {
    hackathonId: number;
    scored: number;
    total?: string;
  }
  interface HackathonEntry {
    hackathonId: number;
    scored: number;
    total?: string;
  }


  const getMonth = (end: number) => {
    const arr = [];
    const arr1 = [];
    const fullMonths = [];

    for (let i = 0; i < 6; i++) {
      arr.push(
        dayjs()
          .month(end - i)
          .format("MMM")
      );
    }
    for (let i = 0; i < 6; i++) {
      fullMonths.push(
        dayjs()
          .month(end - i)
          .format("MMMM")
      );
    }
    for (let i = 0; i < 6; i++) {
      arr1.push(
        dayjs()
          .month(end - i)
          .format("YYYY-MM")
      );
    }
    setMonthNames(arr);
    setMonthNamesValue(arr1);
    return fullMonths.reverse();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   if (visible && reportError.length === 0) {
  //     setLoadMore(true);
  //     setSkip(skip + 4);
  //     dispatch(fetchReports(collegeId, dateValue, skip + 4, 4));
  //     setLoadMore(false);
  //   }
  // }, [visible]);

  useEffect(() => {
    dispatch(fetchReports(collegeId, dateValue, 0, 4));
    dispatch(setReportEndMonth(getMonth(+endMonth)));
  }, []);



  const [searchText, setSearchText] = useState("other");

  const handleSearchChange = (event: any) => {
    setSearchText(event.target.value);
  };

  const filteredCollegeData = collegeData.collegedata.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );


  const handleDownloadExcel = async () => {
    const csvData = (await getSixMonthReportCsv()).data;
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sixMonthReportData.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  const renderEducationData = (stage: string, data: EducationDetail[]) => {
    for (const eachData of data) {
      if (eachData.stage === stage) {
        return eachData.percentage;
      }
    }
    return "NA";
  };


  return (
    <Box
      sx={{
        backgroundImage: `url(${Images.tableBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        mt: 8,
        borderRadius: "20px",
      }}
    >
      <Grid container sx={{ mt: 5 }}>
        <Grid item sx={{ width: "100%", p: 4 }}>
          <Grid>
            <Grid>
              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: "bold", pl: 1 }}
              >
                Download Student Report here...
              </Typography>
            </Grid>

            <Grid container spacing={2} sx={{ p: 2 }}>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography sx={{ color: "white" }} variant="body2">
                  <pre style={{ fontFamily: "Maven Pro" }}> College : </pre>
                </Typography>
                <FormControl sx={{ width: "100%" }}>
                  <Autocomplete
                    id="search-select"
                    size="small"
                    autoComplete
                    autoHighlight
                    sx={{
                      color: "black",
                      background: "white",
                      fontFamily: "Maven Pro",
                      borderRadius: "5px",
                      padding: '0px'
                    }}
                    options={filteredCollegeData}
                    getOptionLabel={(option) => option.name}
                    value={filteredCollegeData.find((item) => item.id === collegeId) || null}
                    onChange={(event, newValue) => {
                      if (newValue) {
                        setCollegeId(newValue.id);
                        setSkip(0);
                        dispatch(fetchReports(newValue.id, dateValue, 0, 4));
                        setSearchText(newValue.name);
                      }
                    }}
                    inputValue={searchText}
                    disableClearable
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        value={searchText}
                        onChange={handleSearchChange}
                      />
                    )}
                  />

                </FormControl>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={2}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography sx={{ color: "white" }} variant="body2">
                  <pre style={{ fontFamily: "Maven Pro" }}> Start Month : </pre>
                </Typography>
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    value={startMonth}
                    defaultValue="jan"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{
                      color: "black",
                      background: "white",
                      height: "40px",
                      fontFamily: "Maven Pro",
                    }}
                    disabled={true}
                  >
                    <MenuItem value="0">January</MenuItem>
                    <MenuItem value="1">February</MenuItem>
                    <MenuItem value="2">March</MenuItem>
                    <MenuItem value="3">April</MenuItem>
                    <MenuItem value="4">May</MenuItem>
                    <MenuItem value="5">June</MenuItem>
                    <MenuItem value="6">July</MenuItem>
                    <MenuItem value="7">August</MenuItem>
                    <MenuItem value="8">September</MenuItem>
                    <MenuItem value="9">October</MenuItem>
                    <MenuItem value="10">November</MenuItem>
                    <MenuItem value="11">December</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                md={2}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography sx={{ color: "white" }} variant="body2">
                  <pre style={{ fontFamily: "Maven Pro" }}> End Month : </pre>
                </Typography>
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    value={endMonth}
                    defaultValue="jun"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{
                      color: "black",
                      background: "white",
                      height: "40px",
                      fontFamily: "Maven Pro",
                    }}
                    disabled={collegeId === 0}
                    onChange={(e) => {
                      const date_value = dayjs()
                        .month(+e.target.value)
                        .valueOf();
                      dispatch(setReportEndMonth(getMonth(+e.target.value)));
                      setDateValue(date_value);
                      setEndMonth(e.target.value);
                      getMonth(+e.target.value);
                      setStartMonth(() =>
                        +e.target.value - 5 < 0
                          ? `${+e.target.value + 7}`
                          : `${+e.target.value - 5}`
                      );
                      setSkip(0);
                      dispatch(fetchReports(collegeId, date_value, 0, 4));
                    }}
                  >
                    <MenuItem value="0">January</MenuItem>
                    <MenuItem value="1">February</MenuItem>
                    <MenuItem value="2">March</MenuItem>
                    <MenuItem value="3">April</MenuItem>
                    <MenuItem value="4">May</MenuItem>
                    <MenuItem value="5">June</MenuItem>
                    <MenuItem value="6">July</MenuItem>
                    <MenuItem value="7">August</MenuItem>
                    <MenuItem value="8">September</MenuItem>
                    <MenuItem value="9">October</MenuItem>
                    <MenuItem value="10">November</MenuItem>
                    <MenuItem value="11">December</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: { xs: 'column', sm:'row' } }}>
        <Typography sx={{ color: 'white'}} variant="body2">
           <pre style={{fontFamily:'Maven Pro'}}> Select Training : </pre>
        </Typography>
        <FormControl sx={{ width: '100%' }}>
          <Select
            defaultValue="Training"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{ color: 'black', background: 'white', height: '40px',fontFamily:'Maven Pro' }}
          >
            <MenuItem value="Training">BB Training</MenuItem>
            <MenuItem value="Twenty">CodePrism Training</MenuItem>
            <MenuItem value="Thirty">Special Trainig</MenuItem>
          </Select>
        </FormControl>
      </Grid> */}
            </Grid>

            <Grid
              item
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                mt: 3,
                color: "white",
              }}
            >
              <Grid sx={{ pl: 3 }}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={selectedReportType}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="6 month report"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label="6 month report"
                    />
                    {/* <FormControlLabel
                      value="BB Lab Report"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label="BB Lab Report"
                    /> */}
                    <FormControlLabel
                      value="Screening Result"
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": { color: "white" },
                          }}
                        />
                      }
                      label="Screening Result"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid>
                <Button
                  sx={{
                    fontFamily: "Maven Pro",
                    background: "#2E72F5",
                    m: 1,
                    color: "white",
                    "&:hover": { background: "#2E52F5" },
                  }}
                  size="small"
                  onClick={handleDownloadExcel}
                >
                  Download Excel <GetApp fontSize="small"></GetApp>
                </Button>
              </Grid>
            </Grid>

            <Grid sx={{ width: "100%" }}>
              <TableContainer
                component={Paper}
                sx={{ height: 400, maxHeight: "30rem" }}
              >
                <Table
                  sx={{
                    minWidth: 650,
                    borderCollapse: 'collapse',
                    width: '100%',
                    overflowX: 'auto',
                  }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead
                  >
                    <TableRow>
                      <TableCell
                        sx={{
                          fontFamily: 'Maven Pro',
                          fontWeight: 900,
                          position: "sticky",
                          left: 0,
                          backgroundColor: "white",
                          zIndex: "100",
                        }}
                      >
                        Student_Name
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                      >
                        College_Reg_Id
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                      >
                        Phone
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                      >
                        Email_Id
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                      >
                        College_Name
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                      >
                        10th
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                      >
                        12th
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                      >
                        UG
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                      >
                        Final_Score
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                      >
                        Coding_Rank
                      </TableCell>
                      {selectedReportType === "6 month report" && (
                        <>
                          <TableCell
                            sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                          >
                            No._of_tests_taken
                          </TableCell>
                          <TableCell
                            sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                          >
                            %Improvement_from_first_test
                          </TableCell>
                          <TableCell
                            sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                          >
                            %Improvement_from_last_test
                          </TableCell>
                          {monthNames.length > 0
                            ? monthNames.map((item) => (
                              <TableCell
                                sx={{
                                  fontFamily: "Maven Pro",
                                  fontWeight: 900,
                                }}
                              >
                                {item}
                              </TableCell>
                            ))
                            : ["Jun", "May", "Apr", "Mar", "Feb", "Jan"].map(
                              (item) => (
                                <TableCell
                                  sx={{
                                    fontFamily: "Maven Pro",
                                    fontWeight: 900,
                                  }}
                                >
                                  {item}
                                </TableCell>
                              )
                            )}
                        </>
                      )}
                      {selectedReportType === "Screening Result" && (
                        <>
                          <TableCell
                            sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                          >
                            Aptitude
                          </TableCell>
                          <TableCell
                            sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                          >
                            Coding
                          </TableCell>
                          <TableCell
                            sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                          >
                            English
                          </TableCell>
                        </>
                      )}
                      <TableCell
                        align="center"
                        sx={{ fontFamily: "Maven Pro", fontWeight: 900 }}
                      >
                        Report
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(reportsData.length === 0 && reportLoading) || loadMore ? (
                      <TableRow>
                        <TableCell colSpan={15}>
                          <Box display="flex" justifyContent="center">
                            <Typography alignItems="center">Loading...</Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ) : (
                      <>
                        {reportsData.length > 0 ? (
                          <>
                            {reportsData.map((eachReport: User, index: number) => (
                              <>
                                <TableRow key={index}>
                                  <TableCell sx={{
                                    position: 'sticky',
                                    left: 0,
                                    backgroundColor: "white",
                                    zIndex: "100",
                                  }}>{eachReport.firstName + " " + eachReport.lastName}</TableCell>
                                  <TableCell>{!eachReport.college.id ? "NA" : eachReport.college.id}</TableCell>
                                  <TableCell>{!eachReport.phone ? "NA" : eachReport.phone}</TableCell>
                                  <TableCell>{!eachReport.email ? "NA" : eachReport.email}</TableCell>
                                  <TableCell>{!eachReport.college.name ? "NA" : eachReport.college.name}</TableCell>
                                  <TableCell>{renderEducationData("Tenth", eachReport.educationDetails)}</TableCell>
                                  <TableCell>{renderEducationData("Twelfth", eachReport.educationDetails)}</TableCell>
                                  <TableCell>{renderEducationData("Degree", eachReport.educationDetails)}</TableCell>
                                  <TableCell>{!eachReport.finalScore ? "NA" : eachReport.finalScore}</TableCell>
                                  <TableCell>NA</TableCell>
                                  {selectedReportType === "6 month report" && (
                                    <>
                                      <TableCell>{eachReport.numberOfTestsTaken}</TableCell>
                                      <TableCell>{!eachReport.improvementFromFirstTest ? "NA" : eachReport.improvementFromFirstTest}</TableCell>
                                      <TableCell>{!eachReport.improvementFromLastTest ? "NA" : eachReport.improvementFromLastTest}</TableCell>
                                      {
                                        monthNames.length > 0 && monthNamesValue.map((eachMonth) => (
                                          <TableCell>{!eachReport.userMonthlyScores[eachMonth] ? "NA" : eachReport.userMonthlyScores[eachMonth]}</TableCell>
                                        ))
                                      }
                                    </>
                                  )}
                                  {selectedReportType === "Screening Result" && (
                                    <>
                                      <TableCell>NA</TableCell>
                                      <TableCell>NA</TableCell>
                                      <TableCell>NA</TableCell>
                                    </>
                                  )}
                                  <TableCell sx={{ display: "flex", mt: 1 }}>
                                    <Button
                                      sx={{
                                        mr: 1,
                                        background: "#2E72F5",
                                        borderRadius: "15px",
                                      }}
                                      variant="contained"
                                      onClick={() => handleView("47")}
                                    >
                                      View
                                    </Button>
                                  </TableCell>

                                </TableRow>
                              </>
                            ))}
                          </>
                        ) : (
                          <>
                            <TableRow>
                              <TableCell colSpan={20}>
                                <Box display="flex" justifyContent="center">
                                  <Typography
                                    alignItems="center"
                                    marginTop={16}
                                  >
                                    {reportError}
                                  </Typography>
                                </Box>
                              </TableCell>
                            </TableRow>
                          </>
                        )}
                      </>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {selectedReportType === "6 month report" && (<SixMonthReportModal modalOpen={open} selectedUserRowId={selectedUserRowId} handleClose={handleClose} />)}
      {selectedReportType === "Screening Result" && (<ProfilingModal modalOpen={open} selectedUserRowId={selectedUserRowId} handleClose={handleClose} />)}
    </Box>
  );
}

export default DashboardBody;
