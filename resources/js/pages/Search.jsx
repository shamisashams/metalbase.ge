import React from "react";
import { Link, usePage } from '@inertiajs/inertia-react'
// import { ReactComponent as TilesIcon } from "/assets/images/icons/svg/tiles.svg";
// import { tileSlider } from "../components/Data";
import { ProductBox } from "../components/Shared";
import { BiChevronRight } from "react-icons/bi";
import Layout from "../Layouts/Layout";

const Tiles = ({ seo, page, product, name, search }) => {
    console.log(search, 'esaa');

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
                    <ArrowDown color="#1DBFCC" />
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
                    <ArrowDown color="#1DBFCC" />
                </button>
            </Link>
        ) : null;
    };

    return (
        <Layout seo={seo}>
            <div className="bg-neutral-100">
                <div className="wrapper">
                    {/* <div className="block pt-6">
                        <p className="opacity-50 inline-block  lowercase">მთავარი</p>
                        <BiChevronRight className="inline-block mx-1" />
                        <p className="  inline-block lowercase">ფილები</p>
                    </div> */}

                    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 pb-20">
                        {search.map((item, index) => {
                            return (
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
                                        ნახე სრულად <BiChevronRight className="inline-block" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>


                    <div className="pb-20 flex items-center justify-center pagination flex centered">
                        {linksPrev(product.links)}
                        <button className="pageNum">{links(product.links)}</button>
                        {linksNext(product.links)}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Tiles;
