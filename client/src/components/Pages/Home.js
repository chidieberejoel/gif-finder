import React, { Fragment } from "react";
import Search from "../Search/Search";
import Images from "../Images/Images";
import Layout from "../Layout/Layout";

const Home = () => (
  <Fragment>
    <Layout>
      <Search />
      <Images />
    </Layout>
  </Fragment>
);

export default Home;
