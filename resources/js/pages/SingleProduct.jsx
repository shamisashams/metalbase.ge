// import { ReactComponent as TilesIcon } from "/assets/images/icons/svg/tiles.svg";
import React from "react";
import { Link, usePage } from '@inertiajs/inertia-react'
import Layout from "../Layouts/Layout";

import { BiChevronRight } from "react-icons/bi";
import { CgChevronDoubleRight } from "react-icons/cg";
// import tile1 from "../assets/images/products/1.png";
// import tile2 from "../assets/images/products/2.png";
// import tile3 from "../assets/images/products/3.png";
// import tile4 from "../assets/images/products/4.png";
// import tile5 from "../assets/images/products/5.png";
// import { Link } from "react-router-dom";

const SingleProduct = ({ seo, page, product, sameproduct }) => {

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;

    console.log(sameproduct, 'esa');
    const otherItems = [
        {
            img: "/assets/images/products/1.png",
            name: "Arabesco Marfil",
        },
        {
            img: "/assets/images/products/2.png",
            name: "PRE 311",
        },
        {
            img: "/assets/images/products/3.png",
            name: "PRE 310",
        },
        {
            img: "/assets/images/products/4.png",
            name: "Caesar Natural",
        },
        {
            img: "/assets/images/products/5.png",
            name: "Atenea Beige",
        },
        {
            img: "/assets/images/products/5.png",
            name: "Portoro Black",
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="wrapper">
                <div className="block pt-6">
                    <p className="opacity-50 inline-block  lowercase">{__("client.navbar_main", sharedData)}</p>
                    <BiChevronRight className="inline-block mx-1" />
                    <p className="  inline-block lowercase">{__("client.navbar_tiles", sharedData)}</p>
                </div>
                <div className="mt-10 mb-12 text-2xl ">
                    {/* <TilesIcon className="inline-block" /> Arabesco Antic Marfil */}
                    <img className="inline-block" src="/assets/images/icons/svg/tiles.svg" /> {product.title}
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-start mb-12">
                    <div className="lg:w-1/3 lg:h-96 lg:mx-0 lg:mr-10 w-auto mx-auto mb-10 ">
                        <img className="main_img"
                            src={product.latest_image != null
                                ? "/" +
                                product.latest_image.path +
                                "/" +
                                product.latest_image.title
                                : null}

                            alt="" />
                    </div>
                    <div className="max-w-lg">
                        <div className="lowercase tetx-justify mb-10">
                            {product.description}
                        </div>
                        <div>მახასიათებლები</div>
                        <div className="lowercase bg-zinc-100 px-2 mt-2 w-2/3">
                            ბრენდი: {product.brand_id}
                        </div>
                        <div className="lowercase bg-zinc-100 px-2 mt-2 w-2/3">
                            სიგრძე: {product.width}
                        </div>
                        <div className="lowercase bg-zinc-100 px-2 mt-2 w-2/3">
                            სიგანე: {product.height}
                        </div>
                        <div className="lowercase bg-zinc-100 px-2 mt-2 w-2/3">
                            მწარმოებელი: {product.madein}
                        </div>
                    </div>
                </div>
                <div className="mb-5">{__("client.irons_same_products", sharedData)}</div>
                <div className="block pb-20">
                    {sameproduct.map((item, index) => {
                        return (
                            <Link
                                href={route("client.singleproduct.show", item.id)}
                                key={index}
                                className="mr-8 mb-8 w-32 inline-block align-top"
                            >
                                <div className="w-full h-32 mb-3 overflow-hidden">
                                    <img className="main_img"
                                        src={item.latest_image != null
                                            ? "/" +
                                            item.latest_image.path +
                                            "/" +
                                            item.latest_image.title
                                            : null}

                                        alt="" />
                                </div>
                                <div className="text-sm">{item.title}</div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default SingleProduct;
