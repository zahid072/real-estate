import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import useFetchData from "../../Hooks/useFetchData";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { FaRegStar, FaShareAlt } from "react-icons/fa";
import { getStoredId, removeId, saveId } from "../../Utilities/LocalStorage";
import DirectionMap from "../../components/directionMap/DirectionMap";
import { ToastContainer, toast } from "react-toastify";

const EstateDetails = () => {
  const [isValue, setIsValue] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [findData, setFindData] = useState({});
  const clickId = useParams();
  const { data } = useFetchData();
  const localId = getStoredId("favorite-property");
  const {
    image,
    estate_title,
    id,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    built_year,
  } = findData;
  // find clicked id
  useEffect(() => {
    const findPropertyData = data.find(
      (property) => property.id === clickId.estateId
    );
    if (findPropertyData) {
      setFindData(findPropertyData);
    }
  }, [data, clickId]);
  // toggle favorite button
  const handleShowFavorite = () => {
    if (!localId.includes(id)) {
      saveId(id, "favorite-property");
      setIsFavorite(true);
      toast.success("Successfully added to your favorite list.");
    }
    if (localId.includes(id)) {
      removeId(id, "favorite-property");
      setIsFavorite(false);
    }
  };
  useEffect(() => {
    if (localId.includes(id)) {
      setIsFavorite(true);
    }
  }, [localId]);

  // handle overview and facilities navigation
  const handleOverviewNavigation = () => {
    setIsValue(true);
  };

  const handleFacilitiesNavigation = () => {
    setIsValue(false);
  };

  let sliceText = location?.slice(0, 15);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Estate Details || Universal Estate</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="my-28 space-y-5 lg:w-5/6 mx-2 md:mx-auto">
        <div className="md:flex  justify-between items-center">
          <div className="min-[500px]:flex md:gap-8 gap-6 items-center md:text-2xl font-semibold mt-4">
            <p className="text-center w-32 text-white bg-emerald-500 rounded">
              For {status}
            </p>
            <p className="flex max-[500px]:mt-5 gap-2 items-center">
              <FaLocationDot className="text-emerald-500 text-2xl" /> {location}
            </p>
          </div>
          <div className="flex gap-3 md:mt-0 mt-5 md:ml-0 max-[500px]:ml-0 ml-[80%] ma text-2xl">
            <span
              className="tooltip"
              data-tip={isFavorite ? "Remove" : "Add to favorite"}
              onClick={handleShowFavorite}
            >
              {isFavorite ? <FaStar /> : <FaRegStar />}
            </span>
            <FaShareAlt />
          </div>
        </div>
        <img
          src={image}
          className="lg:h-[600px] w-full mb-6 rounded-lg"
          alt=""
        />
        <div>
          <h1 className="md:text-3xl text-2xl text-gray-600 font-semibold">
            {estate_title}
          </h1>
        </div>
        {/* description */}
        <div className="w-full bg-white rounded">
          <h1 className="bg-[#2d2d2d] text-3xl font-bold text-white px-6 py-6 text-start rounded-t">
            Description
          </h1>
          <p className="p-6 md:text-xl">{description}</p>
        </div>
        {/* table section */}
        <div>
          <div className="flex w-full">
            <div className=" md:w-10 "></div>
            <button
              onClick={handleOverviewNavigation}
              className={`py-2 px-6 text-nowrap ${
                isValue === true ? " text-white bg-[#2d2d2d] rounded-t-lg" : ""
              }
          `}
            >
              Overview
            </button>
            <button
              onClick={handleFacilitiesNavigation}
              className={`py-2 px-6 text-nowrap ${
                isValue === false
                  ? " text-white  bg-[#2d2d2d] rounded-t-lg"
                  : ""
              }`}
            >
              Facilities
            </button>
            <div className=" w-full "></div>
          </div>

          {isValue && (
            <div className="bg-[#2d2d2d] -mt-[0.5px] w-full py-10 md:px-5 px-2 text-white rounded">
              <table className="min-w-full divide-y divide-gray-200 flex md:flex-row flex-col">
                <tbody className="bg-white md:border-r border-black divide-y w-full divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 bg-gray-200 font-bold md:text-xl">
                      <div className=" text-gray-900">Property ID</div>
                    </td>
                    <td className="px-6 text-gray-500 bg-gray-200 py-4 md:text-xl text-sm textNowrap ">
                      {id}
                    </td>
                  </tr>
                  <tr className="*:w-full">
                    <td className="px-6 py-4  font-bold md:text-xl">
                      <div className=" text-gray-900">Price</div>
                    </td>
                    <td className="px-6 text-gray-500  py-4 md:text-xl text-sm textNowrap ">
                      {price}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 bg-gray-200 font-bold md:text-xl">
                      <div className=" text-gray-900">Property Type</div>
                    </td>
                    <td className="px-6 text-gray-500 bg-gray-200 py-4 md:text-xl text-sm textNowrap ">
                      {segment_name}
                    </td>
                  </tr>
                  <tr className="*:w-full">
                    <td className="px-6 py-4  font-bold md:text-xl">
                      <div className=" text-gray-900">Property status</div>
                    </td>
                    <td className="px-6 text-gray-500  py-4 md:text-xl text-sm textNowrap ">
                      {status}
                    </td>
                  </tr>
                </tbody>
                <tbody className="bg-white divide-y w-full divide-gray-200">
                  <tr className="*:w-full">
                    <td className="px-6 py-4  font-bold md:text-xl">
                      <div className=" text-gray-900">Area</div>
                    </td>
                    <td className="px-6 text-gray-500  py-4 md:text-xl text-sm textNowrap ">
                      {area}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 bg-gray-200 font-bold md:text-xl">
                      <div className=" text-gray-900">Built Year</div>
                    </td>
                    <td className="px-6 text-gray-500 bg-gray-200 py-4 md:text-xl text-sm textNowrap ">
                      {built_year}
                    </td>
                  </tr>
                  <tr className="*:w-full">
                    <td className="px-6 py-4  font-bold md:text-xl">
                      <div className=" text-gray-900">Location</div>
                    </td>
                    <td className="px-6 text-gray-500  py-4 md:text-xl text-sm textNowrap ">
                      {(sliceText += "...")}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-7 bg-gray-200 font-bold md:text-xl">
                      <div className=" text-gray-900"></div>
                    </td>
                    <td className="px-6 text-gray-500 bg-gray-200 py-7 md:text-xl text-sm textNowrap "></td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {!isValue && (
            <div className="bg-[#2d2d2d] -mt-[0.5px] w-full p-10  text-white rounded">
              <ul className="list-decimal space-y-5 md:ml-10 ml-5">
                {facilities.map((facility, index) => (
                  <li className="md:text-2xl text-xl font-bold" key={index}>
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* map section */}
        <div>
          <h1 className="bg-[#2d2d2d] text-3xl font-bold text-white px-6 py-6 text-start rounded-t">
            GET DIRECTION
          </h1>
          <DirectionMap property={findData} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EstateDetails;
