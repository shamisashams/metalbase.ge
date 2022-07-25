import { Swiper, SwiperSlide } from "swiper/react";
// import img1 from "../assets/images/home/slider/1.png";
import React from "react";
// import img2 from "../assets/images/home/slider/2.png";
import { Link, usePage } from '@inertiajs/inertia-react'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const HeroSlider = (props) => {
    return (
        <Swiper
            //   spaceBetween={50}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            slidesPerView={1}
            loop
            grabCursor
            className="lg:h-96 h-72 text-white"
        >


            {/*
            <SwiperSlide className="bg-custom-blue-500">
                <img
                    src="/assets/images/home/slider/1.png"
                    className="w-full h-full absolute -z-10 object-cover"
                    alt=""
                />
                <div className="wrapper flex flex-col justify-end items-start h-full pb-12 ">
                    <div className="lg:text-2xl text-xl mb-2">მეტალის კუთხე</div>
                    <p className="lg:text-sm text-xs text-justify max-w-xl">
                        უმაღლესი ხარისხის მეტალის კუთხეები, ხარისხის გარანტიით წარმოებულია
                        უმაღლესი სტანდარტების დაცვით
                    </p>
                </div>
            </SwiperSlide>


            <SwiperSlide>
                <img
                    src="/assets/images/home/slider/2.png"
                    className="w-full h-full absolute -z-10 object-cover"
                    alt=""
                />
                <div className="wrapper flex flex-col justify-end items-start h-full pb-12 ">
                    <div className="lg:text-2xl text-xl mb-2">
                        {" "}
                        ხარისხის გარანტიით წარმოებულია
                    </div>
                    <p className="lg:text-sm text-xs text-justify max-w-xl">
                        მეტალის კუთხე ეტალის კუთხეები, ხარისხის გარანტიით წარმოე ბულია
                        უმაღლესი სტანდ არტების დაცვი თუმაღლესი ხარისხის მ
                    </p>
                </div>
            </SwiperSlide> */}


            {
                usePage().props.sliders.map((e, i) => {
                    return (
                        <SwiperSlide className="bg-custom-blue-500" key={i}>
                            {/* <img
                                src="/assets/images/home/slider/1.png"
                                className="w-full h-full absolute -z-10 object-cover"
                                alt=""
                            /> */}

                            <img className="w-full h-full absolute -z-10 object-cover" src={e.file != null
                                ? "/" +
                                e.file.path +
                                "/" +
                                e.file.title
                                : null} alt="" />
                            <div className="wrapper flex flex-col justify-end items-start h-full pb-12 ">
                                <div className="lg:text-2xl text-xl mb-2">{e.title}</div>
                                <p className="lg:text-sm text-xs text-justify max-w-xl">
                                    {e.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            ...
        </Swiper>
    );
};

export default HeroSlider;
