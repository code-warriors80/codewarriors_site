"use client"

import "@fontsource/sora";
import { useState } from "react";
import Link from "next/link";

const navitem = [
  {
    item: "Enterprise",
    sub_items: [
      { text: "Home V2", path: "/home-v2" },
      { text: "About us", path: "/about-us" },
      { text: "Team", path: "/team" },
      { text: "Team Member", path: "/team-member" },
      { text: "Careers", path: "/careers" },
      { text: "Prices", path: "/prices" },
      { text: "FAQ", path: "/faq" },
      { text: "Event", path: "/event" },
    ],
  },
  {
    item: "Case Studies",
    sub_items: [],
  },
  {
    item: "Services",
    sub_items: [
      { text: "Service 1", path: "/service-1" },
      { text: "Service 2", path: "/service-2" },
      { text: "Service 3", path: "/service-3" },
      { text: "Service 4", path: "/service-4" },
    ],
  },
  {
    item: "Solutions",
    sub_items: [
      { text: "Solution 1", path: "/solution-1" },
      { text: "Solution 2", path: "/solution-2" },
      { text: "Solution 3", path: "/solution-3" },
    ],
  },
  {
    item: "Blog",
  },
  {
    item: "Contact Us",
  },
  {
    item: "Other",
    sub_items: [
      { text: "Coming Soon", path: "/coming-soon" },
      { text: "404", path: "/404" },
    ],
  },
];

const Header = ({ transparent = false }) => {
  const [isOpen,setOpen] = useState(false)
  return (
    <nav
      className={`${
        transparent ? "bg-transparent" : "bg-white"
      } fixed top-0 left-0 right-0 flex justify-between items-center px-4 lg:px-24`}
      style={{ fontFamily: "Sora", boxShadow: transparent?"none": "0 0 40px 0 rgba(18,24,32,.1)" }}
    >
      <h1 className="text-lg font-medium  py-10">Code Warriors</h1>

      
      <div className="hidden lg:flex items-center gap-x-12">
        {navitem.map((item, idx) => (
          <div key={item?.item} className="group py-10">
            <Link href="" className={`flex items-start gap-x-1 text-sm`}>
              {item?.item}
              {item?.sub_items?.length > 0 && (
                <div className="p-[2px] rounded-full border-2 border-[#F57C00]" />
              )}
            </Link>
            {item?.sub_items?.length > 0 && (
              <div
                className={`hidden group-hover:block absolute -ml-14 top-[105px] w-[180px] px-8 py-6 bg-white`}
                style={{ boxShadow: "0 0 40px 0 rgba(18,24,32,.1)" }}
              >
                {item?.sub_items.map((i) => (
                  <Link key={i.text} href={i.path} className="mb-4 block">
                    {i.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <button>
          <i className="bx bx-search text-2xl" />
        </button>
      </div>

      <div className="lg:hidden flex items-center">
        <i className={`bx bx-${isOpen?"x":"menu"} text-3xl`} onClick={ ()=> setOpen(prev=>!prev)} />

      {isOpen &&  <div className="bg-white overflow-hidden transition duration-700 flex flex-col items-center gap-y-5 absolute border top-[100px] left-0 right-0 py-8"
        
        >
            {navitem.map((item, idx) => (
          <div key={item?.item} className="group flex flex-col items-center  w-full">
            <Link href="" className={`flex items-start gap-x-1 text-sm`}>
              {item?.item}
              {item?.sub_items?.length > 0 && (
                <div className="p-[2px] rounded-full border-2 border-[#F57C00]" />
              )}
            </Link>
            {item?.sub_items?.length > 0 && (
              <div
                className={`hidden group-hover:block transition duration-700 border-y border-[#e5e5e5] px-8 py-6 mt-4 w-full bg-[#121820] bg-opacity-20`}
              >
                {item?.sub_items.map((i) => (
                  <Link key={i.text} href={i.path} className="text-black flex flex-col items-center mb-4 w-full">
                    {i.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        </div>}
        </div>
    </nav>
  );
};

export default Header;
