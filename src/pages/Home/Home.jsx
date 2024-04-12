import React from "react";
import useFetchData from "../../Hooks/useFetchData";
import { Helmet } from "react-helmet";
import Banner from "../../components/banner/Banner";

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
       <Banner/>
       <div className="lg:my-20 md:my-12 my-7">
        <h1 className="text-center font-bold md:text-4xl text-xl">Estates</h1>
        <p className="max-w-2xl mx-auto text-center mt-4"></p>
       </div>
    </div>
  );
};

export default Home;
