import { List, ListItem, Grid, Divider, Typography } from "@mui/material";
import React from "react";
import style from "./ReportTable.module.scss";

function SubjectList() {
  return (
    <Grid container spacing={2} sx={{ fontFamily: "Maven Pro", marginTop: "3rem", display: "flex", flexDirection: "column", justifyContent: "space-between",gap:'1rem' }}>
      <Grid item xs={12}>
        <List className={style.subtable} sx={{ fontWeight: "bold" }}>
          <ListItem>Aptitude (%)</ListItem>
          <Divider />
          <ListItem>Coding (%)</ListItem>
          <Divider />
          <ListItem>English (%)</ListItem>
        </List>
      </Grid>

      <Grid item xs={12}>
        <List className={style.subtable}>
          <ListItem>Total (%)</ListItem>
          <Divider />
          <ListItem>Employability Band</ListItem>
        </List>
      </Grid>

      <Grid item xs={12} textAlign="center">
        <Typography className={style.subtable} mt={1} pt={2} pb={2}>Strengths</Typography>
      </Grid>

      <Grid item xs={12} textAlign="center" >
        <Typography className={style.subtable} mt={1} pt={2} pb={2}>Weaknesses</Typography>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Typography className={style.subtable} mt={3} pt={2} pb={2}>Needs Improvement</Typography>
      </Grid>

      <Grid item xs={12} textAlign="center">
        <Typography className={style.subtable} mt={3} pt={2} pb={2}>  Parent / TPO Signature</Typography>
      </Grid>

    </Grid>
  );
}

export default SubjectList;
