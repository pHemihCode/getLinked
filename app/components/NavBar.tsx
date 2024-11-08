"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cross, circle, hambuger } from "@/CONSTANTS/images";
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen]);

  return (
    <main className="bg-deep-BG relative">
      <section className="flex flex-row justify-around items-center py-5 ">
        <div>
          <h1 className="font-bold text-xl lg:text-3xl text-white">
            get<b className="text-color-2">linked</b>
          </h1>
        </div>

        {/* For desktop screen */}
        <div>
          <Image
            src={hambuger}
            alt="hamburger"
            className="flex lg:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
          <nav className="hidden text-white text-base z-30 bg-deep-BG overflow-y-auto lg:text-base lg:flex h-auto flex-row items-center gap-10">
            <div
              className="lg:hidden w-full"
              onClick={() => setIsNavOpen(false)}
            >
              <Image
                src={circle}
                alt="hamburger"
                className="flex lg:hidden relative w-7 h-7 top-5 left-[86%]"
              />
              <Image
                src={cross}
                alt="hamburger"
                className="flex lg:hidden absolute top-7 left-[84.5%]  "
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <Link href={"/"}>Timeline</Link>
              <Link href="#">Overview</Link>
              <Link href="#">FAQs</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
            <Link href={"/register"}>
              <button className=" hover:bg-transparent bg-gradient-to-r from-color-1 via-color-2  to-color-3 px-10 py-2 rounded-sm registerBtn">
                Register
              </button>
            </Link>
          </nav>
        </div>

        {/* For mobile screen */}
        {isNavOpen && (
          <nav className="lg:hidden text-white text-base overflow-y-hidden absolute top-0 z-30 bg-deep-BG h-[50vh] w-full px-5  flex flex-col gap-5">
            <div
              className="lg:hidden w-full"
              onClick={() => setIsNavOpen(false)}
            >
              <Image
                src={circle}
                alt="hamburger"
                className="flex relative w-7 h-7 top-5 left-[86%]"
              />
              <Image
                src={cross}
                alt="hamburger"
                className="flex lg:hidden absolute top-7 left-[84.5%]  "
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <Link href="#">Timeline</Link>
              <Link href="#">Overview</Link>
              <Link href="#">FAQs</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
            <Link href={"/register"}>
              <button className="bg-gradient-to-r from-color-1 via-color-2  to-color-3 px-10 py-2 rounded-sm">
                Register
              </button>
            </Link>
          </nav>
        )}
      </section>
      <hr className="opacity-30" />
    </main>
  );
}
