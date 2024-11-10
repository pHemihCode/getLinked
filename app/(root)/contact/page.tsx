"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  insta,
  facebook,
  linkedin,
  twitter,
  starP,
  starW,
} from "@/CONSTANTS/images";

type initialValuesType = {
  firstName: string;
  mail: string;
  message: string;
};
const initialValues = {
  firstName: "",
  mail: "",
  message: "",
};
export default function Contact() {
  const [inputValues, setInputValues] =
    useState<initialValuesType>(initialValues);
  const [error, setError] = useState<string | null>(null);
  const [submiting, setIsSubmitting] = useState(false);
  // const emptyInputs = inputValues.firstName ='' | inputValues.mail = '' | inputValues.message = ''
  const router = useRouter();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!inputValues.firstName || !inputValues.mail || !inputValues.message) {
        setError("All fields are required!");
        setIsSubmitting(false);
        return;
      }

      setError(null);
      setIsSubmitting(true);

 
      setTimeout(() => {
        console.log(inputValues);
        setInputValues(initialValues); 
        setIsSubmitting(false); 
      }, 8000);

      router.push('/');
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitting(false); // Reset loading state on error
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <main className="bg-gradient-to-tl from-deep-BG from-40% via-color-3b to-deep-BG p5 z-0 lg:min-h-[86.5vh] relative">
      <div className="flex flex-row justify-around px-5 lg:px-20 py-0 lg:py-10">
        <div className="lg:flex flex-col justify-center hidden">
          <h1 className="text-color-2 text-2xl font-bold">Get in touch</h1>
          <div className="info lg:flex flex-col gap-4 text-white text-base py-4 hidden">
            <h1>
              Contact
              <br />
              Information
            </h1>
            <h1>
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </h1>
            <h1>Call Us : 07067981819</h1>
            <h1>
              We are open from Monday-Friday
              <br />
              08:00am - 05:00pm
            </h1>
          </div>
          <div className="social">
            <h1 className="text-color-2 text-xl font-semibold ">Share on</h1>
            <div className="flex flex-row gap-4 font-bold py-3">
              <Image src={insta} alt="insta" className="" />
              <Image src={twitter} alt="twitter" className="" />
              <Image src={facebook} alt="facebook" className="" />
              <Image src={linkedin} alt="linkedin" className="" />
            </div>
          </div>
          <Image src={starP} alt="starP" className="absolute top-0 w-5 h-5" />
        </div>
        <div className="lg:form-BG lg:shadow-2xl lg:shadow-black w-full lg:w-[40%] p-14 rounded-md relative">
          <form
            action=""
            className="rounded-md flex flex-col w-full"
            onSubmit={handleContactSubmit}
          >
            <legend className="text-color-2 text-xl font-bold">
              Questions or need assistance?
            </legend>
            <legend className="text-color-2 text-xl font-bold">
              Let us know about it!
            </legend>
            <legend className="text-xs lg:hidden text-white py-5">
              Email us below to any question related to our event
            </legend>
            <div className="flex flex-col gap-4 pb-7 lg:py-7">
              <input
                type="text"
                name="firstName"
                value={inputValues.firstName}
                placeholder="First Name"
                className="text-base text-white border-2 rounded-sm border-slate-300 bg-transparent py-2 px-3 outline-none"
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="mail"
                value={inputValues.mail}
                placeholder="Mail"
                className="text-base text-white border-2 rounded-sm border-slate-300 bg-transparent py-2 px-3 outline-none"
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                id=""
                value={inputValues.message}
                placeholder="Message"
                className="text-base text-white border-2 rounded-sm border-slate-300 bg-transparent py-2 px-3 outline-none"
                onChange={handleInputChange}
              ></textarea>
              <div>
                <p className="text-xs text-red-600 -mt-3">{error}</p>
              </div>
            </div>
            <div className="flex flex-row justify-center text-white text-base">
              <button
                type="submit"
                className={`${
                  submiting
                    ? "bg-tranparent border-[2px] border-color-2 px-4 py-1.5 rounded-sm"
                    : "bg-gradient-to-r from-color-1 via-color-2 to-color-3 px-10 py-2 rounded-sm"
                } `}
              >
                {submiting ? "Submitting..." : "Submit"}
              </button>
            </div>
            <div></div>
          </form>
          <div className="social lg:hidden flex flex-col justify-center items-center mt-5">
            <h1 className="text-color-2 text-xl font-semibold ">Share on</h1>
            <div className="flex flex-row gap-4 font-bold py-3">
              <Image src={insta} alt="insta" className="w-fit h-fit" />
              <Image src={twitter} alt="twitter" className="w-fit h-fit" />
              <Image src={facebook} alt="facebook" className="w-fit h-fit" />
              <Image src={linkedin} alt="linkedin" className="w-fit h-fit" />
            </div>
          </div>
        </div>
        <Image
          src={starP}
          alt="starP"
          className="absolute bottom-28 left-[10%] lg:left-[49.5%] w-5 h-5"
        />
        <Image
          src={starW}
          alt="starP"
          className="absolute bottom-48 lg:bottom-16 right-[10%] w-5 h-5"
        />
        <Image
          src={starW}
          alt="starP"
          className="absolute right-[35%] lg:top-0 lg:right-[18%] w-5 h-5 brightness-50"
        />
      </div>
    </main>
  );
}
