import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About || Universal Estate</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-center font-bold md:text-4xl text-2xl">About</h1>
      <p className="max-w-3xl mx-auto text-center mt-5">At Estates, we redefine commercial real estate with a diverse portfolio. Offering prime office buildings, retail spaces, warehouses, and more, we tailor solutions for success. Our commitment ensures every client finds their ideal property, empowering growth in vibrant urban and serene suburban landscapes.</p>
    </div>
  );
};

export default About;
