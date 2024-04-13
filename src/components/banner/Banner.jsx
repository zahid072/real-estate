import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useFetchData from "../../Hooks/useFetchData";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  const { data } = useFetchData();
  const sliceData = data.slice(1, 5);

  return (
    <div>
      <Swiper
        className="h-[600px]"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {sliceData.map((property) => (
          <SwiperSlide key={property.id}>
            <div
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${property.image})`,
              }}
              className="w-full bg-no-repeat flex items-center justify-center bg-cover bg-center rounded-lg h-full"
            >
              <div className="max-w-3xl">
                <h1 className="text-white text-center text-5xl font-bold animate__animated animate__fadeInUp hover:text-orange-500 transition cursor-pointer">
                  {" "}
                  <Link
                    className="leading-snug "
                    to={`/estateDetails/${property.id}`}
                  >
                    {property.estate_title}
                  </Link>
                </h1>
                <div className="flex gap-8 items-center text-white justify-center text-xl font-semibold mt-4 animate__animated animate__fadeInUp ">
                  <p className="text-black bg-[#ffffff86] px-2 rounded">
                    For {property.status}
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaLocationDot className="text-amber-500 text-2xl " />{" "}
                    {property.location}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
