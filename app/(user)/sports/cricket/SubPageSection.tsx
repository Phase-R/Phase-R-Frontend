import Image from "next/image";
import Link from "next/link";

import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

interface PropTypes {
    imageUrl: string,
    dispText: string,
}

const SubPageSection = (props: PropTypes) => {
    return (
        <div className="flex justify-center items-center m-10">
            <div className=" relative group md:m-20 lg:m-20">
                <Image src={props.imageUrl} alt="SubPage section photo" width={700} height={700} className="rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-25 pl-10 pr-10"></Image>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inset-auto text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <p className="text-white text-lg font-bold">{props.dispText}</p>
                </div>
            </div>
        </div>
    )
}

export default SubPageSection;