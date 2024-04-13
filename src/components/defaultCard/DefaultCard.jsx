import React from "react";
import { Link } from "react-router-dom";
import 'animate.css';

const DefaultCard = ({ estate }) => {
  const { image, id, segment_name, status, price, estate_title } = estate;
  return (
    <>
      <div className="card w-full p-5 border border-[#3f3e3e2f] bg-base-100 animate__animated animate__fadeInUp">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body mt-5 p-0">
          <h2 className="card-title">
            {segment_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{estate_title}</p>
          <div className="card-actions justify-end mt-3">
            <div className="badge badge-outline">{price}</div>
            <div className="badge badge-outline">{status}</div>
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
