"use client";

import React, { useEffect, useState } from 'react'
import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Drawer from './drawer';
import { UserButton } from '@clerk/nextjs';

const menuItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
]

function AppHeader() {
  const [addBorder, setAddBorder] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={
        "relative flex justify-center items-center sticky top-0 z-50 py-4 bg-background/60 backdrop-blur px-2 sm:px-4"
      }
    >
      <div className="flex justify-between items-center container">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2 px-0 "
        >
          <Icons.logo className="w-auto h-[40px]" />
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-center ">
            <nav>
              {menuItems.map((item) => (
                <Link key={item.id} href={item.href} className="mr-12 font-medium text-gray-500 hover:text-gray-900">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="gap-2 flex items-center justify-center">
              <UserButton />
            </div>
          </div>
        </div>

        <div className="mt-2 cursor-pointer block lg:hidden">
          <Drawer />
        </div>
      </div>
      <hr
        className={cn(
          "absolute w-full bottom-0 transition-opacity duration-300 ease-in-out",
          addBorder ? "opacity-100" : "opacity-0"
        )}
      />
    </header>
  );

}

export default AppHeader

