"use client";

import { Mochiy_Pop_One } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { FaBookOpen, FaHome } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import {
  Menu,
  MenuItem,
  Sidebar as ReactProSideBar,
  sidebarClasses,
} from "react-pro-sidebar";

const mochiy = Mochiy_Pop_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});
const Sidebar = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState("/admin/dashboard");
  const menuItems = [
    { label: "Dashboard", icon: <FaHome />, link: "/admin/dashboard" },
    {
      label: "Trips",
      icon: <BiSolidCategory />,
      link: "/admin/trips",
    },
    { label: "Bookings", icon: <FaBookOpen />, link: "/admin/bookings" },
  ];

  const handleItemClick = (link: string) => {
    setSelectedItem(link);
    router.push(link);
  };

  return (
    <div className="min-h-[100vh] overflow-hidden">
      <ReactProSideBar
        className="h-full overflow-hidden"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#ffffff",
            "&:hover": {
              backgroundColor: "#ffffff",
            },
          },
        }}
      >
        <Menu
          className="h-[100vh] max-h-[100vh] text-black overflow-hidden"
          menuItemStyles={{
            button: ({ level, active }) => {
              return {
                backgroundColor: active ? "#0E1428" : "#ffffff",
                color: active ? "#ffffff" : "#0E1428",
                "&:hover": {
                  backgroundColor: active ? "#0E1428" : "#0E1428",
                  color: active ? "#ffffff" : "#ffffff",
                },
              };
            },
          }}
        >
          <div className="flex items-center justify-center my-10 flex-col">
            <Image
              src="/image/icon.png"
              alt="logo"
              height={150}
              width={150}
              className="cursor-pointer"
              onClick={() => router.push("/admin/dashboard")}
            />
            <span className="text-2xl uppercase font-medium italic">
              <span className={mochiy.className}>Travel</span>
            </span>
          </div>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <MenuItem
                icon={item.icon}
                active={selectedItem === item.link}
                onClick={() => handleItemClick(item.link)}
              >
                {item.label}
              </MenuItem>
            </React.Fragment>
          ))}
          <MenuItem
            icon={<LuLogOut />}
            active={selectedItem === "/admin/logout"}
            onClick={() => handleItemClick("/admin/logout")}
          >
            Logout
          </MenuItem>
        </Menu>
      </ReactProSideBar>
    </div>
  );
};

export default Sidebar;
