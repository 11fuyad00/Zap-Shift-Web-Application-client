import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import customarTop from '../../../assets/customer-top.png';
import reviewQuote from '../../../assets/reviewQuote.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';

const Reviews = ({ ReviewsPromise }) => {
  const reviews = use(ReviewsPromise);

  return (
    <section className="py-20 bg-[#F4F9FA]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* ---- Top Icon ---- */}
        <div className="flex justify-center mb-4">
          <img src={customarTop} alt="icon" />
        </div>

        {/* ---- Title ---- */}
        <h2 className="text-4xl font-bold text-[#073B4C] mb-3">
          What our customers are saying
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Enhance posture, mobility, and well-being effortlessly. Achieve proper
          alignment, reduce pain, and strengthen your body with ease!
        </p>

        {/* ---- Swiper ---- */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          spaceBetween={40}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.review-next-btn',
            prevEl: '.review-prev-btn',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {reviews?.map(item => (
            <SwiperSlide key={item.id}>
              <div
                className="
                bg-white 
                p-10 
                rounded-[30px] 
                shadow-xl 
                border 
                border-gray-200 
                h-full 
                transition-all 
                duration-300 
                hover:scale-[1.02]
                hover:shadow-2xl
              "
              >
                {/* QUOTE ICON */}
                <div className="mb-5">
                  <img src={reviewQuote} alt="quote" />
                </div>

                {/* REVIEW TEXT */}
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {item.review}
                </p>

                <div className="border-t border-dotted border-gray-300 my-4"></div>

                {/* USER INFO */}
                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={item.user_photoURL}
                    alt="User"
                    className="w-12 h-12 rounded-full border border-gray-200 object-cover"
                  />
                  <div className="text-left">
                    <h3 className="font-semibold text-[#073B4C]">
                      {item.userName}
                    </h3>
                    <p className="text-sm text-[#B7E441] font-medium">
                      ⭐ {item.ratings}/5
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ---- Custom Navigation Buttons ---- */}
        <div className="flex justify-center gap-6 mt-8">
          {/* PREV BTN */}
          <button
            className="
            review-prev-btn 
            w-10 h-10 flex items-center justify-center 
            rounded-full 
            border border-gray-500 
            text-gray-700
            hover:bg-gray-300 
            transition
          "
          >
            ←
          </button>

          {/* NEXT BTN */}
          <button
            className="
            review-next-btn 
            w-10 h-10 flex items-center justify-center 
            rounded-full 
            bg-[#B7E441] 
            hover:bg-[#a0cf39] 
            text-black 
            transition
          "
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
