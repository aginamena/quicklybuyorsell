import Root from "./pages/root";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Root />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
