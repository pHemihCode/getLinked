"use client";
import Image from "next/image";
import React from "react";
import { success, man, starP, starW, emoji } from "@/CONSTANTS/images";
import Link from "next/link";

export default function Modal({ setOpenModal }: any) {
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="overlay px-3 lg:px-0 flex lg:flex-col lg:justify-center items-center">
      <section className="border-[2px] border-purple-900 flex flex-col justify-center rounded-md items-center w-full lg:mx-0 lg:w-[30%] p-4 relative">
        <div className="relative flex flex-row justify-center mr-[50px] items-center h-[30vh]">
          <div className="relative flex flex-row justify-center items-center w-1/2 h-full">
            <Image src={success} alt="success" className="w-[80%]" />
            <Image
              src={man}
              alt="man"
              className="absolute object-contain h-full -right-10"
            />
          </div>
        </div>
        <div className="texts text-center">
          <h1 className="text-xl py-3">
            Congratulations <br /> You have successfully Registered!
          </h1>
         <div>
         <p className="text-sm">
            Yes, it was easy and you did it! <br /> Check your mail box for next
            step<Image
              src={emoji}
              alt="emoji"
              className="w-3 h-3 inline"
            />
          </p>
         </div>
        </div>
        <Link
          href={"/"}
          className="flex flex-row justify-center text-white text-base w-full"
        >
          <button
            type="submit"
            onClick={handleCloseModal}
            className="bg-gradient-to-r from-color-1 via-color-2 to-color-3 px-10 py-2 my-3 lg:my-4 rounded-sm w-full cursor-pointer"
          >
            Back
          </button>
        </Link>
        <Image
          src={starP}
          alt="man"
          className="absolute w-3 h-3 lg:w-5 lg:h-5 -top-5 lg:-top-3 right-0 lg:-right-6"
        />
        <Image
          src={starW}
          alt="man"
          className="absolute w-3 h-3 lg:w-5 lg:h-5 top-36 left-16 opacity-50"
        />
        <Image
          src={starP}
          alt="man"
          className="absolute w-3 h-3 lg:w-5 lg:h-5 bottom-2 right-3"
        />
      </section>
    </div>
  );
}
