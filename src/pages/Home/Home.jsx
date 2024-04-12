import React from "react";
import useFetchData from "../../Hooks/useFetchData";
import { Helmet } from "react-helmet";
import Banner from "../../components/banner/Banner";
import DefaultCard from "../../components/defaultCard/DefaultCard";

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
        <p className="max-w-4xl mx-auto text-center mt-4">Experience the epitome of commercial real estate diversity at Estates. Unveil a spectrum of options, from modern office complexes to versatile multi-use spaces. With prime locations spanning bustling city centers to serene suburban landscapes, discover the ideal setting for your business endeavors.</p>
        <div className="grid lg:grid-cols-3 mt-5 md:grid-cols-2 grid-cols-1 justify-items-center gap-5">
          {
            data.map(estate => <DefaultCard key={estate.id} estate={estate}/>)
          }
        </div>
       </div>
    </div>
  );
};

export default Home;
