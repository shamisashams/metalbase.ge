import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { tileSlider } from "./Data";
import { ProductBox } from "./Shared";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useRef } from "react";
import { CgChevronDoubleRight } from "react-icons/cg";
import { CgChevronDoubleLeft } from "react-icons/cg";

const ProductSlider = ({ data }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={5}
            grabCursor
            className="!px-10 mt-10"
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
            breakpoints={{
                1300: {
                    slidesPerView: 5,
                },
                1020: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 3,
                },
                500: {
                    slidesPerView: 2,
                },
                200: {
                    slidesPerView: 1,
                },
            }}
        >
            {" "}
            <button
                ref={prevRef}
                className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full border border-custom-blue-900 text-custom-blue-900 flex items-center justify-center w-10 h-10 hover:scale-90 transition hover:border-2  z-10"
            >
                <CgChevronDoubleLeft className="w-5 h-5" />
            </button>
            <button
                ref={nextRef}
                className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full border border-custom-blue-900 text-custom-blue-900 flex items-center justify-center w-10 h-10 hover:scale-90 transition hover:border-2 z-10"
            >
                <CgChevronDoubleRight className="w-5 h-5" />
            </button>
            {data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <ProductBox
                            name={item.name}
                            size={item.size}
                            img={item.img}
                            link={item.link}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default ProductSlider;
