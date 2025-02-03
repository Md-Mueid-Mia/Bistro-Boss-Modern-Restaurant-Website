import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { RiDoubleQuotesL } from "react-icons/ri";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-sand-three.vercel.app/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-5 md:my-20">
      <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div>
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="m-10 md:m-24 flex flex-col  items-center my-16 space-y-4 text-center
                ">
                  <Rating
                    style={{ maxWidth: 180, width: "100%" }}
                    value={review?.rating}
                  />
                  <RiDoubleQuotesL className="text-7xl font-extrabold"/>

                  <p>{review?.details}</p>
                  <h3 className="text-2xl text-orange-400">{review?.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
