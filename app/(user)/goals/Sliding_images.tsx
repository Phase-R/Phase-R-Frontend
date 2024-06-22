"use client";

import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Image from "next/image";

interface SliderImages {
    images: string[];
}

export default function SlidingImages(slider: SliderImages) {
    const [img, setImg] = useState(0);
    // const [opacity, setOpacity] = useState(100);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImg((img) => (img + 1) % slider.images.length);
            // const innerInterval = setInterval(() => {
            //     setOpacity((opacity) => (opacity - 20));
            // }, 1000);
            // setOpacity(100);
            // clearInterval(innerInterval);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return(
        <div>
            <Image src={slider.images[img]} alt="Missing images in string array" width={60} height={60} className={`w-full text-white transition-opacity`} />
        </div>
    )
}
