import React, { useState } from "react";
import useFetchData from "../../Hooks/useFetchData";
import { Helmet } from "react-helmet";
import Banner from "../../components/banner/Banner";
import DefaultCard from "../../components/defaultCard/DefaultCard";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [showData, setShowData] = useState(false);
  const { data, loader } = useFetchData();
  const sliceData = showData ? data : data.slice(0, 6);
  const handleSeeAll = () => {
    setShowData(true);
  };

  const showToast = () => {
    toast.success("Successfully added to your favorite list.");
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Universal Estate || Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      {(loader && (
        <svg
          className="mx-auto my-20"
          version="1.1"
          id="L1"
          x="0px"
          y="0px"
          width="160px"
          height="160px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100"
          xmlSpace="preserve"
        >
          <circle
            fill="none"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
            strokeMiterlimit="15"
            strokeDasharray="14.2472,14.2472"
            cx="50"
            cy="50"
            r="47"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="5s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            fill="none"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeDasharray="10,10"
            cx="50"
            cy="50"
            r="39"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="5s"
              from="0 50 50"
              to="-360 50 50"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <g fill="black">
            <rect x="30" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.1"
              ></animateTransform>
            </rect>
            <rect x="40" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.2"
              ></animateTransform>
            </rect>
            <rect x="50" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.3"
              ></animateTransform>
            </rect>
            <rect x="60" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.4"
              ></animateTransform>
            </rect>
            <rect x="70" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.5"
              ></animateTransform>
            </rect>
          </g>
        </svg>
      )) || <Banner />}

      <div className="lg:my-20 md:my-12 my-7">
        <h1 className="text-center font-bold md:text-4xl text-xl">Estates</h1>
        <p className="max-w-4xl mx-auto text-center mt-4">
          Experience the epitome of commercial real estate diversity at Estates.
          Unveil a spectrum of options, from modern office complexes to
          versatile multi-use spaces. With prime locations spanning bustling
          city centers to serene suburban landscapes, discover the ideal setting
          for your business endeavors.
        </p>
        {loader && (
          <svg
            className="mx-auto my-20"
            version="1.1"
            id="L1"
            x="0px"
            y="0px"
            width="160px"
            height="160px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
          >
            <circle
              fill="none"
              stroke="black"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="15"
              strokeDasharray="14.2472,14.2472"
              cx="50"
              cy="50"
              r="47"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="5s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
            <circle
              fill="none"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeDasharray="10,10"
              cx="50"
              cy="50"
              r="39"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="5s"
                from="0 50 50"
                to="-360 50 50"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
            <g fill="black">
              <rect x="30" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.1"
                ></animateTransform>
              </rect>
              <rect x="40" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.2"
                ></animateTransform>
              </rect>
              <rect x="50" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.3"
                ></animateTransform>
              </rect>
              <rect x="60" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.4"
                ></animateTransform>
              </rect>
              <rect x="70" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.5"
                ></animateTransform>
              </rect>
            </g>
          </svg>
        )}
        <div className="grid lg:grid-cols-3 md:px-24 mt-5 md:grid-cols-2 grid-cols-1 justify-items-center gap-5">
          {sliceData.map((estate) => (
            <DefaultCard
              key={estate.id}
              showToast={showToast}
              estate={estate}
            />
          ))}
        </div>
        <div className="w-32 mx-auto mt-3">
          {sliceData.length > 0 && (
            <button
              onClick={handleSeeAll}
              className={`btn btn-accent ${showData ? "hidden" : "block"}`}
            >
              See more...
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
