import React from "react";
import { Link } from "react-router-dom";

const DefaultCard = ({ estate }) => {
  const { image, id, segment_name, status, price } = estate;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {segment_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{price}</div>
            <div className="badge badge-outline">{status}</div>
          </div>
          <div className="card-actions justify-center mt-5">
            <Link to={`/estateDetails/${id}`}>
              <button className="btn bg-emerald-400 hover:bg-emerald-600 hover:text-white">
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
