import React from "react";
import { contactInfo } from "../components/Data";
import { Form } from "../components/Shared";
import { BiChevronRight } from "react-icons/bi";
import { Link, usePage } from '@inertiajs/inertia-react'
// import { ReactComponent as Pin } from "/assets/images/icons/svg/pin.svg";
// import { ReactComponent as Tel } from "/assets/images/icons/svg/tel.svg";
import Layout from "../Layouts/Layout";

const Contact = ({ seo, page, gphone, gemail, gaddress }) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    return (
        <Layout seo={seo}>
            <div className="relative bg-zinc-100">
                <div className="wrapper pb-20">
                    <div className="max-w-sm">
                        <div className="block pt-6">
                            <p className="opacity-50 inline-block  lowercase">{__("client.navbar_main", sharedData)}</p>

                            <BiChevronRight className="inline-block mx-1" />
                            <p className="  inline-block lowercase">{__("client.navbar_contact", sharedData)}</p>
                        </div>
                        <div className="text-lg mb-5 sm:mt-20 mt-10">
                            {__("client.contact_contact_info", sharedData)}

                        </div>
                        <a href={`tel:${contactInfo.tel}`} className="flex items-center mt-6">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-2 bg-custom-blue-900/[0.1]">
                                {/* <Tel fill="custom-blue-900" /> */}
                                <img className="bg-custom-blue-900" src="/assets/images/icons/svg/pin.svg" />
                            </div>
                            <div>
                                <div className="lowercase">{__("client.contact_address", sharedData)}</div>
                                <div className="opacity-50"> {gaddress.value}</div>
                            </div>
                        </a>
                        <a href="#" className="flex items-center mt-3">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-2 bg-custom-blue-900/[0.1]">
                                {/* <Pin fill="custom-blue-900" /> */}
                                <img className="bg-custom-blue-900" src="/assets/images/icons/svg/pin.svg" />
                            </div>
                            <div>
                                <div className="lowercase">{__("client.contact_phone", sharedData)}</div>
                                <div className="opacity-50"> {gphone.value}</div>
                            </div>
                        </a>
                        <div className="text-lg mb-5 mt-10">
                            {__("client.contact_any_questions?", sharedData)}
                        </div>
                        <Form />
                    </div>
                </div>
                <div className="md:absolute md:top-0 right-0 xl:w-2/3 md:w-1/2 w-full md:h-full h-60 overflow-hidden grayscale">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23818.085694040023!2d44.762141699999994!3d41.736469150000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1658138557741!5m2!1sen!2sge"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
