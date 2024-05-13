"use client";

import { Button } from "@nextui-org/react";
import { Redressed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Container from "../Container";

const redressed = Redressed({ subsets: ["latin"], weight: "400" });

const NavBar = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState("");
  const handleItemClick = (link: string) => {
    setSelectedItem(link);
    router.push(link);
  };
  return (
    <div className="sticky top-0 w-full bg-black/90 z-30 shadow-sm text-white">
      <div className="py-3 border-b-[1px] border-slate-700">
        <Container>
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <Link href="/" className="flex items-center gap-1 cursor-pointer">
              <Image
                src="/image/icon.png"
                alt="logo"
                width="30"
                height="30"
                className="rounded-full"
              />
              <div className={`${redressed.className} font-bold text-2xl `}>
                Trip Mongolia
              </div>
            </Link>
            <div>Search</div>
            <div className="flex items-center gap-8 md:gap-12 uppercase text-sm font-semibold">
              <div
                onClick={() => handleItemClick("/trips")}
                className="cursor-pointer"
              >
                trips
              </div>
              <div
                onClick={() => handleItemClick("/about-mongolia")}
                className="cursor-pointer"
              >
                About Mongolia
              </div>
              <div
                onClick={() => handleItemClick("/blog")}
                className="cursor-pointer"
              >
                BLOG
              </div>
              <div
                onClick={() => handleItemClick("/about-us")}
                className="cursor-pointer"
              >
                ABOUT US
              </div>
              <Button color="default" variant="flat" className="">
                Login
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
