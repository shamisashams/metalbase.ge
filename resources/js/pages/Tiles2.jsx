import React from "react";
import { Link, usePage } from '@inertiajs/inertia-react'

// import { ReactComponent as TilesIcon2 } from "/assets/images/icons/svg/tiles2.svg";
import { tileSlider } from "../components/Data";
import { ProductBox } from "../components/Shared";
import { BiChevronRight } from "react-icons/bi";
import Layout from "../Layouts/Layout";

const Tiles2 = ({ seo, page, product, product1 }) => {

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;


    let links = function (links) {
        let rows = [];
        //links.shift();
        //links.splice(-1);
        {
            links.map(function (item, index) {
                if (index > 0 && index < links.length - 1) {
                    rows.push(
                        <Link
                            href={item.url}
                            className={item.active ? "pageNum active" : "pageNum"}
                        >
                            {item.label}
                        </Link>
                    );
                }
            });
        }
        return <div className="nums"> {rows.length > 1 ? rows : null} </div>;
    };

    let linksPrev = function (links) {
        let rowCount = 0;
        links.map(function (item, index) {
            if (index > 0 && index < links.length - 1) {
                rowCount++;
            }
        });
        return rowCount > 1 ? (
            <Link href={links[0].url}>
                {/* <Arrow color="#2F3E51" rotate="90" /> */}
                <button className="arrow" style={{ transform: "rotate(-90deg)" }}>
                </button>
                {/* <Arrow color="#2F3E51" rotate="90" /> */}

            </Link>
        ) : null;
    };
    let linksNext = function (links) {
        let rowCount = 0;
        links.map(function (item, index) {
            if (index > 0 && index < links.length - 1) {
                rowCount++;
            }
        });
        return rowCount > 1 ? (
            <Link href={links[links.length - 1].url}>
                {/* <Arrow color="#2F3E51" rotate="-90" /> */}
                {/* <Arrow color="#2F3E51" rotate="-90" /> */}
                <button className="arrow" style={{ transform: "rotate(90deg)" }}>
                </button>
            </Link>
        ) : null;
    };



    return (
        <Layout seo={seo}>
            <div className="bg-neutral-100">
                <div className="wrapper">
                    <div className="block pt-6">
                        <p className="opacity-50 inline-block  lowercase">{__("client.navbar_main", sharedData)}</p>
                        <BiChevronRight className="inline-block mx-1" />
                        <p className="  inline-block lowercase">{__("client.navbar_tiles2", sharedData)}</p>
                    </div>
                    <div className="mt-10 mb-12 text-2xl ">
                        {/* <TilesIcon2 className="inline-block" /> კაფელი */}
                        <img className="inline-block" src="/assets/images/icons/svg/tiles2.svg" /> {__("client.navbar_kafeli", sharedData)}
                    </div>
                    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 pb-20">
                        {product.data.map((item, index) => {
                            return (
                                // <ProductBox
                                //     key={index}
                                //     name={item.title}
                                //     size={item.height + ' x ' + item.width}
                                //     img={
                                //         item.latest_image != null
                                //             ? "/" +
                                //             item.latest_image.path +
                                //             "/" +
                                //             item.latest_image.title
                                //             : null
                                //     }
                                //     link={item.link}
                                // />
                                <div className={`p-4 transition hover:bg-zinc-50 relative max-w-sm`} key={index}>
                                    <div className="text-xl whitespace-nowrap mb-2">{item.title}</div>
                                    <div className="opacity-50 lowercase">ზომა: {item.height + ' x ' + item.width}</div>
                                    <div className="w-full h-60 my-5">
                                        <img src={item.latest_image != null
                                            ? "/" +
                                            item.latest_image.path +
                                            "/" +
                                            item.latest_image.title
                                            : null} alt="" />
                                    </div>
                                    <Link href={route("client.singleproduct.show", item.id)} className="lowercase ">
                                        {__("client.product_btn", sharedData)} <BiChevronRight className="inline-block" />
                                    </Link>
                                </div>


                            );
                        })}
                    </div>
                    {/* <div className="pb-20 flex items-center justify-center">
                        <button className="mx-1 opacity-100">1</button>
                        <button className="mx-1 opacity-50">2</button>
                        <button className="mx-1 opacity-50">3</button>
                        <button className="mx-1 opacity-50">4</button>
                    </div> */}

                    {/* pagination */}

                    <div className="pb-20 flex items-center justify-center pagination flex centered">
                        {linksPrev(product.links)}
                        <button className="pageNum">{links(product.links)}</button>
                        {linksNext(product.links)}
                    </div>



                    <div className="mt-10 mb-12 text-2xl ">
                        <img className="inline-block" src="/assets/images/icons/svg/tiles2.svg" /> {__("client.navbar_metlaxi", sharedData)}
                    </div>
                    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 pb-20">
                        {product1.data.map((item, index) => {
                            return (
                                // <ProductBox
                                //     key={index}
                                //     name={item.title}
                                //     size={item.height + ' x ' + item.width}
                                //     img={
                                //         item.latest_image != null
                                //             ? "/" +
                                //             item.latest_image.path +
                                //             "/" +
                                //             item.latest_image.title
                                //             : null
                                //     }
                                //     link={item.link}
                                // />
                                <div className={`p-4 transition hover:bg-zinc-50 relative max-w-sm`} key={index}>
                                    <div className="text-xl whitespace-nowrap mb-2">{item.title}</div>
                                    <div className="opacity-50 lowercase">ზომა: {item.height + ' x ' + item.width}</div>
                                    <div className="w-full h-60 my-5">
                                        <img src={item.latest_image != null
                                            ? "/" +
                                            item.latest_image.path +
                                            "/" +
                                            item.latest_image.title
                                            : null} alt="" />
                                    </div>
                                    <Link href={route("client.singleproduct.show", item.id)} className="lowercase ">
                                        {__("client.product_btn", sharedData)} <BiChevronRight className="inline-block" />
                                    </Link>
                                </div>


                            );
                        })}
                    </div>
                    {/* <div className="pb-20 flex items-center justify-center">
                        <button className="mx-1 opacity-100">1</button>
                        <button className="mx-1 opacity-50">2</button>
                        <button className="mx-1 opacity-50">3</button>
                        <button className="mx-1 opacity-50">4</button>
                    </div> */}

                    {/* pagination */}

                    <div className="pb-20 flex items-center justify-center pagination flex centered">
                        {linksPrev(product1.links)}
                        <button className="pageNum">{links(product.links)}</button>
                        {linksNext(product1.links)}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Tiles2;
