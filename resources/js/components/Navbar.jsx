import React, { useState } from "react";
import { Link, usePage } from '@inertiajs/inertia-react'
// import Logo from "../assets/images/logo.png";
import { FaPhone } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { RiMenuAddFill } from "react-icons/ri";
// import Ge from "../assets/images/icons/ge.png";
// import En from "../assets/images/icons/en.png";
import { categoryDropdown } from "./NavData";
import { useForm } from '@inertiajs/inertia-react'
import { contactInfo } from "./Data";
import { Inertia } from '@inertiajs/inertia'

const Navbar = ({ seo, page }) => {
    const [values, setValues] = useState({
        query: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.get(route("client.search.index"), values)
    }

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;

    const navigations = [
        {
            link: route("client.home.index"),
            text: __("client.navbar_main", sharedData),
        },
        {
            link: route("client.aboutus"),
            text: __("client.navbar_aboutus", sharedData),
        },
        {
            link: route("client.partners.index"),
            text: __("client.navbar_partners", sharedData),
        },
        {
            link: route("client.contact.index"),
            text: __("client.navbar_contact", sharedData),
        },
    ];

    const categories = [
        {
            link: route("client.tiles.index"),
            text: __("client.navbar_tiles", sharedData),
            icon: <img style={{ backgroundColor: "#fff", }} src="/assets/images/icons/svg/tiles.svg" />,
        },
        {
            link: route("client.tiles2.index"),
            text: __("client.navbar_tiles2", sharedData),
            icon: <img style={{ backgroundColor: "#fff", }} src="/assets/images/icons/svg/tiles2.svg" />,
        },
        {
            link: route("client.tiles3.index"),
            text: __("client.navbar_laminate", sharedData),
            icon: <img style={{ backgroundColor: "#fff", }} src="//assets/images/icons/svg/laminate.svg" />,
        },
        {
            link: route("client.doors.index"),
            text: __("client.navbar_doors", sharedData),
            icon: <img style={{ backgroundColor: "#fff", }} src="/assets/images/icons/svg/door.svg" />,
        },
        {
            link: route("client.bathroom.index"),
            text: __("client.navbar_bathroom", sharedData),
            icon: <img style={{ backgroundColor: "#fff", }} src="/assets/images/icons/svg/bathroom.svg" />,
        },
    ];
    const langarr = {
        "ge": 'ქართული',
        "en": 'english'
    }

    const langFlags = {
        "ქართული": "/assets/images/icons/ge.png",
        "English": "/assets/images/icons/en.png",
        "ge": "/assets/images/icons/ge.png",
        "en": "/assets/images/icons/en.png",
    }
    const [showMenu, setShowMenu] = useState(false);
    const { errors, gphone, gemail, gaddress, locales, currentLocale, locale_urls } = usePage().props;

    const categoryDropdown = [
        {
            link: route("client.metalprofiles.index"),
            text: __("client.footer_profile_miles", sharedData),
        },
        {
            link: route("client.mile.index"),
            text: __("client.footer_miles", sharedData),
        },
        {
            link: route("client.metalpaper.index"),
            text: __("client.footer_metal_paper", sharedData),
        },
        {
            link: route("client.metalpaper.index1"),
            text: __("client.footer_metal_paper1", sharedData),
        },
        {
            link: route("client.metalpaper.index2"),
            text: __("client.footer_metal_paper2", sharedData),
        },
        {
            link: route("client.ortisebri.index"),
            text: __("client.footer_ortesebri", sharedData),
        },
        {
            link: route("client.shveleri.index"),
            text: __("client.footer_shveleri", sharedData),
        },
        {
            link: route("client.kutxovana.index"),
            text: __("client.footer_kutxovana", sharedData),
        },
        {
            link: route("client.zolovana.index"),
            text: __("client.footer_zolovana", sharedData),
        },
        {
            link: route("client.kvadrati.index"),
            text: __("client.footer_kvadrati", sharedData),
        },
        {
            link: route("client.granula.index"),
            text: __("client.footer_granula", sharedData),
        },
        {
            link: route("client.armatura.index"),
            text: __("client.footer_armatura", sharedData),
        },
    ];
    return (
        <div className="text-sm relative z-50 h-12 bg-custom-blue-900 lg:h-auto flex items-center justify-between">
            <Link href="/" className="lg:hidden pl-3">
                <img src="/assets/images/logo.png" alt="" className="w-52 py-1" />
            </Link>
            <button
                className="text-white lg:hidden px-3"
                onClick={() => setShowMenu(true)}
            >
                <RiMenuAddFill className="w-6 h-6" />
            </button>
            <div
                className={`fixed left-0 top-0 w-full h-screen flex flex-col justify-center items-center  lg:relative lg:h-auto bg-white lg:block transition duration-500 lg:!translate-y-0 lg:!opacity-100 ${showMenu ? "translate-y-0" : "-translate-y-full"
                    }  `}
            >
                <button
                    className="absolute top-14 right-3 lg:hidden"
                    onClick={() => setShowMenu(false)}
                >
                    <IoCloseOutline className="w-6 h-6" />
                </button>
                <div className="lg:bg-custom-blue-900   lg:text-white  ">
                    <div className="wrapper flex items-center justify-between">
                        <div className="flex items-center whitespace-nowrap lg:mb-0 mb-5 -ml-6 lg:ml-0">
                            <Link href={route("client.home.index")} className="hidden lg:inline-block">
                                <img src="/assets/images/logo.png" alt="" className="w-80  h-auto py-1" />
                            </Link>
                            <div>
                                {navigations.map((nav, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={nav.link}
                                            className=" lg:ml-8 ml-3 text-xs lg:text-sm inline-block"
                                        >
                                            {nav.text}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <a
                                href={`tel:${gphone.value}`}
                                className="lg:relative lg:bottom-auto lg:left-auto mr-6 absolute bottom-3 left-3 "
                            >
                                <FaPhone className="inline-block mr-2" />
                                {gphone.value}
                            </a>

                            {/* languages */}



                            <div className="lg:relative lg:top-auto lg:left-auto inline-block absolute top-14 left-3 group">
                                <div className="w-6 h-6 overflow-hidden">
                                    {/* {langarr[currentLocale]} */}
                                    {/* <img src="/assets/images/icons/ge.png" alt="" /> */}
                                    <img src={langFlags[currentLocale]} alt="" />
                                </div>

                                <div className="absolute right-0 top-full w-full pt-2 lg:hidden group-hover:block">

                                    {
                                        Object.keys(locales).map((e, i) => {
                                            return (
                                                <Link key={i} href={locale_urls[e]}> <img src={langFlags[e]} alt="" /></Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white box-border">
                    <div className="wrapper flex justify-between items-center ">
                        <div>
                            <div className="lg:inline-block block text-center px-4 lg:py-5 py-3 whitespace-nowrap  hover:bg-custom-blue-500/[.1] box-border group cursor-pointer relative ">
                                {__("client.navbar_irons", sharedData)}
                                <BiChevronDown className="inline-block -mt-1 transition group-hover:rotate-180" />
                                <div className="absolute lg:left-0 left-1/2 -translate-x-1/2 lg:translate-x-0 top-full bg-white py-5 px-3 z-40 transition opacity-0 invisible translate-y-5 group-hover:!visible group-hover:!opacity-100 group-hover:translate-y-0  lg:border-transparent border-custom-blue-500/[.1] border">
                                    {categoryDropdown.map((item, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={item.link}
                                                className=" lowercase whitespace-nowrap block py-1 px-3 w-full bg-zinc-100 hover:bg-zinc-200 mb-1"
                                            >
                                                {item.text}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                            {categories.map((item, index) => {
                                return (
                                    <Link key={index} href={item.link}>
                                        <div className="lg:inline-block block text-center px-4 lg:py-5 py-3 whitespace-nowrap  hover:bg-custom-blue-500/[.1]">
                                            {item.text}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        <form onSubmit={handleSubmit} className="lg:relative lg:top-auto lg:right-auto flex items-center justify-between bg-custom-blue-900/[.1] h-12 px-5 lg:w-72 absolute top-0 right-0 w-full">
                            <input
                                id="query"
                                value={values.query}
                                onChange={handleChange}
                                type="text"
                                name='query'
                                className="h-full w-full outline-0  bg-transparent  text-sm placeholder:text-custom-blue-900"
                                placeholder={__("client.navbar_search", sharedData)}
                            />
                            {/* <FiSearch className=" shrink-0 w-6 h-6" /> */}
                            <button type="submit"><FiSearch className=" shrink-0 w-6 h-6" /></button>
                        </form>




                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
