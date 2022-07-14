import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <Fragment>
      <Outlet>
        <Header></Header>
      </Outlet>
    </Fragment>
  );
};

export default Main;
