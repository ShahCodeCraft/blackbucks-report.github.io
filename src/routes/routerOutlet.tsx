import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import LoginScreen from "../screens/auth/login.screen";
import LandingScreen from "../screens/app/landing.screen";
import ReportScreen from "../screens/app/report.screen";
import ProfilingReport from "../components/Profiling Report/ProfilingReport";
import LabReport from "../components/BB Lab Report/LabReport";
import StudentRanking from "../components/Student Ranking/StudentRanking";
import Loader from "../components/Loader/loader";
import SplashScreen from "../screens/splash/splash.screen";

const AppRouter = () => {
  let params = new URLSearchParams(window.location.search);
  const refId = params.get("refId");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<LandingScreen />} />
        {/* <Route path="/report" element={<ReportScreen />} /> */}
        {/* <Route path="/profiling" element={<ProfilingReport />} /> */}
        <Route path="/labreport" element={<LabReport />} />
        <Route path="/studentranking" element={<StudentRanking />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
