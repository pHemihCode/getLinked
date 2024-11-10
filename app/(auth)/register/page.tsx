"use client";
import React, { useState } from "react";
import { designer, dol1, dol2, dotted, starP, starW } from "@/CONSTANTS/images";
import Image from "next/image";
import Modal from "@/app/components/Modal";
export default function Register() {

  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenModal(true);
    console.log("hello");
  };

  return (
    <main className="bg-gradient-to-tl from-deep-BG from-40% via-color-3b to-deep-BG flex flex-col lg:flex-row justify-center items-center lg:justify-around py-5 relative">
      <section>
        <legend className="lg:hidden flex text-color-2 text-2xl font-bold py-5">
          Register
        </legend>
        <div className="relative flex flex-row justify-center items-center">
          <Image
            src={designer}
            alt="designer"
            className="w-[200px] lg:w-[500px]"
          />
          <div className="star-images">
            <Image
              src={starP}
              alt="designer"
              className="hidden lg:flex absolute w-3 h-3 lg:w-5 lg:h-5 top-10 left-[18%]"
            />
            <Image
              src={starP}
              alt="designer"
              className="absolute w-3 h-3 lg:w-5 lg:h-5 bottom-14 lg:bottom-24 left-[85%]"
            />
            <Image
              src={starW}
              alt="designer"
              className="absolute w-3 h-3 lg:w-5 lg:h-5 -bottom-20 lg:bottom-5 -left-[30%] lg:left-[20%]  brightness-50"
            />
          </div>
        </div>
      </section>

      <section className="lg:form-BG lg:shadow-2xl lg:shadow-black w-full lg:w-[45%] px-5 rounded-md relative">
        <form
          action=""
          className="rounded-md flex flex-col w-full px-10 lg:px-0"
          onSubmit={handleSubmit}
        >
          <legend className="hidden lg:flex text-color-2 text-3xl font-bold py-4">
            Register
          </legend>
          <legend className="text-white text-sm hidden lg:flex flex-row  gap-1 py-2 relative ">
            <p>Be part of this movement!</p>
            <div className="">
              <Image
                src={dotted}
                alt=""
                className="absolute bottom-3  lg:w-20 lg:h-1"
              />
              <Image
                src={dol1}
                alt=""
                className="absolute bottom-4 left-[33%] lg:w-5 lg:h-5"
              />
              <Image
                src={dol2}
                alt=""
                className="absolute bottom-4 left-[35%] lg:w-5 lg:h-5"
              />
            </div>
          </legend>
          <legend className="text-base lg:text-xl text-white text-center lg:text-start">
            CREATE YOUR ACCOUNT
          </legend>
          <div className="flex flex-col lg:grid grid-cols-2 gap-4 pt-5 lg:pt-3 text-white w-full">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Team’s Name
              </label>
              <input
                type="text"
                placeholder="Enter the name of your group"
                className="text-sm text-white border-2 rounded-sm border-slate-300 bg-transparent py-2 px-3 outline-none placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="text-sm text-white border-2 rounded-sm border-slate-300 bg-transparent py-2 px-3 outline-none placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="text-sm text-white border-2 rounded-sm border-slate-300 bg-transparent py-2 px-3 outline-none placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm">
                Project Topic
              </label>
              <input
                type="text"
                placeholder="What is your group project topic"
                className="text-sm text-white border-2 rounded-sm border-slate-300 bg-transparent py-2 px-3 outline-none placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="options" className="text-sm">
                Category
              </label>
              <select
                id="options"
                name="options"
                className="text-sm text-white border-2 rounded-sm border-slate-300 bg-transparent py-2 px-3 outline-none"
              >
                <option value="option1" className="">
                  Select your category
                </option>
                <option value="option2 text-black">Option 2</option>
                <option value="option3 text-black">Option 3</option>
                <option value="option4 text-black">Option 4</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="options" className="text-sm">
                Group Size
              </label>
              <select
                id="options"
                name="options"
                className="text-sm text-white border-2 rounded-sm border-slate-300 bg-transparent py-2 px-3 outline-none"
              >
                <option value="option1" className="">
                  Select
                </option>
                <option value="option2 text-black">Option 2</option>
                <option value="option3 text-black">Option 3</option>
                <option value="option4 text-black">Option 4</option>
              </select>
            </div>
          </div>
          <div className="">
            <p className="reg-details text-xs py-3 text-center lg:text-start">
              Please review your registration details before submitting
            </p>
          </div>
          <div className="text-white flex flex-row gap-2 text-xs">
            <input type="checkbox" />
            <p>
              I agreed with the event terms and conditions and privacy policy
            </p>
          </div>
          <div className="flex flex-row justify-center text-white text-base">
            <button
              type="submit"
              className="bg-gradient-to-r from-color-1 via-color-2 to-color-3 px-10 py-2 hover:bg-transparent my-3 lg:my-4 rounded-sm w-full"
            >
              Register
            </button>
          </div>
        </form>
        <Image
          src={starW}
          alt="designer"
          className="absolute w-3 h-3 lg:w-5 lg:h-5 top-0 left-[65%] brightness-50  lg:flex"
        />
        <Image
          src={starW}
          alt="designer"
          className="absolute w-3 h-3 lg:w-2 lg:h-2 -bottom-2 right-[5%] "
        />
      </section>
      {openModal && (
        <div className="">
          <Modal setOpenModal={setOpenModal} />
        </div>
      )}
    </main>
  );
}
