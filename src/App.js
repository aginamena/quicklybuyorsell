import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import Header from "components/Header";
import SnackbarCmp from "components/SnackbarCmp";
import { AppContext } from "context/appContext";
import MyAccount from "pages/MyAccount";
import ProductDetails from "pages/ProductDetails";
import ProductsForReview from "pages/productsForReview";
import { useState } from "react";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Root from "./pages/Roots";
import { darkTheme } from "./theme";
import PublishedProducts from "pages/PublishedProducts";
import TermsOfUse from "pages/TermsOfUse";
import AboutUs from "pages/AboutUs";
import DialogCmp from "components/DialogCmp";
import DrawerCmp from "components/DrawerCmp";

function App() {
  const [showSnackbarCmp, setShowSnackbarCmp] = useState({
    shouldShow: false,
    message: "",
  });
  const [showBackdropCmp, setShowBackdropCmp] = useState(false);
  const [showDialogCmp, setShowDialogCmp] = useState(false);
  const [showDrawerCmp, setShowDrawerCmp] = useState(false);
  const state = {
    showSnackbarCmp,
    setShowSnackbarCmp,
    showBackdropCmp,
    setShowBackdropCmp,
    showDialogCmp,
    setShowDialogCmp,
    showDrawerCmp,
    setShowDrawerCmp,
  };

  return (
    <AppContext.Provider value={state}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <HashRouter>
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
              path="products-for-review"
              element={<ProductsForReview />}
            />
            <Route
              exact
              path="published-products/:selectedCategory"
              element={<PublishedProducts />}
            />
            <Route exact path="terms-of-use" element={<TermsOfUse />} />
            <Route exact path="about-us" element={<AboutUs />} />
          </Routes>
          <SnackbarCmp />
          <DialogCmp />
          <DrawerCmp />
        </HashRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
