// import Icon1 from "/assets/images/icons/svg/tiles.svg";
// import Icon2 from "/assets/images/icons/svg/tiles2.svg";
// import Icon3 from "/assets/images/icons/svg/laminate.svg";
// import Icon4 from "/assets/images/icons/svg/door.svg";
// import Icon5 from "/assets/images/icons/svg/bathroom.svg";
import React from "react";
export const navigations = [
    {
        link: route("client.home.index"),
        text: "მთავარი",
    },
    {
        link: route("client.aboutus"),
        text: "ჩვენ შესახებ",
    },
    {
        link: route("client.partners.index"),
        text: "პარტნიორები",
    },
    {
        link: route("client.contact.index"),
        text: "კონტაქტი",
    },
];

export const categories = [
    {
        link: route("client.tiles.index"),
        text: "ფილები",
        icon: <img style={{ backgroundColor: "#fff", }} src="/assets/images/icons/svg/tiles.svg" />,
    },
    {
        link: route("client.tiles2.index"),
        text: "კაფელ მეტლახი",
        icon: <img style={{ backgroundColor: "#fff", }} src="/assets/images/icons/svg/tiles2.svg" />,
    },
    {
        link: route("client.tiles2.index"),
        text: "ლამინატი",
        icon: <img style={{ backgroundColor: "#fff", }} src="/assets/images/icons/svg/laminate.svg" />,
    },
    {
        link: route("client.doors.index"),
        text: "კარები",
        icon: <img style={{ backgroundColor: "#fff", }} src="/assets/images/icons/svg/door.svg" />,
    },
    {
        link: route("client.bathroom.index"),
        text: "აბაზანის ავეჯი",
        icon: <img style={{ backgroundColor: "#fff", }} src="/assets/images/icons/svg/bathroom.svg" />,
    },
];

export const categoryDropdown = [
    {
        link: "/iron/1",
        text: " პროფილი - მილკვადრატი",
    },
    {
        link: "/iron/2",
        text: "მილი",
    },
    {
        link: "/iron/3",
        text: "ლითონის ფურცელი",
    },
    {
        link: "/iron/4",
        text: "ლითონის ფურცელი დაჟატული",
    },
    {
        link: "/iron/5",
        text: "ლითონის ფურცელი დახვრეტილი",
    },
    {
        link: "/iron/6",
        text: "ორტესებრი",
    },
    {
        link: "/iron/7",
        text: "შველერი",
    },
    {
        link: "/iron/8",
        text: "კუთხოვანა",
    },
    {
        link: "/iron/9",
        text: "ზოლოვანა",
    },
    {
        link: "/iron/10",
        text: "კვადრატი",
    },
    {
        link: "/iron/11",
        text: "გლინულა",
    },
    {
        link: "/iron/12",
        text: "არმატურა",
    },
];
