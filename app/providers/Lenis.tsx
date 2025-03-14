// lenis-provider.tsx
"use client";
import {FC, useRef} from "react";
import ReactLenis from "lenis/react";

type LenisScrollProviderProps = {
    children: React.ReactNode;
};
const LenisScrollProvider: FC<LenisScrollProviderProps> = ({children}) => {
    const lenisRef = useRef(null);
    return (
        <ReactLenis ref={lenisRef} root options={{lerp: 1, duration: 1, smoothWheel: true}}>
            {children}
        </ReactLenis>
    );
};

export default LenisScrollProvider;
