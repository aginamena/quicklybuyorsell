import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import Header from "components/Header";
import MyAccount from "pages/MyAccount";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import { darkTheme } from "./theme";
import ProductDetails from "pages/ProductDetails";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Header currentPath={window.location.pathname} />
        <Routes>
          <Route exact path="/" element={<Root />} />
          <Route exact path="my-account" element={<MyAccount />} />
          <Route
            exact
            path="product-details/:productId"
            element={<ProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
