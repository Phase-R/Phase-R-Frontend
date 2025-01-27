import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

interface VidComp {
    title: string;
    desc: string;
    videoUrl: string;
}

interface VidPage {
    miniTitle: string;
    pageTitle: string;
    pageTitleColor: string;
    pageDesc: string;
    videos: VidComp[];
}

const VidComponent = (props: VidPage) => {
    return (
        <div className={`text-white mt-[4%] md:mt-[6%] lg:mt-[8%] p-8 ${poppins.className}`}>
            <div className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
                <h3>{props.miniTitle.toUpperCase()}</h3> <br />
                <h2 className={`${props.pageTitleColor}`}>{props.pageTitle.toUpperCase()}</h2> <br />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl">{props.pageDesc}</p> <br />

            {props.videos.map((vid, index) => (
                <div
                    key={index}
                    className="mb-12 md:mb-16 lg:mb-24 flex-col lg:flex-row lg:items-center flex px-4 md:px-12 lg:px-32 xl:px-48"
                >
                    <div className="lg:w-1/2 text-center md:text-center lg:text-left">
                        <h2 className="text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">{vid.title}</h2>
                        <p className="md:mt-1 lg:mt-2 xl:mt-3 text-lg md:text-xl lg:text-xl xl:text-2xl">{vid.desc}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:w-1/2 flex flex-col items-center">
                        <iframe
                            src={vid.videoUrl}
                            allowFullScreen
                            className="w-full aspect-video"
                        />
                        <button className="px-4 py-2 mt-4 md:px-8 md:py-4 md:mt-5 lg:px-8 lg:py-4 lg:mt-6 bg-blue-500 text-white rounded-full hover:bg-blue-700">
                            Mark as Complete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VidComponent;