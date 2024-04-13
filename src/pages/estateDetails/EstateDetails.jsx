import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import useFetchData from "../../Hooks/useFetchData";

const EstateDetails = () => {
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
      
      <div className="my-28 text-3xl font-bold text-center">
      <img src={image} className="size-32 mx-auto mb-6 rounded-lg" alt="" />
        <h1>{segment_name}</h1>
      </div>
    </div>
  );
};

export default EstateDetails;
