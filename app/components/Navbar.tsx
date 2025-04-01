"use client";

import React, {useCallback, useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import ChooseServiceDialog from "@/app/components/choose-service-dialog/ChooseServiceDialog";
import {AnimatePresence, motion} from "framer-motion";

export default function Navbar() {

  const [scrollYPage, setScrollYPage] = useState(false);

  const onScroll = useCallback(() => {
    const {scrollY} = window;
    if (scrollY > 500) {
      setScrollYPage(true);
    } else {
      setScrollYPage(false)
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
      <nav
          className="w-full flex items-center justify-between py-4 top-4 z-50 sticky bg-[#FFFFFF] border-1 rounded-xl px-4">
        <div className="lg:logo-wrapper w-7/12">
          <Link href={"/"}>
            <Image width={250} height={250} className="object-fit w-2/12 max-[1025px]:w-6/12" src="logo.png"
                   alt="Webique Logo"/>
          </Link>
        </div>

        <div className="lg:inline-flex gap-8 items-center max-[1025px]:hidden">
          <motion.div className="inline-flex gap-8 items-center">
            <Link href={"/#services"} className="inline-flex items-center gap-1">
              Services
            </Link>
            <Link href={"/#projects"}>Projects</Link>
            <Link href={"/"}>About</Link>
          </motion.div>

          <AnimatePresence initial={false}>
            {scrollYPage ? (
                <motion.div
                    layout
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0, width: 0}}
                    key={"dialog"}
                >
                  <ChooseServiceDialog variant={"default"}/>
                </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
        <div className="hamburger-wrapper lg:hidden max-[1025px]:block">
          <Sheet>
            <SheetTrigger><Menu/></SheetTrigger>
            <SheetContent side={"top"}>
              <SheetTitle>
                <Link href={"/"}>
                  <Image width={250} height={250} className="object-fit w-6/12" src="logo.png"
                         alt="Webique Logo"/>
                </Link>
              </SheetTitle>
              <div className="flex flex-col gap-8 items-start justify-center p-6">
                <Link href={"/#services"} className="inline-flex items-center gap-1">
                  Services
                </Link>
                <Link href={"/#projects"}>Projects</Link>
                <Link href={"/"}>About</Link>

                <ChooseServiceDialog variant={"default"} className={"w-full"}/>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
  );
}
