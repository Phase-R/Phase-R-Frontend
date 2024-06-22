import React from "react";

interface VidComp {
    title: string,
    desc: string,
    videoUrl: string,
}

interface VidPage {
    miniTitle: string,
    pageTitle: string,
    pageTitleColor: string,
    pageDesc: string,
    videos: VidComp[],
}

const IndividualVid = (props: VidComp) => {
    return(
        <>
            <div className="mb-4">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">{props.title}</h2>
                <br />
                <p>{props.desc}</p>
                <br />
                <div className="aspect-w-16 aspect-h-9">
                    <iframe src={props.videoUrl} allowFullScreen className="w-full aspect-video" />
                </div>
            </div>
        </>
    )
}

const VidComponent = (props: VidPage) => {
    return(
        <div className="text-white mt-[25%] md:mt-[15%] lg:mt-[8%] mb-[5%] p-8">
            <div className="font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
                <h3>{props.miniTitle.toUpperCase()}</h3> <br />
                <h2 className={`${props.pageTitleColor}`}>{props.pageTitle.toUpperCase()}</h2> <br />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl">{props.pageDesc}</p> <br />

            {props.videos.map((vid, index) => (
                <IndividualVid key={index} {...vid} />
            ))}
        </div>
    )
}

export default VidComponent;