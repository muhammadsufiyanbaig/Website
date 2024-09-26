"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About us</SectionHeading>
      <p className="mb-3">
        Since 1995, <span className="font-medium">Tecno Gas Pakistan</span> has been a household name in premium home appliances. With a focus on
        <span className="font-medium">quality and innovation</span>, we bring you products that stand the test of time. From state-of-the-art
        <span className="font-medium">cooking hobs and ranges</span> to efficient water heating solutions, we have everything you need to create a
        <span className="italic">comfortable and efficient home</span>. Trust in our legacy of over two decades, delivering
        <span className="font-medium">excellence and durability</span>.
      </p>
      <p>
        <span className="italic">Experience the difference</span> with our innovative products, designed to make everyday tasks easier. Our commitment to
        <span className="font-medium">craftsmanship and reliability</span> has positioned us as a leader in the market, offering solutions that
        <span className="italic">combine style and functionality</span>.
      </p>


    </motion.section>
  );
}
