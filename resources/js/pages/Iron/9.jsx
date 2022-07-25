import React from "react";
import { BiChevronRight } from "react-icons/bi";
// import bg from "../../assets/images/iron/bg.png";
import { contactInfo } from "../../components/Data";
import { FaPhone } from "react-icons/fa";
// import img1 from "../../assets/images/iron/1.png";
// import img2 from "../../assets/images/iron/2.png";
// import img3 from "../../assets/images/iron/3.png";
// import img4 from "../../assets/images/iron/4.png";
// import img5 from "../../assets/images/iron/5.png";
// import img6 from "../../assets/images/iron/6.png";
import { Link } from '@inertiajs/inertia-react';
import Layout from "../../Layouts/Layout";

const Iron1 = ({ seo, page }) => {
    const otherIrons = [
        {
            img: "/assets/images/iron/2.png",
            name: "ორტესებრი",
            link: "/iron/2",
        },
        {
            img: "/assets/images/iron/3.png",
            name: "გლინულა",
            link: "/iron/2",
        },
        {
            img: "/assets/images/iron/4.png",
            name: "არმატურა",
            link: "/iron/2",
        },
        {
            img: "/assets/images/iron/5.png",
            name: "კუთხოვანა",
            link: "/iron/2",
        },
        {
            img: "/assets/images/iron/6.png",
            name: "მილი",
            link: "/iron/2",
        },
    ];
    return (
        <Layout seo={seo}>
            <div>
                <div className="wrapper">
                    <div className="block pt-6">
                        <p className="opacity-50 inline-block  lowercase">მთავარი</p>
                        <BiChevronRight className="inline-block mx-1" />
                        <p className="opacity-50  inline-block lowercase">რკინეული</p>
                        <BiChevronRight className="inline-block mx-1" />
                        <p className="inline-block lowercase">ზოლოვანა</p>
                    </div>
                    <div className="text-3xl my-10">ზოლოვანა</div>
                </div>
                <div
                    className="py-10 mb-20 bg-cover bg-no-repeat bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url('/assets/images/iron/bg.png')` }}
                >
                    <img
                        src="/assets/images/iron/1.png"
                        className="absolute bottom-0 right-0 xl:w-auto w-1/2"
                        alt=""
                    />
                    <div className="wrapper">
                        <div className="max-w-lg lowercase text-justify relative z-20">
                            პროდუქტის აღწერა, რა არის, რისთვის გამოიყენება, როგორ მზადდება. ამ
                            კონკრეტულ შემთხვევაში როგორი ხარისხისაა, საიდან არის შემოტანილი ან
                            სადაა წარმოებული და ა.შ.
                        </div>
                        <select
                            name=""
                            id=""
                            className="my-10 h-12 px-4 text- border border-custom-blue-900 outline-0"
                        >
                            <option className="py-2 text-sm lowercase" value="">
                                შეარჩიე ზომა
                            </option>
                            <option className="py-2 text-sm lowercase" value="">
                                ეაეშ ზრჩიომა
                            </option>
                            <option className="py-2 text-sm lowercase" value="">
                                რჩიე ზომა
                            </option>
                            <option className="py-2 text-sm lowercase" value="">
                                ჩიე ზოშეარმაშეა
                            </option>
                        </select>
                        <div>შესაკვეთად დაგვიკავშირდით</div>
                        <a href={`tel:${contactInfo.tel}`}>
                            <FaPhone className="inline-block mr-2" />
                            {contactInfo.tel}
                        </a>
                        <div className="mt-12 mb-4">მსგავსი პროდუქტი</div>
                        <div className="block">
                            {otherIrons.map((item, index) => {
                                return (
                                    <Link
                                        to={item.link}
                                        key={index}
                                        className="inline-block mr-8 mb-8 relative z-20"
                                    >
                                        <div className="w-24 h-24 bg-white mb-3">
                                            <img
                                                src={item.img}
                                                alt=""
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="lowercase">{item.name}</div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Iron1;
