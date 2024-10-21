import Image from "next/image"
import Link from "next/link"

import { Poppins } from "next/font/google"
import { Url } from "next/dist/shared/lib/router/router"
const poppins = Poppins({subsets: ['latin'], weight : ['100', '200', '300','400', '500', '600', '700', '800', '900']})

interface PropTypes {
    direction : string,
    imageUrl : string,
    heading : string,
    desc : string,
    buttonImg : string,
    buttonColor : string,
    linkTo: Url
}

const PageSection = (props : PropTypes) => {
    return (
        <>
            <div className={`text-white flex flex-col ${props.direction === "left" ? 'sm:flex-row' : 'sm:flex-row-reverse'} justify-center items-center xl:gap-20 lg:gap-20 md:gap-5 sm:gap-5 gap-5 lg:h-[60vh] pt-[20%] pb-[20%]`}>
                <div>
                    <Image src = {props.imageUrl} alt = "section photograph" width={500} height={500} className="rounded-lg"></Image>
                </div>
                <div className="text-center w-[60%] lg:w-[30%]">
                    <h1 className={`font-bold ${poppins.className} text-sm xl:text-4xl lg:text-3xl md:text-2xl`}>{props.heading.toUpperCase()}</h1>
                    <p className="my-10 text-md">{props.desc}</p>
                    <Link href = {props.linkTo} className={`border-y-4 rounded-2xl py-2 px-5 border-cyan-800`}>
                        <span className={`text-xl text-center ${poppins.className}`}>Discover &gt;&gt;</span>
                    </Link>
                </div>
            </div>  
        </>
    )
}

PageSection.defaultProps = {
    direction : "left",
    imageUrl : "/landing_page/phaser-goals.jpeg",
    heading : "A Very Nice Heading",
    desc : "A Very Nice Description",
    buttonImg : "/buttonimage.svg",
    buttonColor : 'button-primary'
}

export default PageSection;