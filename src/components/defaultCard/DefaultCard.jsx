import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { BiArea } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const DefaultCard = ({ estate }) => {
  const { image, id, segment_name, status, price, estate_title, area, location } = estate;
  return (
    <>
      <div className="card w-full p-5 border border-[#3f3e3e2f] bg-base-100 animate__animated animate__fadeInUp">
        <figure>
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="w-full h-60 bg-cover justify-items-center p-3 flex justify-end items-start"
          >
            <p className=" bg-orange-500 text-white font-semibold px-2 rounded">
              For {status}
            </p>
          </div>
        </figure>
        <div className="card-body mt-5 p-0">
          <h2 className="font-semibold text-emerald-400">{segment_name}</h2>
          <p className="card-title font-bold">{estate_title}</p>
          <p className="flex gap-2 text-sm items-center">
            <FaLocationDot className="text-emerald-500 text-xl" /> 
            {location}
          </p>
          <div className="flex justify-between items-center mt-3">
            <div className="">{price}</div>
            <div className="flex items-center gap-2">
              <BiArea className="text-emerald-400 text-2xl" /> {area}
            </div>
          </div>
          <div className="card-actions justify-center mt-5 ">
            <Link className="w-full" to={`/estateDetails/${id}`}>
              <button className="btn bg-emerald-400 w-full hover:bg-emerald-600 hover:text-white">
                View Property
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultCard;
