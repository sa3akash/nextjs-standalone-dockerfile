"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-1 cursor-pointer pb-10 max-lg:justify-center md:pl-8"
        >
          <Image src="/icons/logo.svg" alt="logo" height={27} width={23} />
          <h1 className="text-24 text-extrabold text-white max-lg:hidden">
            Podcastr
          </h1>
        </Link>

        <div>
        {sidebarLinks.map((item, index) => (
          <Link
            href={item.route}
            className={cn(
              "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start md:pl-8",
              {
                "bg-nav-focus border-r-4 border-orange-1":
                  pathname === item.route ||
                  pathname.startsWith(`${item.route}/`),
              }
            )}
            key={index}
          >
            <Image src={item.imgURL} alt={item.label} height={27} width={23} />
            <span className="">{item.label}</span>
          </Link>
        ))}
        </div>
      </nav>
    </section>
  );
};

export default LeftSidebar;
