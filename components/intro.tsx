"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import logo from "@/public/pic.jpg"
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
<div className="flex items-center justify-center">
  <div className="relative">
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className="flex-row justify-center items-center"
    >
      <div className="flex justify-center items-center flex-col">
      <Image
        src={logo}
        alt="Muhammad Sufiyan Baig"
        width="500"
        height="500"
        quality="95"
        priority={true}
        className="h-28 w-28 rounded-3xl object-cover border-[0.35rem] border-white shadow-xl"
      />
      
    <h1 className="font-bold underline text-red-800 text-3xl py-2 text-center">TG Appliances</h1>
    </div>
    </motion.div>
  </div>
</div>


      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-red-700"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-black">Experience</span> the Best{" "}
        <span className="font-black">Home Appliances</span> {" "}<br/>
      <span className="underline text-gray-950 dark:text-gray-100">with Tecno Gas Pakistan</span>
      </motion.h1>

      <motion.p
        className="mb-10  text-base font-medium !leading-[1.5] text-red-700"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
            <span className="text-gray-950 dark:text-gray-100">"Transform your kitchen and home with high-quality, durable, and energy-efficient appliances since 1995."</span>
      </motion.p>



      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="https://wa.link/6hgr7v"
          target="_blank"
        >
          Whatsapp{" "}
          <FaSquareWhatsapp className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>

        <Link
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.facebook.com/tgappliance"
          target="_blank"
        >
          <FaFacebookSquare />
        </Link>

        <Link
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.instagram.com/tecnogasappliances/"
          target="_blank"
        >
          <FaInstagramSquare />
        </Link>
      </motion.div>
    </section>
  );
}
