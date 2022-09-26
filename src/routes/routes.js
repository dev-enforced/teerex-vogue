import React from "react";
import { Routes, Route } from "react-router-dom";
import { PRODUCT_LISTING_ROUTE, CART_ROUTE } from "constants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PRODUCT_LISTING_ROUTE} element={<></>} />
      <Route path={CART_ROUTE} element={<></>} />
    </Routes>
  );
};
export { AppRoutes };
