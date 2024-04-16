import React, { useEffect, useState } from "react";
import { BsEmojiNeutral } from "react-icons/bs";
import { getStoredId } from "../../Utilities/LocalStorage";
import useFetchData from "../../Hooks/useFetchData";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Favorite = () => {
  const [filteredData, setFilteredData] = useState([]);
  const { data } = useFetchData();
  const storedProperty = getStoredId("favorite-property");
 
  // filter match data
  useEffect(() => {
    let allProperties = [];
    if (data.length > 0) {
      for (let localId of storedProperty) {
        const filteredProperty = data.find(
          (property) => property.id == localId
        );
        allProperties.push(filteredProperty);
      }
    }
    if (allProperties.length > 0) {
      setFilteredData(allProperties);
    }
  }, [data]);


  return (
    <div className="pb-10">
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold text-center py-24 bg-gradient-to-r transition from-green-400 to-blue-500 rounded">
        My Favorite
      </h1>
      <div>
        {data.length > 0 ? (
          <div>
            {!filteredData.length > 0 ? (
              <>
                <h1 className="text-red-400 text-xl font-semibold text-center py-6">
                  You didn't add any property to your favorite list.
                </h1>
                <p className="text-center text-3xl text-red-400">
                  <BsEmojiNeutral className="mx-auto" />
                </p>
              </>
            ) : (
              <div>
                {filteredData?.map((estate, index) => (
                  <div key={index} className="mb-6 mt-5">
                    <div className="md:flex w-full border-2 p-5 rounded-lg space-x-2 sm:space-x-4">
                      <div className="md:w-96 md:h-56 bg-gray-500 rounded-lg flex items-center">
                        <img
                          className=" object-cover  md:h-52 mx-auto border-transparent rounded outline-none "
                          src={estate?.image}
                          alt=""
                        />
                      </div>
                      <div className="md:flex flex-col space-y-4 w-full">
                        <div className="flex justify-between w-full space-x-2">
                          <div className="space-y-1 ">
                            <h3 className="text-lg font-semibold leading-snug mt-5 mb-5">
                              {estate.segment_name}
                            </h3>
                            <p className="text-sm flex gap-2">
                              <FaLocationDot className="text-emerald-500 text-xl" />{" "}
                              {estate.location}{" "}
                            </p>
                          </div>
                        </div>
                        <div className="md:flex justify-start items-center gap-8">
                          <h3 className="font-bold text-xl md:mb-0 mb-4">
                            For: {estate.status}
                          </h3>

                          <p>
                            <MdDateRange className="inline text-2xl" /> Built
                            Year: {estate.built_year}
                          </p>
                        </div>

                        <div className="flex md:flex-row flex-col justify-start border-t-2 pt-4 md:items-center gap-8">
                          <div className=" w-1/2">
                            <Link to={`/estateDetails/${estate?.id}`}>
                              <button className="px-4 py-3 rounded-lg bg-[#23BE0A] text-white font-semibold">
                                View details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <svg
            className="mx-auto h-screen"
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
      </div>
    </div>
  );
};

export default Favorite;
