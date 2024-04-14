import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useFetchData from "../../Hooks/useFetchData";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BiArea } from "react-icons/bi";

const Banner = () => {
  const { data } = useFetchData();
  const sliceData = data.slice(1, 5);

  return (
    <div className="mt-5 relative">
      <Swiper
        className="md:h-[600px] h-[500px] z-0"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
      >
        {sliceData.map((property) => (
          <SwiperSlide className="w-full" key={property.id}>
            <div
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${property.image})`,
              }}
              className="w-full px-5 bg-no-repeat flex items-center justify-center bg-cover bg-center rounded-lg h-full"
            >
              <div className="max-w-3xl">
                <h1 className="text-white lg:text-5xl md:text-3xl text-2xl font-bold animate__animated animate__fadeInUp hover:text-orange-500 transition cursor-pointer">
                  {" "}
                  <Link
                    className="leading-snug "
                    to={`/estateDetails/${property.id}`}
                  >
                    {property.estate_title}
                  </Link>
                </h1>
                <div className="md:flex md:gap-8 gap-6 items-center text-white text-xl font-semibold mt-4 animate__animated animate__fadeInUp ">
                  <p className="md:mb-0 mb-5 w-[112px] text-center bg-[#26eab986] rounded">
                    For {property.status}
                  </p>
                  <p className="flex gap-2 md:text-2xl text-sm items-center">
                    <FaLocationDot className="text-emerald-500 md:text-2xl" />{" "}
                    {property.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white mt-5 text-xl font-bold animate__animated animate__fadeInUp">
                  <BiArea className="text-emerald-400 text-3xl " />{" "}
                  {property.area}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex md:w-40 w-28 justify-between">
          <div className="swiper-button-prev swiperBtn font-bold text-white bg-[#26eab986] hover:bg-emerald-500 transition h-16 px-3 rounded"></div>
          <div className="swiper-button-next swiperBtn font-bold text-white bg-[#26eab986] hover:bg-emerald-500 transition h-16 px-3 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
