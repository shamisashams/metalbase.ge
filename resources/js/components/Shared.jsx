import { BiChevronRight } from "react-icons/bi";
// import { Link } from "react-router-dom";
import React from "react";
import { Link, usePage } from '@inertiajs/inertia-react'

export const ProductBox = (props) => {

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    return (
        <div className={`p-4 transition hover:bg-zinc-50 relative max-w-sm`}>
            <div className="text-xl whitespace-nowrap mb-2">{props.name}</div>
            <div className="opacity-50 lowercase">ზომა: {props.size}</div>
            <div className="w-full h-60 my-5">
                <img
                    src={props.img}
                    alt="Product Image"
                    className=" mx-auto sm:mx-0 h-full object-contain "
                />
            </div>
            <Link to={props.link} className="lowercase ">
                {__("client.home_btn", sharedData)} <BiChevronRight className="inline-block" />
            </Link>
        </div>
    );
};

export const Form = ({ dark }) => {
    const classList = `block bg-transparent border  mb-2 w-full h-10 pl-5 lowercase  outline-0 border-${dark ? "white/[0.1]" : "custom-blue-900"
        } placeholder:text-${dark ? "white " : "custom-blue-900 "}`;
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    return (
        <form className="w-full">
            <input type="text" placeholder={__("client_form.fullname", sharedData)} className={classList} />
            <input type="text" placeholder={__("client_form.phone", sharedData)} className={classList} />
            <input type="text" placeholder={__("client_form.mail", sharedData)} className={classList} />
            <textarea
                placeholder={__("client_form.massage", sharedData)}
                className={classList + " !mb-6 h-24 pt-2"}
            ></textarea>
            <button
                className={`bg-custom-blue-900 text-white w-full h-12 border-white/[0.1] ${dark && "border"
                    } `}
            >
                {__("client.sendmail.btn", sharedData)}
            </button>
        </form>
    );
};
