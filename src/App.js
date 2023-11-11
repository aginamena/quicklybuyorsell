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
import PublishedProducts from "pages/PublishedProducts";

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
            <Route
              exact
              path="published-products/:selectedCategory"
              element={<PublishedProducts />}
            />
          </Routes>
          <SnackbarCmp />
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
