import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import Header from "components/Header";
import SnackbarCmp from "components/SnackbarCmp";
import { AppContext } from "context/appContext";
import MyAccount from "pages/MyAccount";
import ProductDetails from "pages/ProductDetails";
import ProductsForReview from "pages/productsForReview";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import { darkTheme } from "./theme";

function App() {
  const [showSnackbarCmp, setShowSnackbarCmp] = useState({
    shouldShow: false,
    message: "",
  });
  const [showBackdropCmp, setShowBackdropCmp] = useState(false);
  const state = {
    showSnackbarCmp,
    setShowSnackbarCmp,
    showBackdropCmp,
    setShowBackdropCmp,
  };

  return (
    <AppContext.Provider value={state}>
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
            <Route
              exact
              path="productsForReview"
              element={<ProductsForReview />}
            />
          </Routes>
          <SnackbarCmp />
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
