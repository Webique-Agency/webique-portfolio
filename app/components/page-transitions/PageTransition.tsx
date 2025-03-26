"use client";

import React, {ReactNode} from 'react';
import {AnimatePresence} from "framer-motion";
import Inner from "@/app/components/page-transitions/Inner";

export default function PageTransition({children}: { children: ReactNode }) {
  return (
      <AnimatePresence mode={"wait"}>
        <Inner>
          {children}
        </Inner>
      </AnimatePresence>
  );
}
