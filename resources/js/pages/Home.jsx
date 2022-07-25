import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ProductBox } from "../components/Shared";
import { useRef } from "react";
import { CgChevronDoubleRight } from "react-icons/cg";
import { CgChevronDoubleLeft } from "react-icons/cg";
import HeroSlider from "../components/HeroSlider";
// import img1 from "../assets/images/home/1.png";
// import img2 from "../assets/images/home/2.png";
// import img3 from "../assets/images/home/3.png";
// import img4 from "../assets/images/home/4.png";
// import img5 from "../assets/images/home/5.png";
// import { Link } from "react-router-dom";
import { Link, usePage } from '@inertiajs/inertia-react'
import Layout from "../Layouts/Layout";
import { BiChevronRight } from "react-icons/bi";
// import { bathroom, doorsHome } from "../components/Data";
import ProductSlider from "../components/ProductSlider";

const Home = ({ seo, page, partners, tiles, doors, bath }) => {

    const tileSlider = [], doorsHome = [], bathroom = [];

    if (tiles.data) {
        tiles.data.map((e, i) => {
            tileSlider.push(
                {
                    name: e.title,
                    size: `${e.height} X ${e.width}`,
                    img: `${e.latest_image.path}/${e.latest_image.title}`,
                    link: route("client.singleproduct.show", e.id),
                },
            )
        })
    }


    if (doors.data) {
        doors.data.map((e, i) => {
            doorsHome.push(
                {
                    name: e.title,
                    size: `${e.height} X ${e.width}`,
                    img: `${e.latest_image.path}/${e.latest_image.title}`,
                    link: route("client.singleproduct.show", e.id),
                },
            )
        })
    }
    if (bath.data) {
        bath.data.map((e, i) => {
            bathroom.push(
                {
                    name: e.title,
                    size: `${e.height} X ${e.width}`,
                    img: `${e.latest_image.path}/${e.latest_image.title}`,
                    link: route("client.singleproduct.show", e.id),
                },
            )
        })
    }


    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    return (
        <Layout seo={seo}>
            <div>
                <section className="mb-5">
                    <HeroSlider />
                </section>
                <section className="grid lg:grid-cols-2  w-full h-fit">
                    <div className="grid sm:grid-cols-2 ">
                        <Link href={route("client.mile.index")}>
                            <div className="p-6 h-72  relative bg-slate-200 overflow-hidden">
                                <div className="opacity-50 lowercase ">{__("client.footer_irons", sharedData)}</div>
                                <div className="text-2xl my-2">{__("client.footer_miles", sharedData)}</div>
                                <div className="lowercase">
                                    {__("client.home_btn", sharedData)} <BiChevronRight className="inline-block" />
                                </div>
                                <img
                                    src="/assets/images/home/1.png"
                                    alt=""
                                    className="absolute bottom-0 right-0 h-1/2"
                                />
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="p-6 h-72  relative bg-zinc-100 overflow-hidden">
                                <div className="opacity-50 lowercase ">{__("client.footer_irons", sharedData)}</div>
                                <div className="text-2xl my-2">{__("client.footer_ortesebri", sharedData)}</div>
                                <div className="lowercase">
                                    {__("client.home_btn", sharedData)} <BiChevronRight className="inline-block" />
                                </div>
                                <img
                                    src="/assets/images/home/2.png"
                                    alt=""
                                    className="absolute bottom-0 right-0  h-1/2"
                                />
                            </div>
                        </Link>
                        <Link href={route("client.metalpaper.index2")}>
                            <div className="p-6 h-72  relative text-white overflow-hidden bg-gradient-to-b from-custom-blue-900/[0.5]">
                                <div className="opacity-50 lowercase ">{__("client.footer_irons", sharedData)}</div>
                                <div className="text-2xl my-2">{__("client.footer_metal_paper2", sharedData)}</div>
                                <div className="lowercase">
                                    {__("client.home_btn", sharedData)} <BiChevronRight className="inline-block" />
                                </div>
                                <img
                                    src="/assets/images/home/3.png"
                                    alt=""
                                    className="absolute bottom-0 right-0 w-full h-full -z-10 object-cover"
                                />
                            </div>
                        </Link>
                        <Link href={route("client.granula.index")}>
                            <div className="p-6 h-72  relative bg-gray-200 overflow-hidden">
                                <div className="opacity-50 lowercase ">{__("client.footer_irons", sharedData)}</div>
                                <div className="text-2xl my-2">{__("client.footer_granula", sharedData)}</div>
                                <div className="lowercase">
                                    {__("client.home_btn", sharedData)} <BiChevronRight className="inline-block" />
                                </div>
                                <img
                                    src="/assets/images/home/4.png"
                                    alt=""
                                    className="absolute bottom-0 right-0 h-1/2"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="">
                        {" "}
                        <Link href={route("client.armatura.index")}>
                            <div className="p-6 lg:h-full h-72 text-white relative bg-zinc-100 overflow-hidden bg-gradient-to-b from-custom-blue-900/[0.5]">
                                <div className="opacity-50 lowercase ">{__("client.footer_irons", sharedData)}</div>
                                <div className="text-4xl my-5">{__("client.footer_armatura", sharedData)}</div>
                                <div className="lowercase">
                                    {__("client.home_btn", sharedData)} <BiChevronRight className="inline-block" />
                                </div>
                                <img
                                    src="/assets/images/home/5.png"
                                    alt=""
                                    className="absolute bottom-0 right-0 lg:h-auto h-2/3 "
                                />
                            </div>
                        </Link>
                    </div>
                </section>
                <section className="wrapper py-10">
                    <Link href="/partners" className="text-lg hover:underline">
                        {/* <PartnerIcon className="inline-block align-middle mr-2" /> */}
                        <img className="inline-block align-middle mr-2" src="/assets/images/icons/svg/partners.svg" />
                        {__("client.navbar_partners", sharedData)}
                    </Link>
                    <div className="block text-center py-10">
                        {partners.map((item) => {
                            return (
                                <div
                                    key={item.name}
                                    className="text-center inline-block 2xl:mx-10 mx-5 mb-5 grayscale transition hover:grayscale-0"
                                >
                                    <div className="h-16 w-auto m-auto flex items-center justify-center mb-2">
                                        {/* <img src={item.logo} alt="" className="object-contain " /> */}
                                        <img src={item.latest_image != null
                                            ? "/" +
                                            item.latest_image.path +
                                            "/" +
                                            item.latest_image.title
                                            : null} alt="" />
                                    </div>
                                    <div className="lowercase">{item.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section className="bg-zinc-100 py-10 pb-20">
                    <div className="wrapper">
                        <Link href={route("client.tiles.index")} className="text-lg  hover:underline">
                            {/* <TilesIcon className="inline-block align-middle mr-2" /> */}

                            <img className="inline-block align-middle mr-2" src="/assets/images/icons/svg/tiles.svg" />
                            {__("client.navbar_tiles", sharedData)}
                        </Link>
                        <ProductSlider data={tileSlider} />




                    </div>
                </section>
                <section className="wrapper py-10">
                    <Link href={route("client.tiles2.index")} className="text-lg  hover:underline">
                        {/* <DoorIcon className="inline-block align-middle mr-2" /> */}
                        <img className="inline-block align-middle mr-2" src="/assets/images/icons/svg/door.svg" />
                        {__("client.navbar_doors", sharedData)}
                    </Link>
                    <ProductSlider data={doorsHome} />
                </section>
                <section className="wrapper py-10 pb-20">
                    <Link href="/" className="text-lg  hover:underline">
                        {/* <Bathroom className="inline-block align-middle mr-2" /> */}
                        <img className="inline-block align-middle mr-2" src="/assets/images/icons/svg/bathroom.svg" />
                        {__("client.navbar_bathroom", sharedData)}
                    </Link>
                    <ProductSlider data={bathroom} />
                </section>
            </div>
        </Layout>
    );
};

export default Home;
