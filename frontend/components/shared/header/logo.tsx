import React from "react";
import Image from "next/image";
import Link from "next/link";
import mainIcon from "@/assets/icons/mainicon.png";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex gap-2 items-center font-redHat font-bold">
        <Image src={mainIcon} alt="MainIcon" className="w-7 h-7" />
        <h1>BEADS & BID</h1>
      </div>
    </Link>
  );
};

export default Logo;
