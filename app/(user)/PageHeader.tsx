import Link from "next/link"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

import { Poppins } from "next/font/google"
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

interface PropTypes {
    headerHeading: string,
    headerDesc: string,
    bgImage: string | StaticImport,
    headerColor: string,
    headerSubtextArray: string[],
    headerDesctextArray: string[]
}

const PageHeader = (props: PropTypes) => {
    return (
        <div className="relative bg-black">
            <div className="text-white relative">
                <Image
                    src={props.bgImage}
                    alt="Header"
                    width={700}
                    height={700}
                    className="z-10 w-full mx-auto"
                />
                <div
                    className="text-center bg-black bg-opacity-80 z-20 xl:absolute lg:absolute xl:inset-0 lg:inset-0 px-20 py-[15%] w-full xl:w-[50%] lg:w-[50%] flex flex-col justify-center"
                    style={{ height: '100%' }}
                >
                    <h1 className={`text-3xl xl:text-7xl lg:text-5xl font-bold ${poppins.className}`}>
                        {props.headerHeading.toUpperCase()}
                    </h1>
                    <p className="my-5 text-lg md:text-xl lg:text-2xl w-full">{props.headerDesc}</p>
                    <div className="sm:my-[10%] my-[20%] text-center mx-auto">
                        <Link
                            href="/"
                            className={`${props.headerColor} w-[300px] rounded-full px-10 py-5`}
                        >
                            <span className={`${poppins.className}`}>Learn More &gt;&gt;</span>
                        </Link>
                    </div>
                </div>
            </div>

            {props.headerSubtextArray && props.headerSubtextArray.length > 0 && (
                <div
                    className={`text-white ${poppins.className} text-sm md:text-xl lg:text-2xl z-30 absolute left-0 right-0 bottom-0 transform translate-y-1/2 grid grid-cols-3 mx-auto text-center w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] shadow-xl`}
                >
                    <h1 className="bg-[#191919] py-4 sm:py-6 md:py-10 rounded-l-xl opacity-90">
                        <span className="drop-shadow font-bold">
                            {props.headerSubtextArray[0]?.toUpperCase()}
                        </span>
                        <br />
                        <span className="font-bold">{props.headerDesctextArray?.[0]}</span>
                    </h1>
                    <h1 className={`${props.headerColor} py-4 sm:py-6 md:py-10`}>
                        <span className="drop-shadow font-bold">
                            {props.headerSubtextArray[1]?.toUpperCase()}
                        </span>
                        <br />
                        <span className="font-bold">{props.headerDesctextArray?.[1]}</span>
                    </h1>
                    <h1 className="bg-[#191919] py-4 sm:py-6 md:py-10 rounded-r-xl opacity-90">
                        <span className="drop-shadow font-bold">
                            {props.headerSubtextArray[2]?.toUpperCase()}
                        </span>
                        <br />
                        <span className="font-bold">{props.headerDesctextArray?.[2]}</span>
                    </h1>
                </div>
            )}
        </div>
    );
};



PageHeader.defaultProps = {
    headerHeading: "HEADER HEADING",
    headerDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, tellus eget aliquam vulputate, justo nisl sodales mi, eget interdum ligula eros non eros.",
    bgImage: "/sports_page/sportsHeaderBg.svg",
    headerColor: "cyan",
    headerSubtextArray: [],
    headerDesctextArray: []
}

export default PageHeader
