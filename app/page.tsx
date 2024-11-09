"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Line from "@/public/Line.svg";
import Bulb from "@/public/light.png";
import Chain from "@/public/chain.png";
import fire from "@/public/fire.png";
import human from "@/public/human.png";
import universe from "@/public/universe.png";
import starP from "@/public/star-purple.png";
import starW from "@/public/star-white.png";
import { motion } from "framer-motion";
import {arrow,FAQ,idea,lady,men,smallQ,bigQ,starPurple,lineP,winner,silver,bronze,gold,liberty,wisper,libertyPay,paybox,visual,winwise,checked,auth,unluck,insta,twitter,facebook, linkedin, location, phone,} from "@/CONSTANTS/images";

export default function Home() {
  const [time, setTime] = useState({hours: '',minutes: '',seconds: ''});

  const updateTime = () => {
    const now = new Date();
    setTime({
      hours: String(now.getHours()).padStart(2, '0'),
      minutes: String(now.getMinutes()).padStart(2, '0'),
      seconds: String(now.getSeconds()).padStart(2, '0')
    });
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, []);

  return (
    <main className="relative">
      <motion.section className="bg-gradient-to-tl from-deep-BG from-40% via-color-3b to-deep-BG pt-5 z-0">
        <div className="flex flex-col items-center lg:items-end pr-0 lg:pr-36 relative">
          <h1 className="text-white text-base font-bold lg:text-2xl italic">
            Igniting a Revolution in HR Innovation
          </h1>
          <Image
            src={Line}
            alt="line"
            className="w-28 lg:w-36 absolute top-6 right-10 lg:right-40 lg:top-8"
          />
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between mt-14 lg:mt-5 relative ">
          <div className="text-white w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start pl-0 lg:pl-44">
            <div className="relative">
              <h1 className="text-2xl lg:text-5xl font-extrabold">
                getlinked Tech
              </h1>
              <Image
                src={Bulb}
                alt="Bulb"
                className="absolute -top-3 lg:-top-5 left-[68%] lg:left-[75%] lg:right-10 w-5 lg:w-6 h-6 lg:h-8"
              />
              <div className="flex flew-row items-baseline">
                <h1 className="font-extrabold text-2xl lg:text-5xl text-white">
                  Hackathon<b className="text-color-2">1.0</b>
                </h1>
                <Image
                  src={Chain}
                  alt="chain"
                  className="w-7 h-7 lg:w-10 lg:h-10"
                />
                <Image
                  src={fire}
                  alt="fire"
                  className="w-7 h-7 lg:w-10 lg:h-10"
                />
              </div>
            </div>
            <p className="text-white text-sm text-center lg:text-start lg:text-base w-3/4 py-2">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Link href={"/register"} className="text-base py-10">
              <button className="bg-gradient-to-r from-color-1 via-color-2 to-color-3 px-10 py-2 rounded-sm">
                Register
              </button>
            </Link>
            <div className="timers">
              <h1 className="font-semibold text-4xl">
                {time.hours}<b className="text-xs lg:text-sm font-normal">H</b> {time.minutes}
                <b className="text-xs lg:text-sm  font-normal">M</b> {time.seconds}
                <b className="text-xs lg:text-sm font-normal">S</b>
              </h1>
            </div>
            <div className="startImage">
              <Image
                src={starP}
                alt="star"
                className="absolute -top-5 left-[75%] lg:top-16 lg:left-[45%] w-2 h-2 lg:w-6 lg:h-6 shining shining"
              />
              <Image
                src={starP}
                alt="star"
                className="absolute bottom-[70%] left-[75%] lg:bottom-44 lg:left-[35%] w-2 h-2 lg:w-6 lg:h-6 shining "
              />
              <Image
                src={starW}
                alt="star"
                className="absolute -top-7 left-[28%] lg:left-[16%] lg:top-0 w-4 h-4 lg:w-6 lg:h-6 shining"
              />
            </div>
          </div>
          <div
            className={`w-full lg:w-1/2 bg-[url('../public/metrix.png')] relative mt-5 lg:mt-0`}
          >
            <Image
              src={human}
              alt="human"
              className="object-cover z-30 filter grayscale"
            />
            {/* <Image src={metrix} alt="fire" className='absolute top-0 z-0'/> */}
            <Image      
              src={universe}
              alt="universe"
              className="absolute top-0 left-[10%] z-20 w-[70%] rotating"
            />
            <div className=""></div>
          </div>
        </div>
      </motion.section>
      <hr className=" opacity-30" />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 5 }}
        className="flex flex-col lg:flex-row justify-center items-center w-full lg:h-[100vh] p-10 lg:px-0 gap-x-10"
      >
        <div className="w-full flex justify-center lg:inline lg:w-[40%] relative">
          <Image src={idea} alt="lightbulb" className="w-[70%] lg:w-[80%]" />
          <h1 className="absolute text-sm lg:text-2xl text-white font-semibold text-center top-[50%] lg:left-[32%] ">
            The Big <br /> Idea
          </h1>
          <Image
            src={starP}
            alt="lightbulb"
            className="absolute w-2 h-2 lg:w-3 lg:h-3 top-[30%] lg:left-0 left-5 shining"
          />
          <Image
            src={arrow}
            alt="string"
            className="absolute w-3 h-3 lg:w-10 lg:h-10 -bottom-5 lg:bottom-1 right-36 lg:right-20 -rotate-45"
          />
        </div>
        <div className="w-full lg:w-[35%] relative">
          <Image
            src={starP}
            alt="star"
            className="absolute w-3 h-3 lg:w-5 lg:h-5 right-0 top-10 shining"
          />
          <h1 className="text-xl lg:text-3xl text-white font-semibold py-5 lg:py-3 text-center lg:text-start">
            Introduction to getlinked <br />
            <b className=" text-color-2">tech Hackathon 1.0</b>
          </h1>
          <p className="text-xs lg:text-sm text-slate-100 text-center lg:text-start">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a coding
            genius, a design maverick, or a concept wizard, you&apos;ll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that&apos;s what we&apos;re all about!
          </p>
        </div>
      </motion.section>
      <hr className=" opacity-30" />

      <section className="bg-gradient-to-tl from-deep-BG from-40% via-color-3b to-deep-BG flex flex-col-reverse lg:flex-row justify-center items-center w-full lg:h-[100vh] p-10 lg:py-10">
        <div className="w-full lg:w-[35%] relative">
          <Image
            src={starW}
            alt="star"
            className="absolute w-3 h-3 lg:w-5 lg:h-5 right-36 -top-5 opacity-50 shining"
          />
          <Image
            src={starW}
            alt="star"
            className="absolute w-3 h-3 lg:w-5 lg:h-5 right-0 -bottom-10"
          />
          <h1 className="text-xl lg:text-3xl text-white font-semibold py-5 lg:py-3 text-center lg:text-start">
            Rules and
            <br />
            <b className=" text-color-2">Guidelines</b>
          </h1>
          <p className="text-xs lg:text-sm text-slate-100 text-center lg:text-start">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a coding
            genius, a design maverick, or a concept wizard, you&apos;ll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that&apos;s what we&apos;re all about!
          </p>
        </div>
        <div className="w-full flex justify-center lg:inline lg:w-[40%] relative">
          <Image src={lady} alt="lightbulb" className="w-full" />
        </div>
      </section>
      <hr className=" opacity-30" />

      <section className="flex flex-col lg:flex-row justify-center items-center w-full lg:h-[100vh] p-10 lg:py-10 lg:px-0">
        <div className="w-full flex justify-center items-center lg:w-[45%] relative pt-[10px]">
          <Image src={men} alt="lightbulb" className="object-contain w-full" />
          <Image
            src={starP}
            alt="lightbulb"
            className="absolute w-2 h-2 lg:w-3 lg:h-3 -top-10 lg:left-36 left-[30%]"
          />
          <Image
            src={starW}
            alt="lightbulb"
            className="absolute w-2 h-2 lg:w-3 lg:h-3 top-[50%] lg:left-[55%] left-[50%] opacity-50 shining"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start w-full lg:w-[40%] relative">
          <Image
            src={starW}
            alt="lightbulb"
            className="absolute w-2 h-2 lg:w-3 lg:h-3 bottom-5 lg:-bottom-[5%] right-0 lg:right-[100%] shining"
          />
          <h1 className="text-xl lg:text-2xl text-white font-semibold text-center lg:text-start">
            Judging Criteria <br />
            <b className="text-color-2">Key attributes</b>
          </h1>
          <div className="flex flex-col gap-5 text-center lg:text-start py-3 lg:py-5">
            <p className="text-slate-300 text-xs lg:text-sm">
              <b className="text-color-1">Innovation and Creativity:</b>{" "}
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p className="text-slate-300 text-xs lg:text-sm">
              <b className="text-color-1">Functionality:</b> Assess how well the
              solution works. Does it perform its intended functions effectively
              and without major issues? Judges would consider the completeness
              and robustness of the solution.
            </p>
            <p className="text-slate-300 text-xs lg:text-sm">
              <b className="text-color-1">Impact and Relevance:</b> Determine
              the potential impact of the solution in the real world. Does it
              address a significant problem, and is it relevant to the target
              audience? Judges would assess the potential social, economic, or
              environmental benefits.
            </p>
            <p className="text-slate-300 text-xs lg:text-sm">
              <b className="text-color-1">Technical Complexity:</b> Evaluate the
              technical sophistication of the solution. Judges would consider
              the complexity of the code, the use of advanced technologies or
              algorithms, and the scalability of the solution.
            </p>
            <p className="text-slate-300 text-xs lg:text-sm">
              <b className="text-color-1">Adherence to Hackathon Rules:</b>{" "}
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
          </div>
          <Link href={"#"} className="text-base text-white">
            <button className="bg-gradient-to-r from-color-1 via-color-2 to-color-3 px-10 py-2 rounded-sm">
              Read More
            </button>
          </Link>
        </div>
      </section>
      <hr className=" opacity-30" />

      <section className="flex flex-col lg:flex-row justify-center items-center w-full lg:h-[100vh] p-10 gap-16 lg:py-10 lg:px-0">
        <div className="w-full lg:w-[30%]">
          <div className="flex flex-col">
            <h1 className="text-xl lg:text-3xl text-white font-semibold py-5 lg:py-3 text-center lg:text-start">
              Frequently Ask <br />
              <b className=" text-color-2">Question</b>
            </h1>
            <p className="text-slate-200 text-xs lg:text-sm lg:py-3">
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0{" "}
            </p>
          </div>
          <div className="questions flex flex-col gap-5 mt-10 ">
            <div className="flex flex-row justify-between py-1 items-center border-b-2 border-color-2 ">
              <p className="text-slate-200 text-xs lg:text-sm">
                Can I work on a project I started before the hackathon?
              </p>
              <span className="text-color-2 text-sm lg:text-base font-bold">
                +
              </span>
            </div>
            <div className="flex flex-row justify-between py-1 items-center border-b-2 border-color-2 ">
              <p className="text-slate-200 text-xs lg:text-sm">
                What happens if I need help during the hackathon?
              </p>
              <span className="text-color-2 text-sm lg:text-base font-bold">
                +
              </span>
            </div>
            <div className="flex flex-row justify-between py-1 items-center border-b-2 border-color-2">
              <p className="text-slate-200 text-xs lg:text-sm">
                What happens if I don&apos;t have an idea for a project?
              </p>
              <span className="text-color-2 text-sm lg:text-base font-bold">
                +
              </span>
            </div>
            <div className="flex flex-row justify-between py-1 items-center border-b-2 border-color-2">
              <p className="text-slate-200 text-xs lg:text-sm">
                Can I join a team or do I have to come with one?
              </p>
              <span className="text-color-2 text-sm lg:text-base font-bold">
                +
              </span>
            </div>
            <div className="flex flex-row justify-between py-1 items-center border-b-2 border-color-2">
              <p className="text-slate-200 text-xs lg:text-sm">
                What happens after the hackathon ends
              </p>
              <span className="text-color-2 text-sm lg:text-base font-bold">
                +
              </span>
            </div>
            <div className="flex flex-row justify-between py-1 items-center border-b-2 border-color-2">
              <p className="text-slate-200 text-xs lg:text-sm">
                Can I work on a project I started before the hackathon?
              </p>
              <span className="text-color-2 text-sm lg:text-base font-bold">
                +
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center lg:inline lg:w-[40%] relative">
          <Image src={FAQ} alt="lightbulb" className="w-full" />
          <div className="icons">
            <Image
              src={smallQ}
              alt="lightbulb"
              className="absolute top-0 left-[20%] h-4 w-fit lg:h-8"
            />
            <Image
              src={bigQ}
              alt="lightbulb"
              className="absolute -top-5 left-[35%] h-4 w-fit lg:h-10"
            />
            <Image
              src={smallQ}
              alt="lightbulb"
              className="absolute top-0 right-[40%] h-4 w-fit lg:h-8"
            />
            <Image
              src={starPurple}
              alt="lightbulb"
              className="absolute top-0 right-[50%] h-3 w-fit lg:h-5 shining"
            />
            <Image
              src={starPurple}
              alt="lightbulb"
              className="absolute top-[20%] left-[20%] h-3 w-fit lg:h-5 shining"
            />
            <Image
              src={starW}
              alt="lightbulb"
              className="absolute top-[50%] left-[10%] h-3 w-fit lg:h-5 opacity-50"
            />
            <Image
              src={starW}
              alt="lightbulb"
              className="absolute right-[20%] bottom-0 h-3 w-fit lg:h-5 shining"
            />
          </div>
        </div>
      </section>
      <hr className=" opacity-30" />

      <section className="w-ful flex flex-col justify-center items-cente p-10 lg:px-0">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="header pb-7 w-full lg:w-[40%] flex flex-col justify-center items-center">
            <h1 className="text-xl lg:text-3xl text-white font-semibold text-center">
              Timeline
            </h1>
            <p className="text-xs lg:text-sm text-slate-200 text-center py-3 lg:w-[60%]">
              Here is the breakdown of the time we anticipate using for the
              upcoming event.
            </p>
          </div>
        </div>
        {/* Roadmap For Desktop devices */}
        <div className="relative hidden event-Cont lg:flex flex-col justify-center items-center gap-3">
          <div className="flex flex-row w-[70%] justify-between items-baseline">
            <div className="text-end w-[40%]">
              <h1 className="text-color-2 text-base lg:text-xl font-semibold">
                Hackathon Announcement
              </h1>
              <p className="text-slate-200 text-xs lg:text-sm">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="relative flex flex-col justify-center w-[10%] items-center gap-2">
              <Image src={lineP} alt="line" className="h-16" />
              <button className="w-10 h-10 text-center text-slate-200 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-3">
                1
              </button>
            </div>
            <div className="w-[40%]">
              <h1 className="text-color-2 text-base lg:text-xl font-semibold">
                November 18, 2023
              </h1>
            </div>
            <div className="starsss absolute">
              <Image
                src={starP}
                alt="star"
                className="absolute -top-5 left-[20%] w-3 h-3 lg:w-5 lg:h-5"
              />
              <Image
                src={starW}
                alt="star"
                className="absolute w-3 h-3 lg:w-5 lg:h-5 bottom-[60%] right-[15%] shining "
              />
              <Image
                src={starW}
                alt="star"
                className="absolute bottom-5 left-[15%] w-3 h-3 lg:w-5 lg:h-5 opacity-50"
              />
            </div>
          </div>
          <div className="flex flex-row w-[70%] justify-between items-baseline">
            <div className="w-[40%] text-end">
              <h1 className="text-color-2 text-base lg:text-xl font-semibold">
                November 18, 2023
              </h1>
            </div>
            <div className="relative flex flex-col justify-center w-[10%] items-center gap-2">
              <Image src={lineP} alt="line" className="h-16" />
              <button className="w-10 h-10 text-center text-slate-200 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-3">
                2
              </button>
            </div>
            <div className="text-start w-[40%]">
              <h1 className="text-color-2 text-base lg:text-xl font-semibold">
                Teams Registration begins
              </h1>
              <p className="text-slate-200 text-xs lg:text-sm">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
          </div>
          <div className="flex flex-row w-[70%] justify-between items-baseline">
            <div className="text-end w-[40%]">
              <h1 className="text-color-2 text-base lg:text-xl font-semibold">
                Teams Registration ends
              </h1>
              <p className="text-slate-200 text-xs lg:text-sm">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="relative flex flex-col justify-center w-[10%] items-center gap-2">
              <Image src={lineP} alt="line" className="h-16" />
              <button className="w-10 h-10 text-center text-slate-200 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-3">
                3
              </button>
            </div>
            <div className="w-[40%]">
              <h1 className="text-color-2 text-base lg:text-xl font-semibold">
                November 18, 2023
              </h1>
            </div>
          </div>
          <div className="flex flex-row w-[70%] justify-between items-baseline">
            <div className="w-[40%] text-end">
              <h1 className="text-color-2 text-base lg:text-xl font-semibold">
                November 18, 2023
              </h1>
            </div>
            <div className="relative flex flex-col justify-center w-[10%] items-center gap-2">
              <Image src={lineP} alt="line" className="h-16" />
              <button className="w-10 h-10 text-center text-slate-200 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-3">
                4
              </button>
            </div>
            <div className="text-start w-[40%]">
              <h1 className="text-color-2 text-base lg:text-xl font-semibold">
                Announcement of the accepted teams
              </h1>
              <p className="text-slate-200 text-xs lg:text-sm">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>
          <div className="flex flex-row w-[70%] justify-between items-baseline">
            <div className="text-end w-[40%]">
              <h1 className="text-color-2 text-base lg:text-xl font-semibold">
                Getlinked Hackathon 1.0 Offically Begins
              </h1>
              <p className="text-slate-200 text-xs lg:text-sm">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="relative flex flex-col justify-center w-[10%] items-center gap-2">
              <Image src={lineP} alt="line" className="h-16" />
              <button className="w-10 h-10 text-center text-slate-200 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-3">
                5
              </button>
            </div>
            <div className="w-[40%]">
              <h1 className="text-color-2 text-base lg:text-xl font-semibold">
                November 18, 2023
              </h1>
            </div>
          </div>
          <div className="flex flex-row w-[70%] justify-between items-baseline">
            <div className="w-[40%] text-end">
              <h1 className="text-color-2 text-base lg:text-xl font-semibold">
                November 18, 2023
              </h1>
            </div>
            <div className="relative flex flex-col justify-center w-[10%] items-center gap-2">
              <Image src={lineP} alt="line" className="h-16" />
              <button className="w-10 h-10 text-center text-slate-200 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-3">
                6
              </button>
            </div>
            <div className="text-start w-[40%]">
              <h1 className="text-color-2 text-base lg:text-xl font-semibold">
                Demo Day
              </h1>
              <p className="text-slate-200 text-xs lg:text-sm">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </div>
        {/* Roadmap For Desktop mobile devices*/}
        <div className="relative eventContMobile lg:hidden flex flex-col gap-4">
          <div className="firstEvent flex flex-row gap-4">
            <div className="relative flex flex-col justify-center w-[10%] items-center gap-2">
              <Image src={lineP} alt="line" className="h-16" />
              <button className="w-10 h-10 text-center text-slate-200 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-3">
                1
              </button>
            </div>
            <div className="flex flex-col justify-around">
              <div className="">
                <h1 className="text-color-2 text-xs font-semibold">
                  Hackathon Announcement
                </h1>
                <p className="text-slate-200 text-xs py-1">
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
              <h1 className="text-color-2 text-xs font-semibold">
                November 18, 2023
              </h1>
            </div>
          </div>
          <div className="firstEvent flex flex-row gap-4">
            <div className="relative flex flex-col justify-center w-[10%] items-center gap-2">
              <Image src={lineP} alt="line" className="h-16" />
              <button className="w-10 h-10 text-center text-slate-200 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-3">
                2
              </button>
            </div>
            <div className="flex flex-col justify-around">
              <div>
                <h1 className="text-color-2 text-xs font-semibold">
                  Teams Registration begins
                </h1>
                <p className="text-slate-200 text-xs py-1">
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
              <h1 className="text-color-2 text-xs font-semibold">
                November 18, 2023
              </h1>
            </div>
          </div>
          <div className="firstEvent flex flex-row gap-4">
            <div className="relative flex flex-col justify-center w-[10%] items-center gap-2">
              <Image src={lineP} alt="line" className="h-16" />
              <button className="w-10 h-10 text-center text-slate-200 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-3">
                3
              </button>
            </div>
            <div className="flex flex-col justify-around">
              <div>
                <h1 className="text-color-2 text-xs font-semibold">
                  Teams Registration ends
                </h1>
                <p className="text-slate-200 text-xs py-1 ">
                  Interested Participants are no longer Allowed to register
                </p>
              </div>
              <h1 className="text-color-2 text-xs font-semibold">
                November 18, 2023
              </h1>
            </div>
          </div>
          <div className="firstEvent flex flex-row gap-4">
            <div className="relative flex flex-col justify-center w-[10%] items-center gap-2">
              <Image src={lineP} alt="line" className="h-16" />
              <button className="w-10 h-10 text-center text-slate-200 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-3">
                4
              </button>
            </div>
            <div className="flex flex-col justify-around">
              <div>
                <h1 className="text-color-2 text-xs font-semibold">
                  Announcement of the accepted teams
                </h1>
                <p className="text-slate-200 text-xs py-1">
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
              <h1 className="text-color-2 text-xs font-semibold">
                November 18, 2023
              </h1>
            </div>
          </div>
          <div className="firstEvent flex flex-row gap-4 justify-center">
            <div className="relative flex flex-col justify-center w-[10%] items-center gap-2">
              <Image src={lineP} alt="line" className="h-16" />
              <button className="w-10 h-10 text-center text-slate-200 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-3">
                5
              </button>
            </div>
            <div className="flex flex-col justify-around">
              <div>
                <h1 className="text-color-2 text-xs font-semibold">
                  Getlinked Hackathon 1.0 Offically Begins
                </h1>
                <p className="text-slate-200 text-xs py-1">
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
              <h1 className="text-color-2 text-xs font-semibold">
                November 18, 2023
              </h1>
            </div>
          </div>
          <div className="firstEvent flex flex-row gap-4">
            <div className="relative flex flex-col justify-center w-[10%] items-center gap-2">
              <Image src={lineP} alt="line" className="h-16" />
              <button className="w-10 h-10 text-center text-slate-200 rounded-full bg-gradient-to-r from-color-1 via-color-2 to-color-3">
                6
              </button>
            </div>
            <div className="flex flex-col justify-around">
              <div>
                <h1 className="text-color-2 text-xs font-semibold">Demo Day</h1>
                <p className="text-slate-200 text-xs py-1">
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
                <h1 className="text-color-2 text-xs font-semibold">
                  November 18, 2023
                </h1>
              </div>
            </div>
          </div>
          <div className="starsss">
            <Image
              src={starP}
              alt="star"
              className="absolute -top-5 left-10 w-3 h-3 lg:w-5 lg:h-5"
            />
            <Image
              src={starW}
              alt="star"
              className="absolute w-3 h-3 lg:w-5 lg:h-5 bottom-[53%] right-0 "
            />
            <Image
              src={starW}
              alt="star"
              className="absolute  w-3 h-3 lg:w-5 lg:h-5 opacity-50"
            />
          </div>
        </div>
      </section>
      <hr className=" opacity-30" />

      <section className="flex flex-col gap-16 lg:gap-0 lg:justify-center lg:flex-row lg:h-[100vh] bg-gradient-to-tl from-deep-BG from-40% via-color-3b to-deep-BG py-10 lg:px-0">
        <div className="lg:hidden flex flex-col justify-center items-center">
          <h1 className="text-xl lg:text-3xl text-white font-semibold py-2 lg:text-start text-center">
            Prizes and
            <br />
            <b className=" text-color-2">Rewards</b>
          </h1>
          <p className="text-slate-200 text-xs text-center w-[50%]">
            Hightlight of the prizes for winners and for participants
          </p>
        </div>
        <div className="relative w-full -mt-10 lg:mt-0 lg:w-[40%] flex flex-col justify-center items-baseline">
          <Image src={winner} alt="star" className="w-full" />
          <Image
            src={starPurple}
            alt="lightbulb"
            className="absolute w-2 h-2 lg:w-3 lg:h-3 top-10 lg:left-36 left-[30%]"
          />
          <Image
            src={starW}
            alt="lightbulb"
            className="absolute w-2 h-2 lg:w-3 lg:h-3 bottom-[10%] lg:left-[40%] left-[50%] shining"
          />
        </div>
        <div className="relative w-full lg:w-[40%] flex flex-col items-center justify-around">
          <div className="hidden lg:inline pb-24">
            <h1 className="text-xl lg:text-3xl text-white font-semibold lg:text-start">
              Prizes and
              <br />
              <b className=" text-color-2">Rewards</b>
            </h1>
            <p className="text-slate-200 text-xs lg:text-sm py-2">
              Hightlight of the prizes for winners and for participants
            </p>
          </div>
          <div className="pricesCont flex flex-row gap-5">
            <div className="secondCont relative border-[1px] border-color-2 text-center p-3 lg:p-5 pt-8 lg:pt-14 rounded-md w-[50%] h-fit">
              <h1 className="text-slate-200 text-xs lg:text-4xl">2nd</h1>
              <p className="text-slate-200 text-xs lg:text-2xl py-1">Runner</p>
              <h1 className="text-color-2 font-semibold text-sm lg:text-3xl py-0 lg:py-3">
                N300,000
              </h1>
              <Image
                src={silver}
                alt="star"
                className="absolute -top-12 left-[15%] lg:left-[20%] w-[70%] lg:w-[55%]"
              />
            </div>
            <div className="firstCont relative border-[1px] border-color-3 text-center p-3 lg:p-5 pt-10 lg:pt-20 rounded-md w-[50%] h-fit">
              <h1 className="text-slate-200 text-xs lg:text-4xl">1st</h1>
              <p className="text-slate-200 text-xs lg:text-2xl py-1">Runner</p>
              <h1 className="text-color-3 font-semibold text-sm lg:text-3xl py-0 lg:py-3">
                N400,000
              </h1>
              <Image
                src={gold}
                alt="star"
                className="absolute -top-14 left-0 lg:-top-28 w-[100%]"
              />
            </div>
            <div className="secondCont relative border-[1px] border-color-2 text-center p-3 lg:p-5 pt-8 lg:pt-14 rounded-md w-[50%] h-fit">
              <h1 className="text-slate-200 text-xs lg:text-4xl">3rd</h1>
              <p className="text-slate-200 text-xs lg:text-2xl py-1">Runner</p>
              <h1 className="text-color-2 font-semibold text-sm lg:text-3xl py-0 lg:py-3">
                N150,000
              </h1>
              <Image
                src={bronze}
                alt="star"
                className="absolute -top-12 left-[15%] lg:left-[20%] w-[70%] lg:w-[55%]"
              />
            </div>
          </div>
          <Image
            src={starPurple}
            alt="lightbulb"
            className="absolute w-2 h-2 lg:w-3 lg:h-3 -top-[350px] lg:top-[30%] lg:right-[20%] right-[20%]"
          />
          <Image
            src={starW}
            alt="lightbulb"
            className="absolute w-2 h-2 lg:w-3 lg:h-3 -top-[80%] lg:top-[40%] lg:right-[3%] lef-[50%] hidden lg: shining"
          />
          <Image
            src={starW}
            alt="lightbulb"
            className="absolute w-2 h-2 lg:w-3 lg:h-3 -top-[70%] lg:top-[35%] lg:left-0 left-[80%] shining"
          />
          <Image
            src={starW}
            alt="lightbulb"
            className="absolute w-2 h-2 lg:w-3 lg:h-3 -bottom-[10%] lg:bottom-0 lg:left-[60%] left-[50%] opacity-50"
          />
        </div>
      </section>
      <hr className="opacity-30" />

      <section className="relative w-full flex flex-col items-center pb-10">
        <div className="w-[80%] lg:w-[30%] text-center py-10">
          <h1 className="text-xl lg:text-3xl text-white font-semibold lg:py- text-center">
            Partners and Sponsors
          </h1>
          <p className="text-slate-200 text-xs lg:text-sm py-3 lg:py-2">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="sponsors p-5 lg:p-20 rounded-md w-[80%] grid grid-cols-3  gap-1">
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="flex flex-row justify-center h-[40%] items-center">
              <Image src={liberty} alt="liberty" className="w-[30%]" />
            </div>
            <div className="h-[3px] w-[80%] bg-color-2"></div>
            <div className="flex flex-row justify-center h-[40%] items-center">
              <Image src={wisper} alt="liberty" className="w-[30%]" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div className="flex w-full justify-center items-center h-[40%]">
              <Image
                src={lineP}
                alt="liberty"
                className=" object-contain w-3 h-10 lg:h-16"
              />
              <div className="flex flex-row justify-center items-center w-full">
                <Image src={libertyPay} alt="liberty" className="w-[60%]" />
              </div>
              <Image
                src={lineP}
                alt="liberty"
                className="object-contain w-3 h-10 lg:h-16"
              />
            </div>
            <div className="w-[50%] lg:w-[70%] bg-color-2 h-[3px]"></div>
            <div className="flex w-full justify-center items-center h-[40%]">
              <Image
                src={lineP}
                alt="liberty"
                className="object-contain w-3 h-10 lg:h-16"
              />
              <div className="flex flex-col justify-center items-center w-full">
                <Image src={paybox} alt="liberty" className="w-[50%]" />
              </div>
              <Image src={lineP} alt="liberty" className="w-3 h-10 lg:h-16" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <div className="flex flex-row justify-center h-[40%] items-center">
              <Image src={winwise} alt="liberty" className="w-[30%]" />
            </div>
            <div className="h-[3px] w-[80%] bg-color-2"></div>
            <div className="flex flex-row justify-center h-[40%] items-center">
              <Image src={visual} alt="liberty" className="w-[60%]" />
            </div>
          </div>
        </div>
        <Image
          src={starPurple}
          alt="liberty"
          className="absolute hidden lg:inline left-[13%] top-[22%] w-3 h-3 lg:w-5 lg:h-5 opacity-50 shining "
        />
        <Image
          src={starPurple}
          alt="liberty"
          className="absolute top-[50%] lg:top-[36%] right-[80%] lg:right-[43%] w-3 h-3 lg:w-5 lg:h-5 shining"
        />
        <Image
          src={starW}
          alt="liberty"
          className="absolute bottom-[12%] lg:bottom-[25%] right-[20%] lg:right-[43%] w-3 h-3 lg:w-5 lg:h-5 shining"
        />
      </section>
      <hr className="opacity-30" />

      <section className="flex flex-col lg:flex-row justify-center items-center p-10 pb-0 lg:p bg-gradient-to-tl from-deep-BG from-40% via-color-3b to-deep-BG">
        <div className="w-full lg:w-[80%] flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between">
          <div className="relative w-full lg:w-[45%] flex flex-col justify-center items-center py-0 lg:py-20">
            <div className="">
              <h1 className="text-xl lg:text-3xl text-white font-semibold text-center lg:text-start">
                Privacy Policy and
                <br />
                <b className=" text-color-2">Terms</b>
              </h1>
              <p className="text-slate-200 opacity-80 text-xs lg:text-sm py-1 lg:py-3">
                Last updated on September 12, 2023
              </p>
              <p className="text-slate-200 text-xs lg:text-sm pb-10 pt-5 text-center lg:text-start ">
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
            </div>
            <div className="secondCont sponsors border-color-2 py-5 lg:py-10 px-5 privacy lg:px-12 rounded-md">
              <p className="text-slate-200 text-xs lg:text-sm text-center lg:text-start">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <h1 className="text-sm lg:text-base text-color-2 font-semibold pt-7">
                Licensing Policy
              </h1>
              <p className="text-slate-200 text-xs lg:text-sm pt-3 pb-6">
                Here are terms of our Standard License:
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-2">
                  <Image src={checked} alt="icon" className="self-start" />
                  <p className="text-slate-200 text-xs lg:text-sm">
                    {" "}
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event.
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <Image src={checked} alt="icon" className="self-start" />
                  <p className="text-slate-200 text-xs lg:text-sm">
                    {" "}
                    You are licensed to use the item available at any free
                    source sites, for your project developement.
                  </p>
                </div>
                <div className="w-full flex justify-center items-center pt-4 lg:pt-5">
                  <button className="text-xs lg:text-sm text-slate-200 bg-gradient-to-r from-color-1 via-color-2  to-color-3 py-2 px-4 lg:px-6 lg:py-2 rounded-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <Image
              src={starW}
              alt="icon"
              className="absolute w-3 h-3 lg:w-5 lg:h-5 opacity-50 -top-3 right-[7%] lg:right-[30%] lg:top-[7%] shining"
            />
            <Image
              src={starP}
              alt="icon"
              className="absolute w-3 h-3 lg:w-5 lg:h-5 right-[6%] top-[20%] lg:-right-[15%] lg:top-[20%]"
            />
            <Image
              src={starPurple}
              alt="icon"
              className="absolute bottom-[28%] -left-[20%] w-3 h-3 lg:w-5 lg:h-5 shining"
            />
          </div>
          <div className="w-full lg:w-[45%] relative flex flex-col justify-center items-baseline h-[70vh] lg:h-auto">
            <Image
              src={auth}
              alt="icon"
              className="absolute w-[60%] top-[5%] lg:top-[10%] right-[20%] z-0"
            />
            <Image src={unluck} alt="icon" className="z-30 w-full" />
            <Image
              src={starW}
              alt="icon"
              className="absolute w-2 h-2 lg:w-5 lg:h-5 right-[30%] top-[20%] shining"
            />
            <Image
              src={starPurple}
              alt="icon"
              className="absolute w-3 h-3 lg:w-5 lg:h-5 bottom-[80%] left-0 lg:left-[33%] lg:bottom-[45%]"
            />
            <Image
              src={starW}
              alt="icon"
              className="absolute w-2 h-2 lg:w-5 lg:h-5 left-[30%] lg:left-[25%] bottom-[35%] shining"
            />
            <Image
              src={starW}
              alt="icon"
              className="absolute bottom-[35%] opacity-50 right-[15%] w-2 h-2 lg:w-5 lg:h-5 shining"
            />
          </div>
        </div>
      </section>
      <hr className="opacity-30" />

      <section className="relative flex flex-col justify-center items-center py-10">
        <div className="theCont flex flex-col lg:flex-row w-[80%] justify-around gap-10 lg:gap-0">
          <div className="item bg-re-500 w-full lg:w-[40%] flex flex-col gap-8 justify-between">
            <div>
              <h1 className="font-bold text-xl lg:text-3xl text-white">
                get<b className="text-color-2">linked</b>
              </h1>
              <p className="text-slate-200 text-xs lg:text-sm py-2">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <div>
              <p className="text-slate-200 text-xs lg:text-sm py-2">
                Terms of Use
                <Image src={lineP} alt="line" className="inline h-5 w-10 " />
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="item bg-blu-500 w-full lg:w-fit flex flex-col justify-between">
            <div className="pt-2">
              <h1 className="text-sm text-color-2 font-medium">Useful Links</h1>
              <ul className="flex flex-col gap-2 pt-2">
                <li className="text-slate-200 text-xs">Overview</li>
                <li className="text-slate-200 text-xs">Timeline</li>
                <li className="text-slate-200 text-xs">FAQs</li>
                <li className="text-slate-200 text-xs">Register</li>
              </ul>
            </div>
            <div className="flex flex-row gap-4 items-center py-2">
              <p className="text-xs text-color-2">Follow us</p>
              <div className="flex flex-row gap-4 font-bold">
                <Image src={insta} alt="insta" className="w-fit h-fit" />
                <Image src={twitter} alt="twitter" className="w-fit h-fit" />
                <Image src={facebook} alt="facebook" className="w-fit h-fit" />
                <Image src={linkedin} alt="linkedin" className="w-fit h-fit" />
              </div>
            </div>
          </div>
          <div className="item w-full lg:w-fit">
            <h1 className="text-sm text-color-2 font-medium py-2">
              Contact Us
            </h1>
            <div className="flex flex-row gap-2">
              <Image src={phone} alt="insta" className="w-fit h-fit" />
              <p className="text-slate-200 text-xs">+234 6707653444</p>
            </div>
            <div className="flex flex-row gap-2 py-3">
              <Image
                src={location}
                alt="insta self-start"
                className="w-fit h-fit"
              />
              <p className="text-slate-200 text-xs">
                27,Alara Street
                <br />
                Yaba 100012
                <br />
                Lagos State
              </p>
            </div>
          </div>
        </div>
        <Image
          src={starW}
          alt="insta"
          className="absolute top-[15%] lg:top-[20%] left-[2%] lg:left-[5%] w-3 h-3 lg:w-5 lg:h-5 shining"
        />
        <Image
          src={starPurple}
          alt="insta"
          className="absolute top-[87%] left-[20%] lg:top-[65%] lg:left-[48%] w-3 h-3 lg:w-5 lg:h-5"
        />
        <Image
          src={starW}
          alt="insta"
          className="absolute w-3 h-3 top-[48%] right-[50%] lg:top-[15%] lg:right-[30%] lg:w-5 lg:h-5 opacity-50"
        />
        <Image
          src={starW}
          alt="insta"
          className="absolute w-3 h-3 top-[75%] right-[15%] lg:top-[55%] lg:right-[8%] lg:w-5 lg:h-5 shining"
        />
        <p className="text-slate-200 text-xs pt-10">
          All rights reserved. © getlinked Ltd.
        </p>
      </section>
    </main>
  );
}
