
import React from "react";

import LayoutHomeHeader from "./components/layout-home-header";
import "./styles/layout-home.scss";

export default React.memo(function LayoutHome({ children }) {
 return (
    <>
      <LayoutHomeHeader />
      {children}
    </>
  );
});
