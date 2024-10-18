import Link from "next/link"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

import { Poppins } from "next/font/google"
import { hslaToRgba } from "@tsparticles/engine"
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
        <>
            <div>
                <div className="text-white relative">
                    <Image src={props.bgImage} alt="Header" width={700} height={700} className="z-10 w-full mx-auto"></Image>
                    <div className="bg-black bg-opacity-80 z-100 xl:absolute lg:absolute xl:inset-0 lg:inset-0 px-20 py-[15%] w-full xl:w-[50%] lg:w-[50%] xl:min-h-[100vh] lg:min-h-[74vh] xl:bg-header-text-bg lg:bg-header-text-bg text-center">
                            <h1 className={`text-3xl xl:text-7xl lg:text-5xl font-bold ${poppins.className}`}>{props.headerHeading.toUpperCase()}</h1>
                            <p className="my-5 text-lg md:text-xl lg:text-2xl w-full">{props.headerDesc}</p>
                            {/* removed xl:w-[75%] lg:w-[75%] from above class ^ */}
                            <div className="sm:my-[10%] my-[20%] text-center mx-auto">
                                <Link href="/" className={`${props.headerColor} bg-green-700 hover:bg-green-800 w-[300px] rounded-full px-10 py-5`}>
                                    <span className={`${poppins.className}`}>Learn More &gt;&gt;</span>
                                </Link>
                        </div>
                    </div>
                </div>

                {props.headerDesctextArray.length > 0 && (
                    <div className={`text-white ${props.headerDesctextArray.length > 0 && poppins.className} text-sm md:text-xl lg:text-2xl z-200 absolute left-0 right-0 -translate-y-[50%] grid grid-cols-3 mx-auto text-center md:w-[75%] lg:w-[75%] xl:w-[75%] shadow-xl`}>
                        <h1 className={`bg-black py-10 rounded-l-xl`}><span className="drop-shadow">{props.headerSubtextArray[0].toUpperCase()}</span><br />{props.headerDesctextArray[0]}</h1>
                        <h1 className={`${props.headerColor} py-10 `}><span className="drop-shadow">{props.headerSubtextArray[1].toUpperCase()}</span><br />{props.headerDesctextArray[1]}</h1>
                        <h1 className={`bg-black py-10 rounded-r-xl`}><span className="drop-shadow">{props.headerSubtextArray[2].toUpperCase()}</span><br />{props.headerDesctextArray[2]}</h1>
                    </div>
                )}

            </div>
        </>
    )
}

PageHeader.defaultProps = {
    headerHeading: "HEADER HEADING",
    headerDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, tellus eget aliquam vulputate, justo nisl sodales mi, eget interdum ligula eros non eros.",
    bgImage: "/sports_page/sportsHeaderBg.svg",
    headerColor: "cyan",
    headerSubtextArray: [],
    headerDesctextArray: []
}

export default PageHeader