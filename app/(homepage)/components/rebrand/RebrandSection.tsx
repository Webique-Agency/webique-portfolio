import React from 'react';
import Image from "next/image";
import Link from "next/link";
import "./RebrandSection.style.scss";

function RebrandSection() {
  return (
    <section className="generic-section-wrapper h-dvh flex flex-col gap-10 items-center justify-center">
      <h1>Webique Agency is now <Link className={"rebrand-link text-[#5E4CFF]! hover:underline!"} href={"https://ashkin-studio.vercel.app"}>Ashkin Studio!</Link> </h1>
      <Image src={"./rebrand.png"} className={"w-auto h-auto lg:h-50 max-h-50 object-fit"} alt={"Webique logo"} width={256} height={256}/>
    </section>
  );
}

export default RebrandSection;
