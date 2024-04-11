import React from "react";
import useFetchData from "../../Hooks/useFetchData";
import { Helmet } from "react-helmet";

const Home = () => {
  const { data } = useFetchData();
  console.log(data);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Universal Estate</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>hello</h1>
    </div>
  );
};

export default Home;
