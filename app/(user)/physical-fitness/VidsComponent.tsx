import React from "react";

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
        <div className="text-white mt-[25%] md:mt-[15%] lg:mt-[8%] mb-[5%] p-8">
            <div className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
                <h3>{props.miniTitle.toUpperCase()}</h3> <br />
                <h2 className={`${props.pageTitleColor}`}>{props.pageTitle.toUpperCase()}</h2> <br />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl">{props.pageDesc}</p> <br />

            {props.videos.map((vid, index) => (
                <div key={index} className="mb-8 flex-col lg:flex-row lg:items-start flex px-4 lg:px-32">
                    <div className="lg:w-1/2 lg:pr-4">
                        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">{vid.title}</h2>
                        <p className="mt-2">{vid.desc}</p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:w-1/2 flex flex-col items-center">
                        <iframe src={vid.videoUrl} allowFullScreen className="w-full aspect-video" />
                        <button 
                            className="px-6 py-2 mt-4 bg-blue-500 text-white rounded-full hover:bg-blue-700"
                        >
                            Mark as Complete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default VidComponent;
