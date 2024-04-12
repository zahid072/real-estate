import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About || Universal Estate</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-center font-bold md:text-4xl text-2xl">About</h1>
    </div>
  );
};

export default About;
