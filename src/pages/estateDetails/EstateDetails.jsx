import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import useFetchData from "../../Hooks/useFetchData";
import { FaLocationDot, FaStar } from "react-icons/fa6";
import { FaRegStar, FaShareAlt } from "react-icons/fa";

const EstateDetails = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [findData, setFindData] = useState({});
  const clickId = useParams();
  const { data } = useFetchData();
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
    setIsFavorite(!isFavorite);
  };
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
  } = findData;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Estate Details || Universal Estate</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="my-28 space-y-5 text-center w-5/6 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex md:gap-8 gap-6 items-center text-xl font-semibold mt-4">
            <p className="w-[112px] text-center text-white bg-emerald-500 rounded">
              For {status}
            </p>
            <p className="flex gap-2 text-2xl items-center">
              <FaLocationDot className="text-emerald-500 text-2xl" /> {location}
            </p>
          </div>
          <div className="flex gap-3 text-2xl">
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
        <img src={image} className="h-[600px] w-full mb-6 rounded-lg" alt="" />
        <div className="w-full bg-white">
          <h1 className="bg-[#2d2d2d] text-3xl font-bold text-white px-6 py-6 text-start">
            Description
          </h1>
          <p className="p-6 text-xl">{description}</p>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
