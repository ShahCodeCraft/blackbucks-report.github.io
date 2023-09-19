import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../redux/hooks/hooks";
import DashboardCard from "../DashboardCard/DashboardCard";
import { HowToReg, OndemandVideo, Quiz, ScienceOutlined, TextSnippet } from "@mui/icons-material";

function DashboardHeader() {
  const statData: any = useAppSelector(
    (state) => state.reportsReducer.stat.statData
  );

  const stasData = [
    {
      title: "Assessment Conducted",
      value: 200,
      icon: <TextSnippet fontSize="large"
        sx={{ color: "#2E72F5", mr: 1, mt: 1 }} />
    },
    {
      title: "Question Tested On",
      value: 120,
      icon: <Quiz fontSize="large"
        sx={{ color: "#2E72F5", mr: 1, mt: 1 }} />
    },
    {
      title: "Attendance Percentage",
      value: 20,
      icon: <HowToReg fontSize="large"
        sx={{ color: "#2E72F5", mr: 1, mt: 1 }} />
    },
    {
      title: "Blackbucks Trainings",
      value: 180,
      icon: <OndemandVideo fontSize="large"
        sx={{ color: "#2E72F5", mr: 1, mt: 1 }} />
    },
    {
      title: "Blackbucks Virtual Labs",
      value: 150,
      icon: <ScienceOutlined fontSize="large"
        sx={{ color: "#2E72F5", mr: 1, mt: 1 }} />
    }
  ]

  return (
    <Box width="100%" height="100%" sx={{ background: "#f9f9f9", mt: 5 }}>
      <Grid container>
        <Grid item>
          <Typography sx={{ p: 2, fontWeight: "bold" }} variant="h4">
            My Dashboard - Staging_Branch
          </Typography>
        </Grid>

        <Grid container>
          {stasData.map((eachData: any) => (
            <DashboardCard cardData={eachData} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default DashboardHeader;
