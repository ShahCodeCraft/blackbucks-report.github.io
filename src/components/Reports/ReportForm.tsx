import React, { useEffect, useState } from "react";
import { Grid, TextField, Box, Typography } from "@mui/material";

const userReportData={
  student_name:"",
  phone:"",
  email:"",
  bbId:"",
  collegeId:"",
  departmentName:"",
  noOfAssessmentsTaken:""
}

interface HackathonEntry {
  hackathonId: number;
  scored: number;
  total?: string;
}

interface Data {
  [month: string]: HackathonEntry[];
}

function countHackathons(data: Record<string, HackathonEntry[]>): number {
  const hackathonIds = new Set<number>();

  for (const month in data) {
    if (data.hasOwnProperty(month)) {
      const entries = data[month];
      for (const entry of entries) {
        if (entry.hasOwnProperty("total")) {
          hackathonIds.add(entry.hackathonId);
        }
      }
    }
  }

  return hackathonIds.size;
}

function ReportForm({ propData }: any) {
  const [singleUserReportData, setSingleUserReportData] = useState(userReportData)
  useEffect(() => {
    if(propData){
      const formattedData={
        student_name:propData.first_name + " " + propData.last_name,
        phone:propData.phone,
        email:propData.email,
        bbId:propData.id,
        collegeId:propData?.college?.id,
        departmentName:propData?.department?.name,
        noOfAssessmentsTaken:countHackathons(propData?.scoresByMonth).toString()
       }
       setSingleUserReportData(formattedData);
    }
  }, [propData])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ padding: "10px" }} gap={1}>
        <Grid item xs={12} sm={4.8}>
          <Typography sx={{ color: "#045139", fontFamily: "Maven Pro" }}>
            {/* {form.name} */}
            Student Name
          </Typography>
          <TextField
            fullWidth
            type="text"
            name="College Code"
            variant="outlined"
            size="small"
            value={ singleUserReportData && singleUserReportData?.student_name===""?'NA':singleUserReportData?.student_name}

            sx={{ background: "#f9f9f9", mt: 1 }

            }
          />
        </Grid>

        <Grid item xs={12} sm={4.8}>
          <Typography sx={{ color: "#045139", fontFamily: "Maven Pro" }}>
            Email
          </Typography>
          <TextField
            fullWidth
            type="text"
            name="College Code"
            variant="outlined"
            size="small"
            value={singleUserReportData && singleUserReportData?.email===""?'NA':singleUserReportData?.email}

            sx={{ background: "#f9f9f9", mt: 1 }}
          />
        </Grid>

        <Grid item xs={12} sm={1.8}>
          <Typography sx={{ color: "#045139", fontFamily: "Maven Pro" }}>
            Blackbucks ID
          </Typography>
          <TextField
            fullWidth
            type="text"
            name="College Code"
            variant="outlined"
            size="small"
            value={singleUserReportData && singleUserReportData?.bbId===""?'NA':singleUserReportData?.bbId}

            sx={{ background: "#f9f9f9", mt: 1 }}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 1, padding: "10px" }} gap={1}>
        <Grid item xs={12} sm={2.35}>
          <Typography sx={{ color: "#045139", fontFamily: "Maven Pro" }}>
            Contact Number
          </Typography>
          <TextField
            fullWidth
            type="text"
            name="College Code"
            variant="outlined"
            size="small"
            value={singleUserReportData && singleUserReportData?.phone===""?'NA':singleUserReportData?.phone}

            sx={{ background: "#f9f9f9", mt: 1 }}
          />
        </Grid>

        <Grid item xs={12} sm={2.35}>
          <Typography sx={{ color: "#045139", fontFamily: "Maven Pro" }}>
            College Reg. ID
          </Typography>
          <TextField
            fullWidth
            type="text"
            name="College Code"
            variant="outlined"
            size="small"
            value={singleUserReportData && singleUserReportData?.collegeId===""?'NA':singleUserReportData?.collegeId}

            sx={{ background: "#f9f9f9", mt: 1 }}
          />
        </Grid>

        <Grid item xs={12} sm={2.35}>
          <Typography sx={{ color: "#045139", fontFamily: "Maven Pro" }}>
            Branch
          </Typography>
          <TextField
            fullWidth
            type="text"
            name="College Code"
            variant="outlined"
            size="small"
            value={singleUserReportData && singleUserReportData?.departmentName===""?'NA':singleUserReportData?.departmentName}
            sx={{ background: "#f9f9f9", mt: 1 }}
          />
        </Grid>

        {/* <Grid item xs={12} sm={2.35}>
          <Typography sx={{ color: "#045139", fontFamily: "Maven Pro" }}>
            Level
          </Typography>
          <TextField
            fullWidth
            type="text"
            name="College Code"
            variant="outlined"
            size="small"
            value={propData.level}

            sx={{ background: "#f9f9f9", mt: 1 }}
          />
        </Grid> */}

        <Grid item xs={12} sm={1.9}>
          {/* <InputLabel sx={{color:'#045139'}}>No. of assessments taken</InputLabel> */}
          <Typography
            sx={{ color: "#045139", fontFamily: "Maven Pro sans-serif" }}
          >
            No.of assessments taken
          </Typography>
          <TextField
            fullWidth
            type="text"
            name="College Code"
            variant="outlined"
            size="small"
            value={!singleUserReportData.noOfAssessmentsTaken?'NA':singleUserReportData?.noOfAssessmentsTaken}

            sx={{ background: "#f9f9f9", mt: 1 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReportForm;
