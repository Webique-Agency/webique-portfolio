"use client";

import React from 'react';
import heroAnimation from "./hero-animation.json";
import Lottie from "lottie-react";

export default function HeroAnimation() {
    return (
        <Lottie animationData={heroAnimation} loop={true}></Lottie>
    );
}
