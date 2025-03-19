"use client";

import React from 'react';
import heroAnimation from "./hero-animation.json";
import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function HeroAnimation() {
    return (
        <DynamicLottie animationData={heroAnimation} loop={true}></DynamicLottie>
    );
}
