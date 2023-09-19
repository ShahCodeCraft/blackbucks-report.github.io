import { Dashboard } from "@mui/icons-material";
import AppRouter from "./routes/routerOutlet";
import LandingScreen from "./screens/app/landing.screen";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  let params = new URLSearchParams(window.location.search);
  const refId = params.get("refId");
  console.log("REFID: ", refId);

  const theme = createTheme({
    typography: {
      fontFamily: ['Mavin Pro','sans-serif'].join(","),
    },
  });

  return (
    <div className="App" style={{paddingTop:'3rem'}}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
