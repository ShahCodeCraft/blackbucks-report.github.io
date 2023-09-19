import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import DashboardBody from "../../components/Dashboard/DashboardBody";
import { fetchcolleges, fetchStat } from "../../redux/actions/reportsAction";
import { useAppDispatch } from "../../redux/hooks/hooks";
import Header from "../../components/Header/Header";

function LandingScreen() {
  const [userProfile, setUserProfile] = useState<LoginResponse>();
  const dispatch = useAppDispatch();

  const init = async () => {
    let params = new URLSearchParams(window.location.search);
    const refId = params.get("refId");
    // dispatch(fetchReports(1, 1686643755400,0,4))
    console.log("refId", refId);
    dispatch(fetchcolleges());
    dispatch(fetchStat());
    if (refId && refId !== null) {
      // Make Login api call here

      const user = localStorage.getItem(refId);
      // console.log("user", user);
      if (user && user.length) {
        // console.log("User found in local storage", typeof user, user);
        setUserProfile(JSON.parse(user));
      }
    } else {
      // redirect to login page
      window.open("https://dev.admin.hackathon.blackbucks.me/login/", "_self");
      localStorage.clear();
    }
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <Grid container sx={{ width: "100%", padding: "5px" }}>
      <Grid item sx={{ width: "100%" }}>
        <Header
          name={
            userProfile !== undefined
              ? `${userProfile.firstName} ${userProfile.lastName}`
              : ""
          }
        />
      </Grid>

      <Grid item sx={{ width: "100%" }}>
        <DashboardHeader />
      </Grid>

      <Grid item sx={{ width: "100%" }}>
        <DashboardBody />
      </Grid>
    </Grid>
  );
}

export default LandingScreen;
