import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, red, yellow } from "@mui/material/colors";

// makeStyle is to make classes and goes outside the component
const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    border: `dotted 5px ${green.A400}`,
    backgroundColor: "warning",
    borderRadius: "20px",
  },
});
function App() {
  const specialBtn = useStyles();

  const myTheme = createTheme({
    typography: {
      fontFamily: "Fraunces",
      fontWeightBold: 700,
    },
    palette: {
      primary: {
        main: "#3cbefe",
        light: "#7ff0ff",
        dark: "#008ecb",
      },
      secondary: { main: red.A200 },
      warning: { main: yellow[600] },
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      <Box>
        <Navbar />
        <Header />
        <MainContent />
        <Button
          className={specialBtn.btn}
          color="secondary"
          variant="contained"
        >
          hey
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
