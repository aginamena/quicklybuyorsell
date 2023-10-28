import Root from "./pages/Root";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAccount from "pages/MyAccount";
import Header from "components/Header";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Root />} />
          <Route exact path="my-account" element={<MyAccount />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
