import React from "react";
import Image from "next/image";
import dumbellIcon from "@/assets/icons/dumbbellicon.jpg";
import { aboutElements } from "./about_elements";
import SingleAboutElement from "./single_about_item";

const AboutLanding = () => {
  return (
    <div className="px-5 md:px-0">
      <div className="flex items-center justify-center flex-col ">
        <h1 className="font-kaushanScript text-primaryColor text-3xl mt-10 mb-5 -rotate-3">
          About
        </h1>
        <h2 className="uppercase font-redHat text-5xl text-center">
          <span className="font-outline-2">Learn more</span>{" "}
          <span className="text-white font-bold">about us</span>
        </h2>
      </div>
      <div>
        <p className="font-redHat text-[#b1b7b5] mt-8">
          Welcome to Beads and Bid! We are passionate about crafting exquisite,
          handcrafted beads while making a positive impact. Our raw materials
          are sustainably sourced from the scenic Kenyan coast, a region known
          for its natural beauty and rich cultural heritage. At the heart of our
          mission is the goal to empower local communities. By working directly
          with artisans and suppliers, we ensure fair wages, skill development,
          and opportunities for growth. Every bead tells a story of tradition,
          creativity, and resilience, blending time-honored techniques with
          modern designs to create truly unique pieces.
          <br />
          <br />
          When you choose Beads and Bid, you&apos;re not just buying
          beads—you&apos;re supporting a vibrant community, fostering
          sustainable livelihoods, and preserving the artistry of a region that
          inspires us every day. Together, we make creativity meaningful.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 gap-12 my-28">
        {aboutElements.map(({ description, image, title }, index) => (
          <SingleAboutElement
            description={description}
            image={image}
            title={title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutLanding;
