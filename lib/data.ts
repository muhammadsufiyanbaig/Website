import React from "react";
import { FaCertificate, FaChartLine, FaIndustry, FaNetworkWired, FaReact, FaWater } from "react-icons/fa";
import Ecommerce from "@/public/Ecommerce.jpg";
import PictureGallery from "@/public/PictureGallery.jpg";
import ExpenseTracker from "@/public/ExpenseTracker.jpg";
import Quiz from "@/public/Quiz.jpg"
import CryptoFleet from "@/public/Cryptofleet.jpg"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Products",
    hash: "#products",
  },
  {
    name: "Journey",
    hash: "#journey",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Tecno Gas Pakistan - Inception",
    location: "Pakistan",
    description:
      "Tecno Gas Pakistan began its journey in 1995, steadily growing over time. In the first 10 years, the company expanded its reach across the country.",
    icon: React.createElement(FaIndustry),
    date: "1995 - 2005",
  },
  {
    title: "Copyright Certification",
    location: "Pakistan",
    description:
      "In 2005, Tecno Gas Pakistan secured a copyright certificate, ensuring brand protection and restricting the use of similar names across Pakistan.",
    icon: React.createElement(FaCertificate),
    date: "2005",
  },
  {
    title: "Production of Water Heaters",
    location: "Pakistan",
    description:
      "In 2011, Tecno Gas Pakistan started production of water heaters, marking a milestone by following international specifications and standards.",
    icon: React.createElement(FaWater),
    date: "2011",
  },
  {
    title: "New Management Takeover",
    location: "Pakistan",
    description:
      "In 2015, Tecno Gas Pakistan underwent a management change, leading to rapid growth over the next 9 years and a significant expansion of product lines.",
    icon: React.createElement(FaChartLine),
    date: "2015 - 2024",
  },
  {
    title: "Expanded Product Line & Nationwide Network",
    location: "Pakistan",
    description:
      "Tecno Gas Pakistan expanded its product line to include electric and gas water heaters, semi-instant electric geysers, gas instant geysers, cooking ranges, hobs, water coolers, and established a service network in 14 cities across Pakistan.",
    icon: React.createElement(FaNetworkWired),
    date: "2015 - present",
  },
] as const;


export const productsData = [
  {
    title: "Cooking Hob",
    description:
      "Cook like a pro with our advanced Cooking Hob, featuring multiple burners, a grill, and rotisserie. Achieve energy efficiency without compromising performance.",
    tags: ["Energy Efficiency", "Multiple Burners", "Grill", "Rotisserie"],
    imageUrl: CryptoFleet,
    technicalDetails: {
      modalTitle: "Advanced Cooking Hob",
      modalData: "Our Cooking Hob offers top-notch features including multiple burners, a grill, and a rotisserie for versatile cooking. Engineered for energy efficiency without sacrificing power, it's designed for serious home cooks.",
      modalImage: CryptoFleet,
    }
  },
  {
    title: "Cooking Range",
    description:
      "Our Cooking Range is designed for culinary perfection, offering energy-saving features, multiple burners, and integrated rotisserie – ideal for any kitchen enthusiast.",
    tags: ["Energy Saving", "Multiple Burners", "Rotisserie"],
    imageUrl: CryptoFleet,
    technicalDetails: {
      modalTitle: "Professional Cooking Range",
      modalData: "Designed for professionals and kitchen enthusiasts alike, this Cooking Range offers multiple burners for simultaneous cooking and an integrated rotisserie for perfectly roasted dishes, all with energy-saving technology.",
      modalImage: CryptoFleet,
    }
  },
  {
    title: "Geyser",
    description:
      "Stay warm with our Super Heavy Electric and Gas Geyser. Built for durability with an Italian thermostat and double safety system, ensuring reliable heating.",
    tags: ["Electric", "Gas", "Durable", "Italian Thermostat"],
    imageUrl: CryptoFleet,
    technicalDetails: {
      modalTitle: "Super Heavy Geyser",
      modalData: "This durable electric and gas geyser comes equipped with an Italian thermostat for precise temperature control and a double safety system, ensuring reliable and safe heating during the coldest months.",
      modalImage: CryptoFleet,
    }
  },
  {
    title: "Instant Electric Geyser",
    description:
      "Compact yet powerful, our Small Geyser offers efficient heating with energy-saving technology, perfect for homes with limited space.",
    tags: ["Compact", "Energy Saving", "Efficient Heating"],
    imageUrl: CryptoFleet,
    technicalDetails: {
      modalTitle: "Compact Instant Electric Geyser",
      modalData: "Designed for small spaces, this instant electric geyser provides powerful, efficient heating while using energy-saving technology, making it the ideal choice for compact homes.",
      modalImage: CryptoFleet,
    }
  },
  {
    title: "Water Cooler",
    description:
      "Available in 35 to 100 liters, our full-steel water cooler is built to perform with an imported compressor and moisture-proof insulation for efficient cooling.",
    tags: ["Full Steel", "Imported Compressor", "Moisture-Proof Insulation"],
    imageUrl: CryptoFleet,
    technicalDetails: {
      modalTitle:  "Full-Steel Water Cooler",
      modalData: "This robust water cooler, available in various capacities (35 to 100 liters), features a high-performance imported compressor and moisture-proof insulation to ensure efficient and long-lasting cooling.",
      modalImage: CryptoFleet,
    }
  }
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQLite",
  "Redux",
  "Groq",
  "Sanity.io",
  "Express",
  "Neon Postgress",
  "Python",
  "FastAPI",
  "Framer Motion",
] as const;
