import * as React from "react";
import { Grid, Typography, Box } from "@mui/material";
import SubjectList from "../../components/Reports/SubjectList";
import MonthlyReport from "../../components/Reports/MonthlyReport";
import ReportForm from "../../components/Reports/ReportForm";
import Images from "../../assets/images";
import { useAppSelector } from "../../redux/hooks/hooks";
import ReportMonthlyCard from "../../components/Reports/ReportMonthlyCard";
import ReportTotalCard from "../../components/Reports/ReportTotalCard";
import ReportTextCards from "../../components/Reports/ReportTextCards";

interface Item {
  id: number;
  month: string;
  backgroundColor: string;
  monthColor: string;
}


function calculateWeekOfMonth(date: any) {
  return Math.ceil(date.getDate() / 7);
}

function getWeek(date: any) {
  const firstDayOfYear: any = new Date(date.getFullYear(), 0, 1);
  const daysPassed = (date - firstDayOfYear) / (24 * 60 * 60 * 1000);
  return Math.ceil((daysPassed + 1) / 7);
}

function calculatePerMonthReport(data: any) {

  //new code to calculatex
  //new code end


  const roundScoresByWeek: {
    skill: any;
    roundId?: any;
    roundScore: any;
    userScore: any;
    month: any;
    weekOfMonth: any;
  }[] = [];

  const averages: any = {};

  const weeklyData: any = {};

  data.forEach((skillData: { skill: any; rounds: any[] }) => {
    const skill = skillData.skill;
    (skillData.rounds ? skillData.rounds : []).forEach((roundInfo) => {
      const userScore = roundInfo.userScore;
      const roundId = roundInfo.roundId;
      const roundScore = roundInfo.roundScore;
      const roundEnd = roundInfo.roundEnd;
      const roundEndDate = new Date(roundEnd);
      const weekOfMonth = calculateWeekOfMonth(roundEndDate);
      roundScoresByWeek.push({
        skill: skill,
        roundId: roundId,
        roundScore: roundScore,
        userScore,
        month: roundEndDate.getMonth() + 1,
        weekOfMonth: weekOfMonth,
      });
    });
  });

  roundScoresByWeek.forEach(
    (entry: {
      month: any;
      skill: any;
      weekOfMonth: any;
      userScore: any;
      roundScore: any;
    }) => {
      const { skill, month, weekOfMonth, userScore, roundScore } = entry;
      const key = `${skill}_${month}_${weekOfMonth}`;

      if (!weeklyData[key]) {
        weeklyData[key] = { sumRatio: 0, count: 0 };
      }

      weeklyData[key].sumRatio += (userScore / roundScore);
      weeklyData[key].count++;
    }
  );


  // Calculate the average for each skill, month, and weekOfMonth
  for (const key in weeklyData) {
    const [skill, month, weekOfMonth] = key.split("_");

    if (!averages[skill]) {
      averages[skill] = {};
    }

    if (!averages[skill][month]) {
      averages[skill][month] = {};
    }

    if (weeklyData[key].count > 0) {
      averages[skill][month][weekOfMonth] =
        weeklyData[key].sumRatio / weeklyData[key].count;
    } else {
      averages[skill][month][weekOfMonth] = 0;
    }
  }
  return averages

}

function ReportScreen({ selectedUserId }: { selectedUserId: Number }): React.ReactElement {
  const reportMonths = useAppSelector(
    (state) => state.reportsReducer.reportEndMonth
  );

  const [reports, setReports] = React.useState();
  const [singleUserReportData, setSingleUserReportData] = React.useState({})

  const sixMonthReport = useAppSelector(
    (state) => state.reportsReducer.sixMonthReport
  );

  const reportsData = useAppSelector(
    (state) => state.reportsReducer.reportsData
  );

  React.useEffect(() => {
    if (sixMonthReport && typeof sixMonthReport !== "string") {
      const calculatedReport = calculatePerMonthReport(sixMonthReport);
      setReports(calculatedReport);
    }
    if (reportsData && selectedUserId) {
      const result = reportsData.find((item: any) => item.id === selectedUserId.toString());
      setSingleUserReportData(result);
    }

  }, [sixMonthReport, reportsData, selectedUserId]);

  const arr: Item[] = [
    {
      id: 1,
      month: reportMonths[0],
      backgroundColor: "#C0E8C0",
      monthColor: "#88E53E",
    },
    {
      id: 2,
      month: reportMonths[1],
      backgroundColor: "#E1E7FF",
      monthColor: "#A7C2FF",
    },
    {
      id: 3,
      month: reportMonths[2],
      backgroundColor: "#C0E8C0",
      monthColor: "#88E53E",
    },
    {
      id: 4,
      month: reportMonths[3],
      backgroundColor: "#E1E7FF",
      monthColor: "#A7C2FF",
    },
    {
      id: 5,
      month: reportMonths[4],
      backgroundColor: "#C0E8C0",
      monthColor: "#88E53E",
    },
    {
      id: 6,
      month: reportMonths[5],
      backgroundColor: "#E1E7FF",
      monthColor: "#A7C2FF",
    },
  ];

  return (
    <Grid container sx={{ padding: "20px" }}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="space-between"
        sx={{ m: 1, mr: 2, mt: 2 }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#0A065C",
            fontWeight: "bold",
            mt: 4,
            fontFamily: "Maven Pro",
          }}
        >
          Blackbucks Report
        </Typography>
        <img src={Images.taptapLogo} width="86px" height="86px" />
      </Grid>

      <Grid item xs={10}>
        <ReportForm propData={singleUserReportData} />
      </Grid>

      {!sixMonthReport ? (
        <Grid item xs={12}>
          <center>Loading...</center>
        </Grid>
      ) : typeof sixMonthReport === "string" ? (
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ textAlign: 'center', mt: '5rem' }}>{sixMonthReport}</Typography>
        </Grid>
      ) : (
        reports && (
          <Grid item xs={12} sx={{ display: "flex" }}>
            <Grid xs={2}>
              <SubjectList />
            </Grid>

            {arr.map((item, ind) => (
              <Grid key={ind} xs={6} sm={2} item>
                {/* <MonthlyReport item={item} reports={reports} /> */}
                <ReportMonthlyCard item={item} reports={reports} />
                <ReportTotalCard item={item} reports={reports} />
                <ReportTextCards item={item} reports={reports} />
              </Grid>
            ))}
          </Grid>
        )
      )}
    </Grid>
  );
}

export default ReportScreen;
