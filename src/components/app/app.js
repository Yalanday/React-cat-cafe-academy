import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import gallery from "../../mocks/gallery";
import buyOptions from "../../mocks/buyOptions";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import BuyPage from "../pages/buy-page/buy-page";
import MainPage from "../pages/main-page/main-page";
import starList from "../../mocks/starList";
import ScrollToTop from "../ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage stars={starList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage slides={gallery} buyOptions={buyOptions} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
