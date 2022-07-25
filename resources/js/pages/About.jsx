import React from "react";
import { BiChevronRight } from "react-icons/bi";
// import Showcase from "../assets/images/home/slider/2.png";
import Layout from "../Layouts/Layout";
import { Link, usePage } from '@inertiajs/inertia-react'

const About = ({ seo, page, images }) => {

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;

    return (
        <Layout seo={seo}>
            <div className="wrapper">
                <div className="block pt-6">
                    <p className="opacity-50 inline-block  lowercase">{__("client.navbar_main", sharedData)}</p>
                    <BiChevronRight className="inline-block mx-1" />
                    <p className="  inline-block lowercase">{__("client.navbar_aboutus", sharedData)}</p>
                </div>
                <div className="sm:h-80 h-40 w-full my-8 bg-gradient-to-b from-custom-blue-900/[0.5] to-transparent">
                    <img
                        src={images[0]}
                        alt=""
                        className="w-full h-full object-cover relative -z-10"
                    />
                </div>
                <div className="lowercase mb-5">{__("client.aboutus_title", sharedData)}</div>
                <div className="lg:text-5xl  text-xl">

                    {renderHTML(__('client.aboutus_header', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                    {/* რაიმე სლოგანი კომპანიის <br /> საქმიანობის შესახებ */}
                </div>
                <p className="md:columns-2 gap-16 text-justify md:mt-10 mt-5 mb-20 lowercase text-sm md:text-base">
                    {renderHTML(__('client.aboutus_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                </p>
            </div>
        </Layout>
    );
};

export default About;
