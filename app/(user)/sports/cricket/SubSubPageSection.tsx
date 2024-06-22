"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

import { Poppins } from "next/font/google";

const poppins = Poppins({subsets: ['latin'], weight : ['100', '200', '300','400', '500', '600', '700', '800', '900']})

interface InnerDrop {
    videoUrl: string,
    innerContent: string,
}

interface DropDownProps {
    Dropdowntext: string,
    content: DropDownProps[] | InnerDrop,
}

const isInnerDrop = (content: DropDownProps[] | InnerDrop): content is InnerDrop => {
    return (content as InnerDrop).videoUrl !== undefined;
};

const SubSubPageSection: React.FC<DropDownProps> = ({ Dropdowntext, content }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="text-white relative p-2 border-green-600 border-2 rounded-xl font-bold m-4">
            <p className={`cursor-pointer focus:outline-none ${isFocused ? 'focus:contents' : ''}`} onClick={() => setIsFocused(!isFocused)} tabIndex={0}>{Dropdowntext.toUpperCase()}</p>
            <div className={`absolute ${isFocused ? 'contents' : 'hidden'}`}>    
                {isInnerDrop(content) ? (
                    <div className={`flex flex-col sm:flex-row ${isFocused ? 'contents' : 'hidden'}`}>
                        <video width={700} height={700} className="mt-4 mb-4" src={content.videoUrl} autoPlay controls></video>
                        <p>{content.innerContent}</p>
                    </div>
                ) : (
                    (content as DropDownProps[]).map((real, index) => (
                        <SubSubPageSection key={index} {...real} />
                ))
            )}
            </div>
        </div>
    );
};

export default SubSubPageSection;